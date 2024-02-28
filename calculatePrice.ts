type Product = {
  name: string;
  price: number;
};

function calculatePrice(product: Product, quantity: number): number {
  // 消費税3％導入 -> 5％に変更 -> 8％に変更
  return Math.ceil(product.price * quantity * 1.08);
}

export default calculatePrice;
