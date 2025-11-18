// Default configuration
const defaultConfig = {
    site_title: "TechNews Daily",
    main_headline: "Breaking Tech News & Updates",
    article_title: "Revolutionary AI Technology Transforms Industry",
    footer_text: "© 2024 TechNews Daily. All rights reserved."
};

// Initialize Element SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig: defaultConfig,
        onConfigChange: async (config) => {
            // Update site title
            const siteTitle = document.getElementById('site-title');
            if (siteTitle) {
                siteTitle.textContent = config.site_title || defaultConfig.site_title;
            }

            // Update main headline
            const mainHeadline = document.getElementById('main-headline');
            if (mainHeadline) {
                mainHeadline.textContent = config.main_headline || defaultConfig.main_headline;
            }

            // Update article title
            const articleTitle = document.getElementById('article-title');
            if (articleTitle) {
                articleTitle.textContent = config.article_title || defaultConfig.article_title;
            }

            // Update footer text
            const footerText = document.getElementById('footer-text');
            if (footerText) {
                footerText.textContent = config.footer_text || defaultConfig.footer_text;
            }
        },
        mapToCapabilities: (config) => ({
            recolorables: [],
            borderables: [],
            fontEditable: undefined,
            fontSizeable: undefined
        }),
        mapToEditPanelValues: (config) => new Map([
            ["site_title", config.site_title || defaultConfig.site_title],
            ["main_headline", config.main_headline || defaultConfig.main_headline],
            ["article_title", config.article_title || defaultConfig.article_title],
            ["footer_text", config.footer_text || defaultConfig.footer_text]
        ])
    });
}

// Floating ad functionality
function closeFloatingAd(adId) {
    const floatingAd = document.getElementById(adId);
    if (floatingAd) {
        floatingAd.style.display = 'none';
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
        mobileMenu.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Simulate ad loading animation
document.addEventListener('DOMContentLoaded', function() {
    const ads = document.querySelectorAll('.ad-placeholder');
    ads.forEach((ad, index) => {
        setTimeout(() => {
            ad.style.opacity = '0';
            ad.style.transform = 'scale(0.95)';
            ad.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                ad.style.opacity = '1';
                ad.style.transform = 'scale(1)';
            }, 100);
        }, index * 200);
    });
});