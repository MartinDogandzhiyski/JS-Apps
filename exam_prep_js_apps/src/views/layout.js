import { html } from '../../node_modules/lit-html/lit-html.js';

//TODO replace with actual layout
export const layoutTemplate = (userData, content) => html`
<header>
<!-- Navigation -->
<a id="logo" href="/"
  ><img id="logo-img" src="./images/logo.jpg" alt=""
/></a>

<nav>
  <div>
    <a href="/catalog">Dashboard</a>
  </div>

  <!-- Logged-in users -->
  ${userData ? html`<div class="user">
  <a href="/create">Create Offer</a>
  <a href="/logout">Logout</a>
</div>` : html`

<!-- Guest users -->
<div class="guest">
  <a href="/login">Login</a>
  <a href="/register">Register</a>
</div>`}
  
</nav>
</header>

<main>
    ${content}
</main>
`;