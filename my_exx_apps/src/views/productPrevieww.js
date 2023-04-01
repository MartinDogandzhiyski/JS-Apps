import { html } from "../../node_modules/lit-html/lit-html.js";

export const productPreview = (product) => html`
<div class="fruit">
  <img src="${product.imageUrl}" alt="example1" />
  <h3 class="title">${product.name}</h3>
  <p class="description">${product.description}</p>
  <a class="details-btn" href="/details/${product._id}">More Info</a>
`