export const productApiCallService = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log("Call Again");
    return data;
  }
