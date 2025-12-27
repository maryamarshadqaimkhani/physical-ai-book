import React from 'react';
import Layout from '@theme/Layout';
import UrduTranslation from '@site/src/components/UrduTranslation';

function Urdu() {
  return (
    <Layout title="Urdu Translation" description="Translate textbook content to Urdu">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Urdu Translation</h1>
            <p>Click the button below to translate textbook content to Urdu:</p>
            <UrduTranslation>
              <p>Welcome to the Physical AI textbook. This content can be translated to Urdu with one click. The translation preserves structure and headings as required.</p>
              <h2>Features of Urdu Translation</h2>
              <ul>
                <li>One-click translation to Urdu</li>
                <li>Preserves structure and headings</li>
                <li>High-quality translations</li>
                <li>Cached for faster subsequent access</li>
              </ul>
            </UrduTranslation>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Urdu;