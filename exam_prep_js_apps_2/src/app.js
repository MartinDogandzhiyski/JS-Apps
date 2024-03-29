import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './views/layout.js';
import { get } from './data/api.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { createPage } from './views/create.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { myBooksPage } from './views/my-books.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

//TODO change render root depending on project html structure
const root = document.getElementById('container');

page(decorateContext);
page('index.html', '/');
page('/', homePage);
page('/create', createPage);
page('/login', loginPage);
page('/my-books', myBooksPage);
page('/register', registerPage);
page(`/edit/:id`, editPage);

page('/logout', logoutAction);
page('/details/:id', detailsPage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;


    next();
}

//TODO inject dependancies
function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);
}

function logoutAction(ctx) {
    logout();
    ctx.page.redirect('/');
}