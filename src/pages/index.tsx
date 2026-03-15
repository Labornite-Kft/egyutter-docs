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
            padding: '4.5rem 1rem 3.5rem',
            background: 'linear-gradient(135deg, hsl(160, 84%, 36%) 0%, hsl(160, 70%, 44%) 100%)',
            color: 'white',
          }}
        >
          <h1 style={{fontSize: '2.25rem', fontWeight: 700, marginBottom: '0.625rem', letterSpacing: '-0.025em', lineHeight: 1.2}}>
            Miben segíthetünk?
          </h1>
          <p style={{fontSize: '1.0625rem', opacity: 0.88, marginBottom: 0, maxWidth: 480, margin: '0 auto'}}>
            Magyar nyelvű útmutatók az egyutter platform minden funkciójához
          </p>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
