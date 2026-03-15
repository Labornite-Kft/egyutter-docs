import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🚀 Első lépések',
      link: {type: 'doc', id: 'elso-lepesek/index'},
      items: [
        'elso-lepesek/kozosseg-letrehozasa',
        'elso-lepesek/branding-beallitas',
        'elso-lepesek/tagok-meghivasa',
        'elso-lepesek/meghivo-linkek',
        'elso-lepesek/onboarding-flow',
      ],
    },
    {
      type: 'category',
      label: '🏛️ Terek & tartalom',
      link: {type: 'doc', id: 'terek/index'},
      items: [
        'terek/ter-letrehozasa',
        'terek/ter-hozzaferes',
        'terek/bejegyzesek-feed',
        'terek/kategoriak-cimkek',
        'terek/utemezett-bejegyzesek',
        'terek/eroforras-konyvtar',
        'terek/kereses',
      ],
    },
    {
      type: 'category',
      label: '🎓 Kurzusok',
      link: {type: 'doc', id: 'kurzusok/index'},
      items: [
        'kurzusok/kurzus-letrehozasa',
        'kurzusok/fejezetek-leckek',
        'kurzusok/video-feltoltes',
        'kurzusok/drip-tartalom',
        'kurzusok/kurzus-kategoriak',
        'kurzusok/hallgatoi-lista',
        'kurzusok/kvizek',
        'kurzusok/fizetos-kurzus',
      ],
    },
    {
      type: 'category',
      label: '📅 Események',
      link: {type: 'doc', id: 'esemenyek/index'},
      items: [
        'esemenyek/esemeny-letrehozasa',
        'esemenyek/naptar-nezet',
        'esemenyek/rsvp-resztvevok',
        'esemenyek/emlekeztetok',
      ],
    },
    {
      type: 'category',
      label: '👥 Tagkezelés',
      link: {type: 'doc', id: 'tagkezeles/index'},
      items: [
        'tagkezeles/tag-directory-profilok',
        'tagkezeles/szerepkorok-jogosultsagok',
        'tagkezeles/meghivo-linkek',
        'tagkezeles/tomeg-meghivo',
        'tagkezeles/tag-szegmensek',
        'tagkezeles/moderacio',
        'tagkezeles/tag-export',
      ],
    },
    {
      type: 'category',
      label: '🔔 Értesítések & üzenetküldés',
      link: {type: 'doc', id: 'ertesitesek/index'},
      items: [
        'ertesitesek/in-app-ertesitesek',
        'ertesitesek/email-ertesitesek',
        'ertesitesek/kozvetlen-uzenetek',
        'ertesitesek/megemiitesek',
        'ertesitesek/heti-osszefoglalo',
        'ertesitesek/kozlemenyek',
      ],
    },
    {
      type: 'category',
      label: '💳 Fizetés & számlázás',
      link: {type: 'doc', id: 'fizetes/index'},
      items: [
        'fizetes/stripe-beallitas',
        'fizetes/elofizetesi-csomagok',
        'fizetes/paywall',
        'fizetes/billingo-szamlazas',
        'fizetes/fizetesi-riportok',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Admin beállítások',
      link: {type: 'doc', id: 'admin-beallitasok/index'},
      items: [
        'admin-beallitasok/kozosseg-alapadatai',
        'admin-beallitasok/branding-megjelenes',
        'admin-beallitasok/egyedi-domain',
        'admin-beallitasok/email-sablonok',
        'admin-beallitasok/seo-beallitasok',
        'admin-beallitasok/analitika',
        'admin-beallitasok/aktivitasi-naplok',
        'admin-beallitasok/gamifikacio',
        'admin-beallitasok/egyedi-nav-linkek',
        'admin-beallitasok/webhookok',
      ],
    },
    {
      type: 'category',
      label: '🔗 Integrációk & API',
      link: {type: 'doc', id: 'integraciok/index'},
      items: [
        'integraciok/webhook-integracio',
        'integraciok/api-kulcsok',
        'integraciok/harmadik-fel-integraciok',
      ],
    },
  ],
};

export default sidebars;
