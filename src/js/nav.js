function navigation() {
    const navigationContent = 
        `<nav class="navbar navbar-expand-sm navbar-dark sticky-top">
            <div class="container">
                <a class="navbar-brand" href="#"><img src="images/googly_logo_nav.png" alt="Googly Press Logo" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavBar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="NavBar">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="happy-books.html"><span class="double baseline-down">&#128515;</span>  Happy Little Books </a></li>
                        <li class="nav-item"><a class="nav-link" href="puppy-love.html"><span class="double baseline-down">&#128021;</span> Puppy Love Journal </a></li>
                        <li class="nav-item"><a class="nav-link" href="beatrix-potter.html"><span class="double baseline-down">&#128048;</span> Beatrix Potter </a></li>
                    </ul>
                </div>
            </div>
         </nav>
        `;
    
    document.getElementById('nav').innerHTML = navigationContent;
};