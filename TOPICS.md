# Topic Coverage

All planned exercise decks. Pull random exercises from any active deck daily.

**Status legend:**
- `[x]` — exercise list created + exercises completed
- `[~]` — exercise list created, actively in progress
- `[ ]` — not started (no exercise list yet)

---

## TypeScript

> Deck: `nodejs/exercises/typescript-exercises.md` — **active [~]**

- [~] Literal types, widening, control flow narrowing
- [ ] Generics — constraints (`extends`), defaults, inference from usage
- [ ] Utility types — `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Exclude`, `Extract`, `Awaited`, `ReturnType`, `Parameters`, `InstanceType`
- [ ] Discriminated unions + exhaustiveness (`assertNever`)
- [ ] Conditional types — distributivity, `never` filtering, deferred evaluation
- [ ] `infer` — extracting types inside conditional types
- [ ] Mapped types — `keyof`, `in`, `as` (key remapping), `+`/`-` modifiers
- [ ] Template literal types — string interpolation at type level, intrinsic string utilities
- [ ] Decorators — experimental (`experimentalDecorators`) vs stage-3
- [ ] Module augmentation + declaration merging
- [ ] `satisfies` operator — validate shape without widening
- [ ] Declaration files — `.d.ts`, `declare module`, `ambient` declarations

---

## JS Language Primitives

> Deck: to create — `nodejs/exercises/js-primitives-exercises.md`

- [ ] Promises — microtask queue, chaining, error propagation, `Promise.all/race/allSettled/any`
- [x] Set & WeakSet — uniqueness, iteration, weak references, use cases
- [ ] async/await — desugaring to Promises, concurrency patterns, error handling traps
- [ ] Map & WeakMap — reference semantics, ordered keys, use cases vs plain Object
- [ ] Iterators & Generators — `Symbol.iterator`, `yield*`, lazy sequences, infinite ranges
- [ ] Symbol — well-known symbols (`Symbol.iterator`, `Symbol.toPrimitive`, `Symbol.hasInstance`), global registry
- [ ] Proxy & Reflect — traps, meta-programming, validation, observable objects

---

## Node.js — Runtime Internals

> Deck: one exercise file per topic — `nodejs/exercises/<topic>-exercises.md`

### Event Loop & Scheduling

- [ ] Event Loop phases — timers → pending I/O → idle/prepare → poll → check → close; phase starvation
- [ ] Timers & scheduling — `setTimeout` vs `setImmediate` vs `process.nextTick`; microtask queue ordering
- [ ] Async iteration — `for await...of`, async generators, `Symbol.asyncIterator`

### I/O & Networking

- [ ] Streams — Readable, Writable, Transform, Duplex; `pipeline`; backpressure; `highWaterMark`
- [ ] File System (`fs/promises`) — streaming large files, `watch`, `stat`, recursive ops, permissions
- [ ] HTTP module — `createServer`, `IncomingMessage`, `ServerResponse`, chunked transfer, keep-alive
- [ ] Net module — raw TCP sockets, `createServer`/`createConnection`, backpressure over sockets
- [ ] Buffers & encoding — `Buffer.from`/`Buffer.alloc`, `TextEncoder`/`TextDecoder`, encoding pitfalls, zero-copy

### Concurrency

- [ ] Worker Threads — `workerData`, `MessageChannel`, `SharedArrayBuffer`, `Atomics`
- [ ] Child Processes — `spawn` vs `exec` vs `fork`; IPC; stdio piping; signal forwarding
- [ ] Cluster — `cluster.fork`, load balancing, worker state management

### Internals

- [ ] Event Emitter — listeners, memory leaks (`maxListeners`), `once`, `removeAllListeners`, custom emitters
- [ ] Crypto — SHA-256/SHA-512, HMAC, AES-GCM, `randomBytes`, `timingSafeEqual`
- [ ] Process — `process.env`/`argv`/`cwd`, signals (`SIGTERM`/`SIGINT`), exit codes, `uncaughtException`, `unhandledRejection`
- [ ] Module system — CJS internals (`require` cache, circular deps), ESM (`import.meta`, top-level await), CJS↔ESM interop
- [ ] AsyncLocalStorage — context propagation without prop drilling; request tracing; logging context
- [ ] Performance — `perf_hooks` (`performance.now`, `PerformanceObserver`), `v8` module, `--inspect`, heap snapshots

---

## DSA — Data Structures & Algorithms

> Deck: `nodejs/exercises/dsa-exercises.md` — **active [~]**
> (Split into sub-decks when file grows past ~15 exercises)

### Data Structures

- [~] Arrays & strings — two pointers, sliding window, in-place transformations
- [ ] Linked lists — singly, doubly, cycle detection (Floyd's), reversal, merge
- [ ] Stacks & queues — monotonic stack, deque, queue from two stacks
- [ ] Trees — BFS, DFS (pre/in/post-order), BST invariants, height, LCA
- [ ] Heaps & priority queues — min-heap internals, k-th largest, merge k sorted lists
- [ ] Hash maps — collision resolution, load factor, open addressing vs chaining
- [ ] Tries — prefix insertion/search, wildcard matching, autocomplete
- [ ] Graphs — adjacency list/matrix, BFS, DFS, topological sort, union-find (DSU)

### Algorithms

- [ ] Sorting — merge sort, quicksort, counting sort, radix sort; stability matters
- [ ] Binary search — on sorted arrays; on answer space (bisect-left pattern)
- [ ] Recursion & backtracking — decision tree model, pruning, subset/permutation generation
- [ ] Dynamic programming — memoization vs tabulation, state definition, reconstruction
- [ ] Greedy — proof pattern (exchange argument), interval scheduling, Huffman
- [ ] Divide & conquer — recurrence relations, master theorem

---

## LeetCode

> Ongoing solutions: `nodejs/leetcode/` — organized by pattern, not problem number

- [~] Arrays / two pointers — (11 Most Water, ...)
- [ ] Sliding window — (3 Longest Substring, 76 Minimum Window, ...)
- [~] Linked list — (148 Sort List, ...)
- [ ] Tree traversal — BFS/DFS patterns
- [ ] Graphs — BFS, DFS, topological sort
- [~] Divide & conquer / sorting — (148, ...)
- [ ] Dynamic programming — 1D, 2D, interval DP
- [ ] Binary search — sorted array, answer space
- [~] Backtracking — (77 Combinations, ...)

---

## Libraries

> Deck: one exercise file per library — `nodejs/exercises/<lib>-exercises.md`

- [ ] Express.js — routing, middleware chain, `next()`, error-handling middleware (4-arg)
- [ ] Zod — schema definition, transforms, refinements, `.parse` vs `.safeParse`, inference
- [ ] Vitest / Jest — unit tests, spies, mocks, async testing, coverage, snapshot
- [ ] Axios — interceptors, request cancellation, retries, timeout handling

---

## NestJS

> Deck: `nestjs/exercises/nestjs-exercises.md` — not started

- [ ] Modules & DI container — providers, scope (singleton / request / transient)
- [ ] Controllers & routing — `@Param`, `@Query`, `@Body`, route versioning
- [ ] Pipes & validation — `class-validator`, `ValidationPipe`, custom pipes, `ParseIntPipe`
- [ ] Guards & interceptors — `CanActivate`, `NestInterceptor`, RxJS operators
- [ ] Exception filters — `@Catch`, HTTP exception layer, custom exceptions
- [ ] Middleware — functional vs class, `NestMiddleware`, `configure()`
- [ ] Config module — `ConfigService`, environment validation with Zod/Joi
- [ ] Database (TypeORM) — entities, repositories, migrations, transactions, relations
- [ ] Authentication — JWT strategy, Passport, refresh tokens, `AuthGuard`
- [ ] WebSockets — `@WebSocketGateway`, rooms, namespaces, adapters
- [ ] Testing — unit (`TestingModule`), e2e (Supertest), mocking providers

---

## React

> Deck: `react/exercises/react-exercises.md` — not started

- [ ] Component model — reconciliation, VDOM, React Fiber, render phases
- [ ] `useState` & `useReducer` — state shape, batching, `useTransition`, `useDeferredValue`
- [ ] `useEffect` — dependency array semantics, cleanup, race conditions in fetches
- [ ] Custom hooks — composition, rules of hooks, extraction patterns
- [ ] Context API — re-render pitfalls, splitting contexts, `useMemo` provider value
- [ ] Performance — `useMemo`, `useCallback`, `React.memo`, React Profiler, why-did-you-render
- [ ] Refs — `useRef`, `forwardRef`, `useImperativeHandle`
- [ ] Forms — controlled vs uncontrolled, `useActionState`, React 19 form actions
- [ ] React Router v6 — `loader`, `action`, `Outlet`, nested routes, error routes
- [ ] React Query — `useQuery`, `useMutation`, invalidation, stale-while-revalidate, optimistic updates
- [ ] Error boundaries — class component pattern, `react-error-boundary` library
- [ ] Testing — React Testing Library, `user-event`, MSW for API mocking

---

## Vue

> Deck: `vue/exercises/vue-exercises.md` — not started

- [ ] Reactivity system — `ref` vs `reactive`, dependency tracking internals, `computed` lazy evaluation
- [ ] Template syntax — directives, `v-model`, slots (default/named/scoped), `v-for` key semantics
- [ ] Composition API — `setup()`, composables, lifecycle hooks, script setup sugar
- [ ] Props & emits — `defineProps`, `defineEmits`, runtime vs type-only declarations
- [ ] Watchers — `watch` vs `watchEffect`, `immediate`, `deep`, `flush` timing
- [ ] Provide / inject — typed injection keys, avoiding prop drilling
- [ ] Vue Router v4 — navigation guards, lazy loading, meta fields, scroll behavior
- [ ] Pinia — store definition, actions, `storeToRefs`, plugins, devtools
- [ ] Async components & Suspense — `defineAsyncComponent`, error/loading states
- [ ] Testing — Vue Test Utils, `mount` vs `shallowMount`, Vitest integration
