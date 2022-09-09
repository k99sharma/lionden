import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function Introduction() {
  return (
    <div className={clsx('col', styles.introduction)}>
      <div className="row">
        <div className="col text--center">
          <img src='img/introductionLion.png' className={styles.introduction__img} role="img" alt='lion illustration' />
        </div>
        <div className={`col text--center ${styles.gradiant__text}`}>
            Spend less time writing notes and more time studying.
        </div>
      </div>
    </div>
  )
}

const FeatureList = [
  {
    title: 'Creative Notes',
    Svg: require('@site/static/img/featureSvg1.svg').default,
    description: (
      <>
        Lionden is a collection of personal notes with mixed topics.
        Simple demonstration and code for advanced topics.
      </>
    ),
  },
  {
    title: 'Creative Notes',
    Svg: require('@site/static/img/featureSvg2.svg').default,
    description: (
      <>
        Lionden is a collection of personal notes with mixed topics.
        Simple demonstration and code for advanced topics.
      </>
    ),
  },
  {
    title: 'Creative Notes',
    Svg: require('@site/static/img/featureSvg3.svg').default,
    description: (
      <>
        Lionden is a collection of personal notes with mixed topics.
        Simple demonstration and code for advanced topics.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className='container'>
          <div className="row">
            <Introduction />
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
