import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'How it works', href: getPermalink('/#how-it-works') },
    { text: 'Pricing', href: getPermalink('/pricing') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Request access', href: getPermalink('/access') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Autoperate',
      links: [
        { text: 'How it works', href: getPermalink('/#how-it-works') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Request access', href: getPermalink('/access') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © ${new Date().getFullYear()} Autoperate. All rights reserved.
  `,
};
