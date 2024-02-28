type Product = {
  name: string;
  price: number;
};

enum Rounding {
  ROUND = 0,
  CEIL = 1,
  FLOOR = 2,
}

function calculatePrice(product: Product, quantity: number, rounding: Rounding): number {
  // 消費税3％導入 -> 5％に変更
  const price = product.price * quantity * 1.05;

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
