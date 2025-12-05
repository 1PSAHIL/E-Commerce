import axios from "axios";

export async function fetchAllProducts() {
  let all = [];
  const limit = 100;

  for (let skip = 0; skip < 500; skip += limit) {
    const res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    all = [...all, ...res.data.products];
  }
  return all;
}
