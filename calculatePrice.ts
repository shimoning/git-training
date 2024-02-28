type Product = {
  name: string;
  price: number;
};

enum Rounding {
  ROUND = 0,
  CEIL = 1,
  FLOOR = 2,
}

// 消費税率 5% -> 8% に変更
const taxRate = 0.08;

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
