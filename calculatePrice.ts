type Product = {
  name: string;
  price: number;
  isFood: boolean; // 食品かどうか
};

enum Rounding {
  ROUND = 0,
  CEIL = 1,
  FLOOR = 2,
}

// 税率2種類
const baseTaxRate = 0.1;  // 基本税率
const foodTaxRate = 0.08; // 軽減税率

function calculatePrice(product: Product, quantity: number, rounding: Rounding): number {
  // 軽減税率対応
  const taxRate = product.isFood ? foodTaxRate : baseTaxRate;

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
