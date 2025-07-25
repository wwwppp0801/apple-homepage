// Apple Homepage Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });

    // Navigation background opacity on scroll
    let lastScrollTop = 0;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 44) {
            nav.style.backgroundColor = 'rgba(251, 251, 253, 0.98)';
            nav.style.backdropFilter = 'saturate(180%) blur(20px)';
        } else {
            nav.style.backgroundColor = 'rgba(251, 251, 253, 0.94)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe product cards for animation
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // iPhone mockup interactive animation
    const iphoneMockup = document.querySelector('.iphone-mockup');
    if (iphoneMockup) {
        setInterval(() => {
            iphoneMockup.style.transform = 'rotate(1deg)';
            setTimeout(() => {
                iphoneMockup.style.transform = 'rotate(-1deg)';
            }, 1000);
            setTimeout(() => {
                iphoneMockup.style.transform = 'rotate(0deg)';
            }, 2000);
        }, 4000);
    }

    // Search functionality (mock)
    const searchIcon = document.querySelector('.nav-search');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            const searchQuery = prompt('搜索 Apple 产品和支持：');
            if (searchQuery) {
                alert(`正在搜索："${searchQuery}"...`);
            }
        });
    }

    // Shopping bag counter (mock)
    let bagCount = 0;
    const bagIcon = document.querySelector('.nav-bag');
    if (bagIcon) {
        // Add all "购买" buttons functionality
        const buyButtons = document.querySelectorAll('a[href="#"]:not(.btn-primary)');
        buyButtons.forEach(button => {
            if (button.textContent.includes('购买')) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    bagCount++;
                    
                    // Create a simple notification
                    const notification = document.createElement('div');
                    notification.textContent = `已添加到购物袋 (${bagCount})`;
                    notification.style.cssText = `
                        position: fixed;
                        top: 60px;
                        right: 20px;
                        background: #34c759;
                        color: white;
                        padding: 12px 24px;
                        border-radius: 8px;
                        font-size: 14px;
                        z-index: 9999;
                        animation: slideIn 0.3s ease;
                    `;
                    
                    // Add slide animation
                    const style = document.createElement('style');
                    style.textContent = `
                        @keyframes slideIn {
                            from { transform: translateX(100%); opacity: 0; }
                            to { transform: translateX(0); opacity: 1; }
                        }
                    `;
                    document.head.appendChild(style);
                    
                    document.body.appendChild(notification);
                    
                    // Remove notification after 3 seconds
                    setTimeout(() => {
                        notification.remove();
                        style.remove();
                    }, 3000);
                });
            }
        });
        
        bagIcon.addEventListener('click', function() {
            if (bagCount > 0) {
                alert(`您的购物袋中有 ${bagCount} 件商品`);
            } else {
                alert('您的购物袋是空的');
            }
        });
    }

    // Dynamic greeting based on time
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';
    
    if (hour < 12) {
        greeting = '早上好';
    } else if (hour < 18) {
        greeting = '下午好';
    } else {
        greeting = '晚上好';
    }
    
    // Add subtle greeting to hero section
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            heroSubtitle.textContent = `${greeting}！${originalText}`;
        }, 2000);
        
        setTimeout(() => {
            heroSubtitle.textContent = originalText;
        }, 5000);
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroImage.style.transform = `translateX(-50%) translateY(${rate}px)`;
        }
    });

    console.log('🍎 Apple 首页加载完成！');
});

// Product data for dynamic content
const products = {
    'iphone': {
        name: 'iPhone 15 Pro',
        description: '钛金属。如此强悍。如此轻盈。如此Pro。',
        colors: ['自然钛金属', '蓝色钛金属', '白色钛金属', '黑色钛金属'],
        price: '从 ¥8999 起'
    },
    'macbook': {
        name: 'MacBook Air',
        description: '强大性能。超凡创造力。',
        colors: ['深空灰色', '银色', '星光色', '午夜色'],
        price: '从 ¥8999 起'
    },
    'ipad': {
        name: 'iPad Pro',
        description: '超乎想象的强大',
        colors: ['深空灰色', '银色'],
        price: '从 ¥6799 起'
    }
};

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products };
}