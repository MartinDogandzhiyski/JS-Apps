import { post, get, put, del } from "./api.js";

export async function getAllProducts() {
    return get('/data/products?sortBy=_createdOn%20desc');
}

export async function createProduct(product) {
    return post('/data/products', product)
}


export async function getMyProducts(userId) {
    return get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getProductById(id) {
    return get(`/data/products/${id}`)
}

export async function editProduct(id, product) {
    return put(`/data/products/${id}`, product);
}

export async function deleteProduct(id) {
    return del(`/data/products/${id}`)
}