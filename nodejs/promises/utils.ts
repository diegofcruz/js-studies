

export function delay(ms: number, value: string): Promise<string> {
  return new Promise<string>(resolve => setTimeout(() => resolve(value), ms))
}

export function rejectAfter(ms: number, error: string): Promise<string> {
  return new Promise<string>((_, reject) => { setTimeout(() => reject(error), ms) })
}
