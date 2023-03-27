//TODO change user object according to project requirements

import { clearUserData, setUserData } from "../util";
import { get, post } from "./api";


const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    setUserData(result);
}

export async function login(email, password) {
    const result = await post(endpoints.register, { email, password });
    setUserData(result);
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
}

