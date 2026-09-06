import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Eterno Mail',
  tagline: 'An Open Source Lightweight E-Mail Client',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://docs.weslleys.com',
  baseUrl: '/',

  organizationName: 'wesleiaqui',
  projectName: 'EternoMail-Docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/wesleiaqui/EternoMail-Docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/screenshots/main-interface.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Eterno Mail',
      logo: {
        alt: 'Eterno Mail logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/wesleiaqui/EternoMail',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'Features',
              to: '/docs/features/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/wesleiaqui/EternoMail',
            },
            {
              label: 'Issues',
              href: 'https://github.com/wesleiaqui/EternoMail/issues',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Terms of Use',
              to: '/terms',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Support the project',
              href: 'https://pixgg.com/weslei',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Eterno Mail. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
