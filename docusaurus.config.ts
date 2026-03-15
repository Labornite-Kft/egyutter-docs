import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'Egyutter Tudásbázis',
  tagline: 'Magyar nyelvű útmutatók közösségi adminoknak',
  favicon: 'img/favicon.ico',
  url: 'https://tudasbazis.egyutter.hu',
  baseUrl: '/',
  organizationName: 'egyutter',
  projectName: 'egyutter-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu'],
  },
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['hu', 'en'],
        docsRouteBasePath: '/',
        indexBlog: false,
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Egyutter Tudásbázis',
      logo: {
        alt: 'Egyutter logó',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Dokumentáció',
        },
        {
          href: 'https://egyutter.hu',
          label: 'Vissza az oldalra',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Gyors linkek',
          items: [
            {label: 'Első lépések', to: '/elso-lepesek'},
            {label: 'Kurzusok', to: '/kurzusok'},
            {label: 'Fizetés', to: '/fizetes'},
          ],
        },
        {
          title: 'Egyutter',
          items: [
            {label: 'Főoldal', href: 'https://egyutter.hu'},
            {label: 'Bejelentkezés', href: 'https://app.egyutter.hu'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Egyutter. Minden jog fenntartva.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
