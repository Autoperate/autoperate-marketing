import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Request access', href: getPermalink('/access') },
    { text: 'Blog', href: getBlogPermalink() },
    { text: 'About', href: getPermalink('/about') },
    // Keep Pricing only if you actually want it live:
    // { text: 'Pricing', href: getPermalink('/pricing') },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // Keep RSS if you want the blog feed link in the footer:
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // Add these later when you have real URLs:
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/...' },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Autoperate' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Autoperate. All rights reserved.
  `,
};
