import { html } from "../../node_modules/lit-html/lit-html.js";
import { editProduct, getProductById } from "../data/services.js";
import { createSubmitHandler } from "../util.js";


const editTemplate = (product, onSubmit) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Product</h2>
            <form class="edit-form" @submit = ${onSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                .value=${product.name}
                placeholder="Product Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                .value=${product.imageUrl}
                placeholder="Product Image"
              />
              <input
                type="text"
                name="category"
                id="product-category"
                .value=${product.category}
                placeholder="Category"
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                .value=${product.description}
                rows="5"
                cols="50"
              ></textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                .value=${product.price}
                placeholder="Price"
              />
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`

export async function editPage(ctx) {
    const productId = ctx.params.id
    const product = await getProductById(ctx.params.id)
    ctx.render(editTemplate(product, createSubmitHandler(onSubmit)))
    async function onSubmit(data) {
        if (Object.values(data).some(x => x === '')) {
            return alert("All fields are required!")
        }
        await editProduct(productId, data)
        ctx.page.redirect(`/details/${productId}`)
    }
  
}