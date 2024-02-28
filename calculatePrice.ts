type Product = {
  name: string;
  price: number;
  isFood: boolean; // 食品かどうか
};

function calculatePrice(product: Product, quantity: number): number {
  // 軽減税率対応
  const taxRate = product.isFood
    ? 1.08 // 食品は8%税率
    : 1.1; // 食品以外は10%税率
  return Math.ceil(product.price * quantity * taxRate);
}

export default calculatePrice;
