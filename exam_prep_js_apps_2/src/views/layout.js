import { html } from '../../node_modules/lit-html/lit-html.js';

//TODO replace with actual layout
export const layoutTemplate = (userData, content) => html`
<header id="site-header">
<!-- Navigation -->
<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/">Dashboard</a>
        ${
            !userData ? html`<div id="guest">
            <a class="button" href="/login">Login</a>
            <a class="button" href="/register">Register</a>
        </div>` : html`<div id="user">
        <span>Welcome, ${userData.email}</span>
        <a class="button" href="/my-books">My Books</a>
        <a class="button" href="/create">Add Book</a>
        <a class="button" href="/logout">Logout</a>
    </div>`
        }
        <!-- Guest users -->
        
        <!-- Logged-in users -->
    </section>
</nav>
</header>
    <main >
        ${content}
    </main>
<footer id="site-footer">
    <p>@OnlineBooksLibrary</p>
</footer>
    
`;