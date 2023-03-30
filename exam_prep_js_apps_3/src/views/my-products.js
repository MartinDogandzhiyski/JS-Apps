import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllProducts } from "../data/services.js";
import { productPreview } from "./productPrevieww.js";

const dashboardTemplate = (products) => html`
<h2>Products</h2>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
            ${
                products.length === 0 ? html`<h2>No products yet.</h2>`
                : html`${products.map(productPreview)}`
            }
        </section>
    
`;

export async function productPage(ctx) {
    const products = await getAllProducts();
    console.log(products)
    ctx.render(dashboardTemplate(products));
}







