import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.banner__tagline}>{siteConfig.tagline}</div>
        <div className={styles.banner__title}>{siteConfig.title.toUpperCase()}</div>
        <div className={styles.banner__subtitle}>
          Too lazy to make your own notes? Lion Den is where you can find all the notes you need. 
          It's a compiled list of notes on various topics, with code and demonstration for more advanced topics.
        </div>

        <div className={styles.buttons}>
          <Link
            className={`button ${styles.custom__button} button--lg`}
            to="../../docs/index">
            Browse Collection 😁
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Need a tagline">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
