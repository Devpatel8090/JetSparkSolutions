// Shopping cart stored in the visitor's browser (localStorage).
export interface CartItem {
  id: string;
  name: string;
  price: number | null;
  qty: number;
}

const KEY = 'jetspark-cart';

export function getCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    /* storage unavailable – cart only lasts for this page */
  }
  document.dispatchEvent(new CustomEvent('cart:change'));
}

export function addToCart(item: Omit<CartItem, 'qty'>, qty = 1) {
  const items = getCart();
  const existing = items.find((i) => i.id === item.id);
  if (existing) existing.qty += qty;
  else items.push({ ...item, qty });
  saveCart(items);
}

export function setQty(id: string, qty: number) {
  saveCart(getCart().map((i) => (i.id === id ? { ...i, qty } : i)).filter((i) => i.qty > 0));
}

export function clearCart() {
  saveCart([]);
}

export function cartCount() {
  return getCart().reduce((n, i) => n + i.qty, 0);
}

export const formatINR = (n: number) => '₹' + n.toLocaleString('en-IN');
