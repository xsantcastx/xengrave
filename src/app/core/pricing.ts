export type Complexity = 'simple'|'standard'|'intricate';

export function calcEngraving(costBase: number, complexity: Complexity, qty: number) {
  const tierMap: Record<Complexity, number> = { simple: 12, standard: 20, intricate: 35 };
  const tier = tierMap[complexity];
  const volumeDiscount = qty >= 50 ? 0.8 : qty >= 20 ? 0.9 : qty >= 10 ? 0.95 : 1;
  return tier * volumeDiscount;
}

export function calcTotal(basePrice: number, complexity: Complexity, qty: number) {
  const engraving = calcEngraving(basePrice, complexity, qty);
  const unit = basePrice + engraving;
  return { unit, subtotal: unit * qty };
}
