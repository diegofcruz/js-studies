

export async function delay(ms: number, value: string = ''): Promise<string> {
  return new Promise<string>(resolve => setTimeout(() => resolve(value), ms))
}

const simpleDelay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function rejectAfter(ms: number, error: string): Promise<string> {
  return new Promise<string>((_, reject) => { setTimeout(() => reject(error), ms) })
}

export async function getOrderId(): Promise<number> {
	return await simpleDelay(300).then(() => 42)
}

export async function getOrderDetails(id: number): Promise<{ id: number, product: string }> {
	return await simpleDelay(300).then(() => ({ id, product: 'Enlatados' }))
}

export function getShipping(product: string): Promise<string> {
  return delay(300).then(() => `${product} ships in 2 days`);
}

export function crash() { throw new Error("Do not") }
