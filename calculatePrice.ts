type Product = {
  name: string;
  price: number;
};

// 今後の増税に備えて消費税率を定数として定義
const taxRate = 0.05;

function calculatePrice(product: Product, quantity: number): number {
  // 消費税3％導入 -> 5％に変更
  return Math.ceil(product.price * quantity * (1 + taxRate));
}

export default calculatePrice;
