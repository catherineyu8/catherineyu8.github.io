var navbar = ` 
    <nav>
        <a href="../index.html">Home</a>
        <a href="about.html">About</a>
        <a href="projects.html">Projects</a>
        <a href="contact.html">Contact</a>
    </nav>`;

// inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin", navbar);
