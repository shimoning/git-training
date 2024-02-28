type Product = {
  name: string;
  price: number;
};

function calculatePrice(product: Product, quantity: number): number {
  return product.price * quantity;
}

export default calculatePrice;
