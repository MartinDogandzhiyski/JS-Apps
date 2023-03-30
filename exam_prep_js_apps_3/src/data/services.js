import { post, get, put, del } from "./api.js";

export async function getAllProducts() {
    return get('/data/products?sortBy=_createdOn%20desc');
}

export async function createBook(book) {
    return post('/data/books', book)
}


export async function getMyBooks(userId) {
    return get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getBookById(id) {
    return get(`/data/books/${id}`)
}