import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useEffect, useRef } from 'react';

function HomepageHeader() {
  const heroBannerRef = useRef(null);

  useEffect(() => {
    const heroBanner = heroBannerRef.current;

    // Alternar cores a cada 5 segundos (não necessário mais para o efeito)
    const handleMouseMove = (e) => {
      const rect = heroBanner.getBoundingClientRect();
      
      // Posição do mouse dentro do heroBanner
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;

      // Atualizando a posição do pseudo-elemento
      heroBanner.style.setProperty('--circle-x', `${x}px`);
      heroBanner.style.setProperty('--circle-y', `${y}px`);
    };

    const handleMouseLeave = () => {
      // Ocultar a luz quando o mouse sair do banner
      heroBanner.style.setProperty('--circle-x', '0');
      heroBanner.style.setProperty('--circle-y', '0');
    };

    heroBanner.addEventListener('mousemove', handleMouseMove);
    heroBanner.addEventListener('mouseleave', handleMouseLeave);

    // Limpar event listeners ao desmontar o componente
    return () => {
      heroBanner.removeEventListener('mousemove', handleMouseMove);
      heroBanner.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} ref={heroBannerRef}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Tutorial do WISE
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
