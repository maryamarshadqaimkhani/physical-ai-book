import React from 'react';
import Layout from '@theme/Layout';
import PersonalizationOptions from '@site/src/components/PersonalizationOptions';

function Personalize() {
  return (
    <Layout title="Personalize Content" description="Adjust textbook content based on your background">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Personalize Your Learning Experience</h1>
            <p>Select your background to adjust the content difficulty and focus:</p>
            <PersonalizationOptions />
            <p>After selecting your background, you can navigate to any chapter to see personalized content.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Personalize;