import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteProduct, getProductById } from "../data/services.js"
import { getUserData } from "../util.js";


const detailsTemplate = (product, isOwner, getProductById, onDelete) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${product.imageUrl}" alt="example1" />
            <p id="details-title">${product.title}</p>
            <p id="details-category">
              Category: <span id="categories">${product.category}</span>
            </p>
            <p id="details-price">
              Price: <span id="price-number">${product.price}</span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span
                  >${product.description}</span
                >
              </div>
            </div>
            ${productControlTemplate(product, isOwner, onDelete)}


              <!--Bonus - Only for logged-in users ( not authors )-->
              <a href="" id="buy-btn">Buy</a>
            </div>
          </div>
        </section>
`

const productControlTemplate = (product, isOwner, onDelete) => {
    if (isOwner) {
        return html`
        <div id="action-buttons">
              <a href="/edit/${product._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        `
    } else {
        return null;
    }
}


export async function detailsPage(ctx) {
    const productId = ctx.params.id
    const product = await getProductById(productId);
    const userId = getUserData()?._id
    const isOwner = product._ownerId === userId;
    ctx.render(detailsTemplate(product, isOwner, onDelete))
    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${product.title}?`)
        if (confirmed) {
            await deleteProduct(productId);
            ctx.page.redirect('/my-products');
        }
    }
}
