export type ServiceCategory = 'Portfolio' | 'Landing Page' | 'E-Commerce' | 'Web App';
export interface ServiceItem {
id: string;
title: string;
description: string;
iconName: string;
category: ServiceCategory;
features: string[];
badgeText: string;
}
export interface PortfolioItem {
id: string;
title: string;
clientRole: string;
industry: string;
description: string;
previewImage: string;
demoUrl: string;
tags: string[];
}
export interface PricingPackage {
id: string;
title: string;
price: number;
description: string;
features: string[];
isPopular: boolean;
ctaLabel: string;
}
export interface InquiryFormData {
name: string;
phone: string;
email: string;
projectType: string;
budgetRange: string;
timeline: string;
details: string;
}
