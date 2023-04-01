import { post, get, put, del } from "./api.js";

export async function getAllProducts() {
    return get('/data/fruits?sortBy=_createdOn%20desc');
}

export async function createProduct(product) {
    return post('/data/fruits', product)
}


export async function getMyProducts(userId) {
    return get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getProductById(id) {
    return get(`/data/fruits/${id}`)
}

export async function editProduct(id, product) {
    return put(`/data/fruits/${id}`, product);
}

export async function deleteProduct(id) {
    return del(`/data/fruits/${id}`)
}