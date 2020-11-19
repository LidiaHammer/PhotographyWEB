//////////// Display NavBar(s)///////////////

function displayNavbar(): string {
  return `        
  <a class="navbar-brand" href="index.html">
      <img id="logo" src="./img/logo.png" alt="Logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav mr-auto">

        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="about.html">About Me<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="workshops.html">Workshops</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link js-scroll-trigger dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">Gallery</a>
          <div class="dropdown-menu bg-dark">
            <a class="dropdown-item text-light" href="landscape.html">Landscapes</a>
            <a class="dropdown-item text-light" href="portrait.html">Portraits</a>
          </div>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="contact.html">Contact</a>
        </li>
      </ul>

      <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-cart2 text-light" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
      </svg>

    </div>
  `
};

$("nav").append(displayNavbar());


////////////////// Display Footer ///////////////////////

function displayFooter() {
  return `
  <div class="d-flex justify-content-center bg-light">
    <i class="fab fa-3x m-2 footer-icon fa-instagram"></i>
    <i class="fab fa-3x m-2 footer-icon fa-facebook-f"></i>
    <i class="fab fa-3x m-2 footer-icon fa-pinterest-p"></i>
    <i class="fab fa-3x m-2 footer-icon fa-vimeo-v"></i>
    <i class="fab fa-3x m-2 footer-icon fa-twitter"></i></i>
  </div>
  `
}

$("footer").append(displayFooter());