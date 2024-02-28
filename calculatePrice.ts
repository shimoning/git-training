type Product = {
  name: string;
  price: number;
};

enum Rounding {
  ROUND = 0,
  CEIL = 1,
  FLOOR = 2,
}

// 今後の増税に備えて消費税率を定数として定義
const taxRate = 0.05;

function calculatePrice(product: Product, quantity: number, rounding: Rounding): number {
  // 税込価格
  const price = product.price * quantity * (1 + taxRate);

  // 端数処理
  switch (rounding) {
    case Rounding.ROUND:
      return Math.round(price);
    case Rounding.CEIL:
      return Math.ceil(price);
    case Rounding.FLOOR:
      return Math.floor(price);
  }
}

export default calculatePrice;
