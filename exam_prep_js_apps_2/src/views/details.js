import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteBook, getBookById, getLikesByBookId, getMyLikesBookId } from "../data/services.js"
import { getUserData } from "../util.js";


const detailsTemplate = (book, isOwner, getBookById, onDelete) => html`
<section id="details-page" class="details">
<div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <div class="actions">
    ${bookControlTemplate(book, isOwner, onDelete)}


        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        <a class="button" href="#">Like</a>

        <!-- ( for Guests and Users )  -->
        <div class="likes">
            <img class="hearts" src="/images/heart.png">
            <span id="total-likes">Likes: 0</span>
        </div>
        <!-- Bonus -->
    </div>
</div>
<div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
</div>
</section>
`

const bookControlTemplate = (book, isOwner, onDelete) => {
    if (isOwner) {
        return html`
        <a class="button" href="/edit/${book._id}">Edit</a>
        <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>
        `
    } else {
        return null;
    }
}


export async function detailsPage(ctx) {
    const bookId = ctx.params.id
    const book = await getBookById(bookId);
    const userId = getUserData()?._id
    const isOwner = book._ownerId === userId;
    const likes = await getLikesByBookId(bookId)
    const myLikes = await getMyLikesBookId(bookId, userId);
    ctx.render(detailsTemplate(book, isOwner, onDelete))
    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${book.title}?`)
        if (confirmed) {
            await deleteBook(bookId);
            ctx.page.redirect('/');
        }
    }
}
