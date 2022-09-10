// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const math = require('remark-math');
const katex = require('rehype-katex');


const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lionden',
  tagline: 'Study Smarter, Not Harder',
  url: 'https://ghost32-lionden.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'k99sharma', // Usually your GitHub org/user name.
  projectName: 'lionden', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Lionden',
        logo: {
          alt: 'Lionden Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/k99sharma/lionden',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Lionden',
            items: [
              {
                label: 'What is Lionden?',
                to: 'https://github.com/k99sharma/lionden',
              }],
          },
          {
            title: 'Collection',
            items: [
              {
                label: 'Den Map',
                to: '/docs/index',
              },
            ],
          },
          {
            title: 'Get In Touch',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/k99sharma',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/kalashsharma99/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lionden, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
