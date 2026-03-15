import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    emoji: '🚀',
    title: 'El akarom indítani a közösségem',
    description: 'Közösség létrehozása, branding beállítás, első tagok meghívása',
    link: '/elso-lepesek',
  },
  {
    emoji: '📚',
    title: 'Tananyagot akarok közzétenni',
    description: 'Kurzusok, fejezetek, leckék, videók, kvízek',
    link: '/kurzusok',
  },
  {
    emoji: '💰',
    title: 'Pénzt akarok keresni',
    description: 'Előfizetések, paywall, Stripe, számlázás',
    link: '/fizetes',
  },
  {
    emoji: '📅',
    title: 'Eseményt akarok szervezni',
    description: 'Esemény létrehozása, naptár, RSVP, emlékeztetők',
    link: '/esemenyek',
  },
  {
    emoji: '👥',
    title: 'Tagjaimat akarom kezelni',
    description: 'Szerepkörök, meghívók, moderáció, szegmensek',
    link: '/tagkezeles',
  },
  {
    emoji: '🎨',
    title: 'Az arculatot akarom testreszabni',
    description: 'Branding, domain, e-mail sablonok, SEO',
    link: '/admin-beallitasok',
  },
];

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.grid}>
          {FeatureList.map((item) => (
            <Link key={item.title} to={item.link} className={styles.card}>
              <div className={styles.emoji}>{item.emoji}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
