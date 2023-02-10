export const connection = async () => {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url, {
      moethd: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
