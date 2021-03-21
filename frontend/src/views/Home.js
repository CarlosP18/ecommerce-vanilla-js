import axios from "axios";

const Home = {
  render: async () => {
    const response = await axios({
      url: "http://localhost:5000/api/products",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response || response.statusText !== "OK") {
      return `<div>Error in getting data</div>`;
    }

    const products = response.data;

    return `
        <ul class='products'>
         ${products
           .map(
             (product) => `
         <li>
            <div class="product">
                <a href="/#/product/${product._id}"> <img src="${product.img}" alt="${product.name}"></a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">${product.name}</a>
                </div>
                <div class="category">${product.category}</div>
                <div class="price">$ ${product.price}</div>
            </div>
         </li>
         `
           )
           .join("\n")}
        `;
  },
};

export default Home;
