(() => {
    const headerHTML = `
<header class="site-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-12 d-flex flex-wrap">
                <p class="d-flex me-4 mb-0">
                    <i style="color: var(--primary-color);" class="bi-geo-alt me-2"></i>
                    Bangangté, Banekane
                </p>

                <p class="d-flex mb-0">
                    <i style="color: var(--primary-color);" class="bi-envelope me-2"></i>

                    <a href="mailto:info@udm.aed-cm.org"> info@udm.aed-cm.org </a>
                </p>
            </div>

            <div class="col-lg-3 col-12 ms-auto d-lg-block d-none">
                <ul class="social-icon">
                    <li class="social-icon-item">
                        <a href="#" class="social-icon-link bi-twitter"></a>
                    </li>

                    <li class="social-icon-item">
                        <a href="#" class="social-icon-link bi-facebook"></a>
                    </li>

                    <li class="social-icon-item">
                        <a href="#" class="social-icon-link bi-instagram"></a>
                    </li>

                    <li class="social-icon-item">
                        <a href="#" class="social-icon-link bi-youtube"></a>
                    </li>

                    <li class="social-icon-item">
                        <a href="#" class="social-icon-link bi-whatsapp"></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>

<nav class="navbar navbar-expand-lg bg-light shadow-lg">
    <div class="container">
        <a class="navbar-brand" href="index.html">
            <img src="images/aed/logo AED.png" class="logo img-fluid" alt="Kind Heart Charity" />
            <span class="desktop">
                AED
                <small>Association pour l'Éducation et le Développement</small>
            </span>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link click-scroll" href="index.html#top">Accueil</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="index.html#section_2">à propos</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="index.html#section_3">Réalisation</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="index.html#section_4">Devenir membre</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link click-scroll dropdown-toggle" href="index.html#section_5"
                        id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">Nous</a>

                    <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                        <li>
                            <a class="dropdown-item" href="page_udm.html">UDM</a>
                        </li>

                        <li>
                            <a class="dropdown-item" href="page_cum.html">CUM</a>
                        </li>

                        <li>
                            <a class="dropdown-item" href="page_cmpm.html">CMPM</a>
                        </li>

                        <li>
                            <a class="dropdown-item" href="page_cev.html">CEV</a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="projet.html">Projet</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="index.html#section_6">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

    const footerHTML = `
<footer class="site-footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-12 mb-4">
                <a href="#"><img src="images/aed/logo AED.png" class="logo img-fluid" alt="" /></a>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mb-4">
                <h5 class="site-footer-title mb-3">Liens rapides</h5>

                <ul class="footer-menu">
                    <li class="footer-menu-item">
                        <a href="#section_2" class="footer-menu-link">à propos</a>
                    </li>

                    <li class="footer-menu-item">
                        <a href="#" class="footer-menu-link">Nous</a>
                    </li>

                    <li class="footer-menu-item">
                        <a href="#section_3" class="footer-menu-link">Réalisation</a>
                    </li>

                    <a href="#section_4" class="custom-btn btn mt-3">Nous rejoindre</a>
                </ul>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mx-auto">
                <h5 class="site-footer-title mb-3">Information de contact</h5>

                <p class="text-white d-flex mb-2">
                    <i style="color: var(--primary-color);" class="bi-telephone me-2"></i>
                    <a href="tel: 691 144 975" class="site-footer-link">
                        691 144 975 </a>/<a href="tel: 677 758 699" class="site-footer-link">
                        677 758 699 </a>/<a href="tel: 243 025 141" class="site-footer-link">
                        243 025 141
                    </a>
                </p>

                <p class="text-white d-flex">
                    <i style="color: var(--primary-color);" class="bi-envelope me-2"></i>

                    <a href="mailto:info@yourgmail.com" class="site-footer-link">
                        info@udm.aed-cm.org
                    </a>
                </p>

                <p class="text-white d-flex mt-3">
                    <i style="color: var(--primary-color);" class="bi-geo-alt me-2"></i>
                    Bangangté, Banekane
                </p>
            </div>
        </div>
    </div>

    <div class="site-footer-bottom">
        <div class="container d-flex justify-content-center">
            <div class="row w-100">
                <div class="col-lg-6 col-md-7 col-12 w-100">
                    <p class="copyright-text mb-0 text-center">
                        Copyright © AED 2025, Par
                        <a href="https://yaba-in.com" target="_blank" style="color: #c47e04">Yaba-In</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
`;

    const inject = (selector, html) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        el.innerHTML = html;
        return el;
    };

    const initLayout = () => {
        inject('[data-include="header"]', headerHTML);
        inject('[data-include="footer"]', footerHTML);
        document.dispatchEvent(new Event('layout:ready'));
    };

    // Inject immediately once script runs (DOM already parsed when script is at bottom)
    initLayout();
})();
