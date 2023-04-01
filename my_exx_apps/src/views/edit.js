import { html } from "../../node_modules/lit-html/lit-html.js";
import { editProduct, getProductById } from "../data/services.js";
import { createSubmitHandler } from "../util.js";


const editTemplate = (product, onSubmit) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form class="edit-form" @submit = ${onSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                .value=${product.name}
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                .value=${product.imageUrl}
                placeholder="Fruit Image URL"
              />
              <textarea
                id="fruit-description"
                .value=${product.description}
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
              ></textarea>
              <textarea
                id="fruit-nutrition"
                .value=${product.nutrition}
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
              ></textarea>
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