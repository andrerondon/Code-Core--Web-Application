const baseUrl = "http://localhost:3000";

const Product = {
  all() {
    return fetch(`${baseUrl}/products`).then((res) => res.json());
  },
  one(id) {
    return fetch(`${baseUrl}/products/${id}`).then((res) => res.json());
  },
};

// Async await syntax for the above helper
/*
const Product = {
  async all() {
    // return fetch(`${baseUrl}/products`).then((res) => res.json());
    const products = await fetch(`${baseUrl}/products`);
    return await products.json();
  },
  async one(id) {
    const product = await fetch(`${baseUrl}/products/${id}`);
    return await product.json();
  },
};
*/

document.addEventListener("DOMContentLoaded", async () => {
  // List all products
  const productsContainer = document.querySelector("ul.product-list");
  const products = await Product.all();
  const htmlString = products
    .map((product) => {
      return `
      <div class="item">
        <div class="right floated content">
            <button class="ui small red button" data-id="${product.id}">Delete</button>
        </div>
        <div class="content">
            <a href="" data-target="${product.id}">
                <h3>${product.id} - ${product.title}</h3>
            </a>
        </div>
     </div>
      `;
    })
    .join("");
  productsContainer.innerHTML = htmlString;
});
