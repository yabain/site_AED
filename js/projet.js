// Toggle mobile nav
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Scroll spy for nav links
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const observerSpy = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navAnchors.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === '#' + id);
                });
            }
        });
    },
    { root: null, rootMargin: '-55% 0px -40% 0px', threshold: 0 }
);

sections.forEach(sec => observerSpy.observe(sec));

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const observerReveal = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observerReveal.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

revealEls.forEach(el => observerReveal.observe(el));

// Animated counters
const counters = document.querySelectorAll('.counter');
let countersStarted = false;

function animateCounters() {
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target')) || 0;
        const duration = 1400;
        const start = 0;
        const startTime = performance.now();

        function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(start + (target - start) * progress);
            counter.textContent = value.toLocaleString('fr-FR');
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    });
}

const counterObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersStarted) {
                countersStarted = true;
                animateCounters();
                counterObserver.disconnect();
            }
        });
    },
    { threshold: 0.4 }
);

if (counters.length) {
    counterObserver.observe(counters[0]);
}

// Animate finance bars
const financeBars = document.querySelectorAll('.finance-bar-fill');
let financeStarted = false;

const financeObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !financeStarted) {
                financeStarted = true;
                financeBars.forEach(bar => {
                    const width = bar.getAttribute('data-width') || 0;
                    requestAnimationFrame(() => {
                        bar.style.width = width + '%';
                    });
                });
                financeObserver.disconnect();
            }
        });
    },
    { threshold: 0.3 }
);

if (financeBars.length) {
    financeObserver.observe(financeBars[0]);
}

// Pillars content (onglets)
const pillarsData = {
    1: {
        title: 'Formation pour la transformation',
        slogan: 'Slogan : « Former pour transformer. »',
        html: `
        <p>
          Ce pilier fait de la formation le moteur de la compétitivité économique et du rattrapage technologique.
        </p>
        <ul class="list" style="margin-top:0.6rem;">
          <li><span></span>Aligner les programmes sur les besoins des industries manufacturières, des services et de l’agro-industrie.</li>
          <li><span></span>Renforcer les plans STEM, Énergie, Numérique et Agro-industriel pour former des profils hautement employables.</li>
          <li><span></span>Développer des campus éclatés connectés aux pôles économiques régionaux.</li>
        </ul>
      `
    },
    2: {
        title: 'Développement du capital humain & bien-être',
        slogan: 'Slogan : « Une éducation qui élève, une santé qui protège. »',
        html: `
        <p>
          L’AED-2030 place la personne humaine au centre. Il s’agit de bâtir une société forte, solidaire et saine.
        </p>
        <ul class="list" style="margin-top:0.6rem;">
          <li><span></span>Améliorer l’éducation, la formation continue et l’employabilité.</li>
          <li><span></span>Renforcer l’accès à la santé, à la nutrition et aux facilités sociales de base.</li>
          <li><span></span>Développer la Couverture Santé Universelle (CSU) et des dispositifs de protection sociale.</li>
        </ul>
      `
    },
    3: {
        title: 'Emploi & entrepreneuriat durable',
        slogan: 'Slogan : « De la formation à l’emploi, un seul pas : l’AED agit. »',
        html: `
        <p>
          Ce pilier transforme la formation en véritable tremplin vers l’emploi et la création d’entreprises.
        </p>
        <ul class="list" style="margin-top:0.6rem;">
          <li><span></span>Promouvoir les compétences de nos étudiants pour l’auto-emploi et les projets publics/privés.</li>
          <li><span></span>Réorienter les cursus pour dynamiser la productivité en milieux ruraux et urbains.</li>
          <li><span></span>Créer des incubateurs, des stages et un accompagnement structuré à l’insertion professionnelle.</li>
        </ul>
      `
    },
    4: {
        title: 'Gouvernance, décentralisation & gestion stratégique',
        slogan: 'Slogan : « Mieux gouverner pour mieux servir. »',
        html: `
        <p>
          Ce pilier ancre l’AED dans une gouvernance moderne, territorialisée et responsable.
        </p>
        <ul class="list" style="margin-top:0.6rem;">
          <li><span></span>Clarifier les rôles entre AG, Conseil d’Orientation, Bureau Exécutif et Collège de Sauvegarde.</li>
          <li><span></span>Digitaliser la gestion associative, renforcer l’audit interne et la transparence financière.</li>
          <li><span></span>Rajeunir et féminiser les instances, tout en impliquant davantage les associations départementales et la diaspora.</li>
        </ul>
      `
    }
};

const pillarTabs = document.querySelectorAll('.pillar-tab');
const pillarContent = document.getElementById('pillarContent');

pillarTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const id = tab.getAttribute('data-pillar');
        pillarTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const data = pillarsData[id];
        if (data) {
            pillarContent.innerHTML = `
          <h3>${data.title}</h3>
          <div class="slogan">${data.slogan}</div>
          ${data.html}
        `;
        }
    });
});

// FAQ accordéons
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');
    const toggle = item.querySelector('.faq-toggle');

    header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => {
            i.classList.remove('open');
            i.querySelector('.faq-body').style.maxHeight = '0px';
            i.querySelector('.faq-toggle').textContent = '+';
        });

        if (!isOpen) {
            item.classList.add('open');
            body.style.maxHeight = body.scrollHeight + 'px';
            toggle.textContent = '–';
        }
    });
});

// Initial FAQ height
window.addEventListener('load', () => {
    faqItems.forEach(item => {
        const body = item.querySelector('.faq-body');
        body.style.maxHeight = '0px';
    });
});