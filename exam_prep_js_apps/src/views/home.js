import { html } from "../../node_modules/lit-html/lit-html.js";

//TODO replace with actual view
const homeTemplate = () => html`
    <h1>home page</h1>
    <p>welcome</p>
`;

export function homePage(ctx) {
    ctx.render(homeTemplate());
}