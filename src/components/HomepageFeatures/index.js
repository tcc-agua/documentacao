import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Objetivo',
    imgSrc: '/img/WaterCollecting.svg', 
    imgProps: { width: 200, height: 'auto' },
    description: (
      <>
        WISE foi desenvolvido em <b>parceria</b> com a <b>BOSCH Curitiba</b> para centralizar todas as informações referente a <b>coleta de água</b>.
      </>
    ),
  },
  {
    title: 'Disponibilidade',
    imgSrc: '/img/Notebook.svg', 
    imgProps: { width: 200, height: 200 },
    description: (
      <>
        WISE é um site totalmente <b>responsivo</b>, projetado para oferecer a melhor experiência em qualquer <b>dispositivo</b> — seja no desktop, tablet ou mobile.
      </>
    ),
  },
  {
    title: 'Desenvolvido pelo DTA',
    imgSrc: '/img/DTA.svg', 
    imgProps: { width: 200, height: 'auto' },
    description: (
      <>
        O <b>Digital Talent Academy</b> é um programa da Bosch que desenvolve novos profissionais de Tecnologia, combinando formação técnica do <b>SENAI</b> com aprendizado prático na própria empresa, voltado para aprendizes da <b>ETS</b>.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description, imgProps }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} {...imgProps} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
