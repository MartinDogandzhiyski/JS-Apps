import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import { createProduct } from "../data/services.js";


const createTemplate = (onSubmit) => html`
<section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form class="create-form" @submit=${onSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
              />
              <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="fruit-nutrition"
              name="nutrition"
              placeholder="Nutrition"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fruit</button>
            </form>
          </div>
        </section>
        <!-- Edit Page (Only for logged-in users) -->
        
`

export function createPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onSubmit)))

    async function onSubmit(data) {
        if (Object.values(data).some(x => x === '')) {
            return alert("All fields are required!")
        }
        await createProduct(data);
        ctx.page.redirect("/my-products");
    }

}