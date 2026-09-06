import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function CallToAction() {
  return (
    <section className={clsx('hero hero--primary', styles.ctaSection)}>
      <div className="container">
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.downloadButton)}
            to="/docs/getting-started/installation/">
            Download
          </Link>
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.screenshotContainer}>
          <img
            src="/img/screenshots/main-interface.png"
            alt="Eterno Mail email client interface"
            className={styles.screenshot}
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Eterno Mail - An open-source lightweight email client for Linux, macOS, and Windows">
      <main>
        <HeroSection />
        <CallToAction />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
