import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../data/auth.js";
import { createSubmitHandler } from "../util.js";

//TODO replace with actual view
const registerTemplate = (onRegister) => html`
    <h1>register page</h1>
    <form @submit=${onRegister}>
        <label>Email: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <label>Repeat password: <input type="password" name="repass"></label>
        <button>register</button>
        
    </form>
`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    //TODO change user object based on requirements
    async function onRegister({email, password, repass}, form) {
        if (email == '', password == '') {
            return alert('All fields are required')
        }
        if (password != repass) {
            return alert('Please enter a same password')
        }
        await register(email, password);
        form.reset();
        //TODO use redirect location from requirements
        ctx.page.redirect('/')
    }
}