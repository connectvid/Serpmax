// Serpmax Landing Page JavaScript

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Code tabs functionality
const tabs = document.querySelectorAll('.code-tabs .tab');
const codeExamples = {
    'Python': `<span class="keyword">import</span> serpmax

client = serpmax.<span class="function">Client</span>(<span class="string">"your_api_key"</span>)

result = client.<span class="function">search</span>(
    <span class="property">query</span>=<span class="string">"best restaurants in SF"</span>,
    <span class="property">location</span>=<span class="string">"San Francisco, CA"</span>,
    <span class="property">num</span>=<span class="number">10</span>
)

<span class="keyword">for</span> item <span class="keyword">in</span> result.organic:
    <span class="function">print</span>(item.title, item.link)`,

    'Node.js': `<span class="keyword">const</span> Serpmax = <span class="function">require</span>(<span class="string">'serpmax'</span>);

<span class="keyword">const</span> client = <span class="keyword">new</span> <span class="function">Serpmax</span>(<span class="string">'your_api_key'</span>);

<span class="keyword">const</span> result = <span class="keyword">await</span> client.<span class="function">search</span>({
    <span class="property">query</span>: <span class="string">'best restaurants in SF'</span>,
    <span class="property">location</span>: <span class="string">'San Francisco, CA'</span>,
    <span class="property">num</span>: <span class="number">10</span>
});

result.organic.<span class="function">forEach</span>(item <span class="keyword">=></span> {
    console.<span class="function">log</span>(item.title, item.link);
});`,

    'cURL': `<span class="function">curl</span> -X POST <span class="string">'https://api.serpmax.com/search'</span> \\
  -H <span class="string">'X-API-Key: your_api_key'</span> \\
  -H <span class="string">'Content-Type: application/json'</span> \\
  -d <span class="string">'{
    "q": "best restaurants in SF",
    "location": "San Francisco, CA",
    "num": 10
  }'</span>`
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        // Update code content
        const language = tab.textContent;
        const codeElement = document.querySelector('.docs-code .code-window code');
        if (codeElement && codeExamples[language]) {
            codeElement.innerHTML = codeExamples[language];
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .pricing-card, .doc-feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Stats counter animation
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }

        if (target >= 1000000000) {
            element.textContent = (current / 1000000000).toFixed(0) + 'B+';
        } else if (target >= 1000000) {
            element.textContent = (current / 1000000).toFixed(0) + 'M+';
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Stats are already displayed, animation is optional
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

console.log('Serpmax landing page loaded successfully!');
