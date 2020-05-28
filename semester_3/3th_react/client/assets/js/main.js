const baseUrl = "http://localhost:3000";

const Product = {
  all() {
    return fetch(`${baseUrl}/products`).then((res) => res.json());
  },
  one(id) {
    return fetch(`${baseUrl}/products/${id}`).then((res) => res.json());
  },
};

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
