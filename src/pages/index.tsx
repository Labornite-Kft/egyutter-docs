import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Egyutter Tudásbázis"
      description="Magyar nyelvű útmutatók közösségi adminoknak"
    >
      <main>
        <div
          style={{
            textAlign: 'center',
            padding: '4rem 1rem 2rem',
            background: 'linear-gradient(135deg, var(--ifm-color-primary) 0%, #818cf8 100%)',
            color: 'white',
          }}
        >
          <h1 style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>
            Miben segíthetünk?
          </h1>
          <p style={{fontSize: '1.125rem', opacity: 0.9, marginBottom: 0}}>
            Magyar nyelvű útmutatók az egyutter platform minden funkciójához
          </p>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
