import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../util.js";
import { bookPreview } from "./common.js";
import { getMyBooks } from "../data/services.js";

const myBooksTemplate = (books) => html`
<section id="my-books-page" class="my-books">
<h1>My Books</h1>
<!-- Display ul: with list-items for every user's books (if any) -->

    ${
        books.length === 0 ? html`<p class="no-books">No books in database!</p>` 
        : html`
        <ul class="my-books-list">
            ${books.map(bookPreview)}
        </ul>
        `
    }

</section>
`

export async function myBooksPage(ctx) {
    const userData = getUserData();
    const books = await getMyBooks(userData._id);
    ctx.render(myBooksTemplate(books))
}