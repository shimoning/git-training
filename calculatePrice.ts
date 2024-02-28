type Product = {
  name: string;
  price: number;
};

function calculatePrice(product: Product, quantity: number): number {
  // 消費税3％導入
  return Math.ceil(product.price * quantity * 1.03);
}

export default calculatePrice;
