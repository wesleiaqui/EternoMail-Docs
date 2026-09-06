import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'category',
          label: 'Installation',
          link: {
            type: 'doc',
            id: 'getting-started/installation/index',
          },
          items: [
            'getting-started/installation/linux',
            'getting-started/installation/macos',
            'getting-started/installation/windows',
          ],
        },
        'getting-started/verify',
        {
          type: 'category',
          label: 'First Account Setup',
          link: {
            type: 'doc',
            id: 'getting-started/first-account/index',
          },
          items: [
            'getting-started/first-account/gmail',
            'getting-started/first-account/outlook',
            'getting-started/first-account/other-providers',
            'getting-started/first-account/google-oauth-credentials',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/overview',
        'features/email-management',
        'features/composing',
        'features/contacts',
        'features/keyboard-shortcuts',
        'features/settings',
        {
          type: 'category',
          label: 'Extensions',
          link: {
            type: 'doc',
            id: 'features/extensions/index',
          },
          items: [
            'features/extensions/contacts',
            'features/extensions/calendar',
          ],
        },
      ],
    },
    'faq',
    'troubleshooting',
  ],
};

export default sidebars;
