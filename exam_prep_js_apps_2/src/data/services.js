import { post, get, put, del } from "./api.js";

export async function getAllBooks() {
    return get('/data/books?sortBy=_createdOn%20desc');
}