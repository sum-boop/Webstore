import type { ServiceItem, PortfolioItem, PricingPackage } from '../types';
export const servicesData: ServiceItem[] = [
{
id: 'personal-portfolio',
title: 'Personal & Professional Portfolios',
description: 'Polished personal websites for officers, developers, and executives who want to showcase their credentials, projects, and expertise with authority.',
iconName: 'UserRound',
category: 'Portfolio',
features: [
'Fully responsive layout for every device',
'SEO-ready structure for better discoverability',
'Custom domain setup and hosting guidance',
'Animated hero section with smooth transitions',
'Integrated contact form for direct inquiries'
],
badgeText: 'Personal Brand'
},
{
id: 'business-landing-page',
title: 'Business & Corporate Landing Pages',
description: 'Focused landing pages built to turn visitors into leads, with a clear message, strong calls to action, and fast load times.',
iconName: 'Briefcase',
category: 'Landing Page',
features: [
'Conversion-optimized section layouts',
'Lead capture forms with validation',
'Testimonial and social proof blocks',
'Analytics-ready tracking setup',
'Mobile-first responsive design'
],
badgeText: 'High Converting'
},
{
id: 'ecommerce-store',
title: 'E-Commerce & Custom Online Stores',
description: 'Complete online stores that let small and growing businesses list products, accept payments, and manage orders from one place.',
iconName: 'ShoppingBag',
category: 'E-Commerce',
features: [
'Searchable product catalog with categories',
'Cart and secure checkout flow',
'Payment gateway integration',
'Order tracking for customers',
'Inventory management dashboard'
],
badgeText: 'Sell Online'
},
{
id: 'custom-web-app',
title: 'Custom Web Apps & Interactive Dashboards',
description: 'Tailor-made web applications and data dashboards that streamline internal operations and present live information clearly.',
iconName: 'LayoutDashboard',
category: 'Web App',
features: [
'Role-based authentication and access control',
'Real-time data visualization',
'REST and third-party API integration',
'Admin dashboard for content and user management',
'Responsive UI across desktop and mobile'
],
badgeText: 'Custom Build'
}
];
export const portfolioData: PortfolioItem[] = [
{
id: 'fire-officer-portfolio',
title: 'Industrial Fire Officer Portfolio',
clientRole: 'Fire & Safety Officer',
industry: 'Industrial Safety',
description: 'A tactical dark-themed portfolio inspired by Simplex fire alarm panel UI concepts, presenting certifications, site experience, and emergency response expertise.',
previewImage: '/images/fire-officer-portfolio.webp',
demoUrl: 'https://example.com/fire-officer',
tags: ['Portfolio', 'Tactical UI', 'React', 'Tailwind CSS']
},
{
id: 'security-command-portfolio',
title: 'Security Command Systems Portfolio',
clientRole: 'Security Systems Integrator',
industry: 'Security & Surveillance',
description: 'A command-center style showcase featuring Milestone VMS camera wall layouts and access control dashboards to demonstrate real integration projects.',
previewImage: '/images/security-command-portfolio.webp',
demoUrl: 'https://example.com/security-command',
tags: ['Dashboard', 'VMS', 'Access Control', 'TypeScript']
},
{
id: 'web-studio-showcase',
title: 'Web Development Studio Showcase',
clientRole: 'Web Development Studio',
industry: 'Software Agency',
description: 'A modern glassmorphic agency website with smooth scroll animations, service highlights, and an inquiry flow designed to win new clients.',
previewImage: '/images/web-studio-showcase.webp',
demoUrl: 'https://example.com/web-studio',
tags: ['Agency Site', 'Glassmorphism', 'Framer Motion', 'Vite']
}
];
export const pricingData: PricingPackage[] = [
{
id: 'starter-portfolio',
title: 'Starter Portfolio Plan',
price: 9999,
description: 'A clean single-page portfolio for professionals who need a credible online presence quickly.',
features: [
'Single-page portfolio website',
'Fully responsive design',
'Basic SEO setup',
'Working contact form',
'1 revision round'
],
isPopular: false,
ctaLabel: 'Get Started'
},
{
id: 'pro-business-landing',
title: 'Pro Business Landing Page',
price: 24999,
description: 'A custom-designed, multi-section landing page built to capture leads and grow your business.',
features: [
'Multi-section landing page',
'Custom visual design',
'Smooth scroll and hover animations',
'Complete SEO setup',
'Analytics integration',
'3 revision rounds'
],
isPopular: true,
ctaLabel: 'Choose Pro'
},
{
id: 'enterprise-web-app',
title: 'Enterprise Custom Web App',
price: 79999,
description: 'A fully custom web application with secure access, live data, and the admin tools your team needs to operate.',
features: [
'Custom interactive dashboard',
'Role-based authentication',
'Third-party API integration',
'Admin panel for management',
'Priority support',
'Production deployment included'
],
isPopular: false,
ctaLabel: 'Book a Call'
}
];
