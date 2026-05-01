// ## Bonus Challenge

// Combine what you've learned: implement a `retry(fn, times)` utility that retries a failing promise up to `times` attempts before giving up.

// ```ts
// function retry<T>(fn: () => Promise<T>, times: number): Promise<T> {
//   return fn().catch((err) => {
//     if (times <= 1) throw err;
//     console.log(`Retrying... attempts left: ${times - 1}`);
//     return retry(fn, times - 1);
//   });
// }

// let attempt = 0;
// const unreliable = () =>
//   new Promise<string>((resolve, reject) => {
//     attempt++;
//     if (attempt < 3) reject(new Error(`Attempt ${attempt} failed`));
//     else resolve("Success on attempt " + attempt);
//   });

// retry(unreliable, 5)
//   .then((result) => console.log(result))
//   .catch((err) => console.error("Gave up:", err.message));
// ```

const BUCKET_MAX = 10

const leakBucket: Array<{
  attempt: number
  err: unknown
  // WeakRef permite que o GC colete o payload quando houver pressao de memoria.
  retainedPayload: WeakRef<{ data: string }>
  fnRef: () => Promise<unknown>
}> = []

function retry<T>(fn: () => Promise<T>, times: number): Promise<T> {
  return fn().catch((err) => {
    // Estrategia 1 — WeakRef: o payload pode ser coletado pelo GC a qualquer momento.
    const payload = new WeakRef({ data: 'x'.repeat(1_000_000) })

    // Estrategia 2 — Cap: descarta a entrada mais antiga quando o bucket estiver cheio.
    if (leakBucket.length >= BUCKET_MAX) {
      leakBucket.shift()
    }

    leakBucket.push({
      attempt,
      err,
      retainedPayload: payload,
      fnRef: fn as unknown as () => Promise<unknown>
    })

    if (times <= 1) throw err
    console.log(`Retrying... attempts left ${times-1}`)
    return retry(fn, times-1)
  })
}

let attempt = 0
const unreliable = () => new Promise<string>((resolve, reject) => {
  attempt++
  if (attempt < 3) reject(new Error(`Attempt ${attempt} failed`))
  else resolve(`Success on attempt ${attempt}`)
})

retry(unreliable, 5)
  .then((result) => console.log(result))
  .catch((err) => console.error(err))

const toMB = (bytes: number): string => (bytes / 1024 / 1024).toFixed(2)

const nodeProcess = (globalThis as {
  process?: {
    memoryUsage: () => { heapUsed: number; rss: number }
  }
}).process

setInterval(() => {
  // Reinicia para forcar 2 falhas por ciclo (e acumular vazamento no catch).
  attempt = 0

  retry(unreliable, 5)
    .then(() => {
      if (!nodeProcess) {
        console.log(`[leak-demo] leakedEntries=${leakBucket.length} (memoryUsage indisponivel neste runtime)`)
        return
      }

      const usage = nodeProcess.memoryUsage()
      console.log(
        `[leak-demo] heapUsed=${toMB(usage.heapUsed)}MB rss=${toMB(usage.rss)}MB leakedEntries=${leakBucket.length}`
      )
    })
    .catch((err) => {
      console.error('[leak-demo] unexpected final failure:', err)
    })
}, 1000)
