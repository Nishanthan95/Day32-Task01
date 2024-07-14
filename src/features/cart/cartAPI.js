export const fetchCartItems = async () => {
    const response = await fetch('/product.json');
    const data = await response.json();
    return data.products;
  };
  