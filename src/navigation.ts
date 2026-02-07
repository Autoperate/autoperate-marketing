import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Request access',
      href: getPermalink('/access'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    © ${new Date().getFullYear()} Autoperate. All rights reserved.
  `,
};
