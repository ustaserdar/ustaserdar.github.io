// Multi-language support
let currentLanguage = localStorage.getItem('language') || 'tr';
let translations = {};

// Embedded translations - no need for fetch requests
const translationData = {
    tr: {
        "nav": {
            "home": "Ana Sayfa",
            "about": "Hakkımda",
            "experience": "Deneyimler",
            "articles": "Yazılarım",
            "contact": "İletişim"
        },
        "hero": {
            "greeting": "Merhaba, Ben",
            "name": "Serdar Usta",
            "title": "Yazılım Takım Lideri & Geliştirici",
            "description": "Hepsiburada'da Yazılım Takım Lideri olarak çalışıyorum. Modern teknolojiler ile ölçeklenebilir çözümler geliştiriyorum.",
            "contactBtn": "İletişime Geç",
            "articlesBtn": "Yazılarımı Oku"
        },
        "about": {
            "title": "Hakkımda",
            "subtitle": "Yazılım dünyasındaki yolculuğum",
            "description1": "Hepsiburada'da yazılım takım lideri olarak, modern teknolojiler kullanarak ölçeklenebilir ve sürdürülebilir yazılım çözümleri geliştiriyorum. Hepsiburada'da ekip lideri olarak çalışırken, aynı zamanda yazılım dünyasındaki deneyimlerimi Medium'da yazılar yazarak paylaşıyorum.",
            "description2": "Teknoloji tutkusu ve ekip yönetimi deneyimim ile birlikte, modern yazılım geliştirme süreçlerinde aktif rol alıyorum. .NET Core, mikroservis mimarileri ve dağıtık sistemler konularında uzmanlaşmış durumdayım.",
            "skillsTitle": "Teknik Yetenekler"
        },
        "experience": {
            "title": "Profesyonel Deneyim",
            "subtitle": "Kariyer yolculuğum",
            "hepsiburada": {
                "position": "Yazılım Takım Lideri",
                "company": "Hepsiburada",
                "period": "2021 - ",
                "description": "E-ticaret platformunun kritik sistemlerini yöneten ekibin lideri olarak, ölçeklenebilir mikroservis mimarileri geliştiriyor ve ekip performansını optimize ediyorum."
            },
            "neredekal": {
                "position": "Yazılım Geliştirici",
                "company": "Neredekal",
                "period": "2020 - 2021",
                "description": "Turizm sektöründe meta search teknolojileri kullanarak otel karşılaştırma platformunun geliştirilmesinde aktif rol aldım. Mikroservis mimarileri ve API entegrasyonları konusunda deneyim kazandım."
            },
            "bein": {
                "position": "Yazılım Geliştirici",
                "company": "beIN Media Group",
                "period": "2019 - 2020",
                "description": "OTT (Over-The-Top) medya servisleri ve streaming platformları geliştirdim. Canlı yayın teknolojileri ve video işleme sistemleri konusunda uzmanlaştım."
            },
            "sovos": {
                "position": "Yazılım Geliştirici",
                "company": "Sovos Foriba",
                "period": "2018 - 2019",
                "description": "Elektronik belge iş akışları alanında e-fatura, e-arşiv ve e-defter sistemlerinin geliştirilmesinde yer aldım. Kurumsal ölçekteki fintech çözümlerinde deneyim kazandım."
            }
        },
        "articles": {
            "title": "Medium Yazılarım",
            "subtitle": "Yazılım dünyasındaki deneyimlerimi paylaşıyorum",
            "article1": {
                "title": "CAP Kütüphanesi ve Idempotency",
                "description": "DotNetCore CAP kütüphanesi için idempotency problemi çözümü",
                "readMore": "Oku"
            },
            "article2": {
                "title": "ASP.NET Core Health Check",
                "description": ".NET 8 ile ASP.NET Core Web API uygulamalarında Health Check altyapısı",
                "readMore": "Oku"
            },
            "viewAll": "Tüm Makalelerimi Görüntüle"
        },
        "contact": {
            "title": "İletişim",
            "subtitle": "Sosyal medya hesaplarım ve iletişim bilgilerim",
            "location": "İstanbul, Türkiye",
            "position": "Hepsiburada - Yazılım Takım Lideri"
        },
        "footer": {
            "copyright": "© 2025 Serdar Usta. Tüm hakları saklıdır.",
            "tagline": "Teknoloji ile hayatı daha kolay hale getiriyorum 🚀"
        }
    },
    en: {
        "nav": {
            "home": "Home",
            "about": "About",
            "experience": "Experiences",
            "articles": "Articles",
            "contact": "Contact"
        },
        "hero": {
            "greeting": "Hello, I'm",
            "name": "Serdar Usta",
            "title": "Software Development Team Lead & Developer",
            "description": "I work as a Software Development Team Lead at Hepsiburada. I develop scalable solutions using modern technologies.",
            "contactBtn": "Get In Touch",
            "articlesBtn": "Read My Articles"
        },
        "about": {
            "title": "About Me",
            "subtitle": "My journey in the software world",
            "description1": "As an Hepsiburada software development team leader, I develop scalable and sustainable software solutions using modern technologies. While working as a team leader at Hepsiburada, I also share my experiences in the software world by writing articles on Medium.",
            "description2": "With my passion for technology and team management experience, I take an active role in modern software development processes. I specialize in .NET Core, microservice architectures, and distributed systems.",
            "skillsTitle": "Technical Skills"
        },
        "experience": {
            "title": "Professional Experience",
            "subtitle": "My career journey",
            "hepsiburada": {
                "position": "Software Development Team Lead",
                "company": "Hepsiburada",
                "period": "2021 - ",
                "description": "As the leader of the team managing critical systems of the e-commerce platform, I develop scalable microservice architectures and optimize team performance."
            },
            "neredekal": {
                "position": "Software Developer",
                "company": "Neredekal",
                "period": "2020 - 2021",
                "description": "I played an active role in developing hotel comparison platform using meta search technologies in tourism sector. Gained experience in microservice architectures and API integrations."
            },
            "bein": {
                "position": "Software Developer",
                "company": "beIN Media Group",
                "period": "2019 - 2020",
                "description": "Developed OTT (Over-The-Top) media services and streaming platforms. Specialized in live streaming technologies and video processing systems."
            },
            "sovos": {
                "position": "Software Developer",
                "company": "Sovos Foriba",
                "period": "2018 - 2019",
                "description": "Participated in developing e-invoice, e-archive and e-ledger systems in electronic document workflows. Gained experience in enterprise-scale fintech solutions."
            }
        },
        "articles": {
            "title": "My Medium Articles",
            "subtitle": "Sharing my experiences in the software world",
            "article1": {
                "title": "CAP Library and Idempotency",
                "description": "Idempotency problem solution for DotNetCore CAP library",
                "readMore": "Read Article"
            },
            "article2": {
                "title": "ASP.NET Core Health Check",
                "description": "Health Check infrastructure in ASP.NET Core Web API applications with .NET 8",
                "readMore": "Read Article"
            },
            "viewAll": "View All My Articles"
        },
        "contact": {
            "title": "Contact",
            "subtitle": "My social media accounts and contact information",
            "location": "Istanbul, Turkey",
            "position": "Hepsiburada - Software Development Team Lead"
        },
        "footer": {
            "copyright": "© 2025 Serdar Usta. All rights reserved.",
            "tagline": "Making life easier with technology 🚀"
        }
    }
};

// Load translations (now synchronous)
function loadTranslations(lang) {
    try {
        translations = translationData[lang] || translationData['tr'];
        updateContent();
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

// Update content based on selected language
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations, key);
        if (translation) {
            element.textContent = translation;
        }
    });
}

// Get nested translation value
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Language switching functionality
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            
            if (selectedLang !== currentLanguage) {
                // Update active button
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Switch language
                currentLanguage = selectedLang;
                localStorage.setItem('language', selectedLang);
                loadTranslations(selectedLang);
                
                // Update document language attribute
                document.documentElement.lang = selectedLang;
                
                // Add smooth transition effect
                document.body.style.opacity = '0.7';
                setTimeout(() => {
                    document.body.style.opacity = '1';
                }, 300);
            }
        });
    });
    
    // Set initial active button
    document.querySelector(`[data-lang="${currentLanguage}"]`).classList.add('active');
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
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

// Add fade-in animation to elements
const fadeElements = document.querySelectorAll(
    '.section-header, .about-text, .skills, .timeline-item, .article-card, .contact-content, .social-link'
);

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(element);
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Enhanced typing effect for multi-language
function typeWriterMultiLang(element, key, speed = 100) {
    const translation = getNestedTranslation(translations, key);
    if (translation && element) {
        typeWriter(element, translation, speed);
    }
}

// Initialize everything on page load
window.addEventListener('load', () => {
    // Initialize language system
    initLanguageSwitcher();
    loadTranslations(currentLanguage);
    
    // Set document language attribute
    document.documentElement.lang = currentLanguage;
    
    // Initialize typing effect after translations are loaded
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        const greeting = translations.hero?.greeting || 'Merhaba, Ben';
        const name = translations.hero?.name || 'Serdar Usta';
        const fullText = `${greeting} <span class="highlight">${name}</span>`;
        
        typeWriter(heroTitle, fullText, 50);
    }, 500);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Skill items hover effect enhancement
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Article cards stagger animation
const articleCards = document.querySelectorAll('.article-card');
articleCards.forEach((card, index) => {
    const delay = index * 200;
    card.style.animationDelay = `${delay}ms`;
});

// Social links hover sound effect (optional - can be removed if not needed)
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add custom cursor effect (optional enhancement)
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add cursor styles
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(102, 126, 234, 0.3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    }
    
    @media (min-width: 768px) {
        .cursor {
            display: block;
        }
        
        body {
            cursor: none;
        }
        
        a, button, .btn {
            cursor: none;
        }
        
        a:hover ~ .cursor,
        button:hover ~ .cursor,
        .btn:hover ~ .cursor {
            transform: scale(2);
            background: rgba(102, 126, 234, 0.6);
        }
    }
`;
document.head.appendChild(cursorStyle);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Your scroll handling code here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Easter egg: Konami code
const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Easter egg activated!
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Add rainbow animation for easter egg
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle); 