import React from 'react';
import Layout from '@theme/Layout';
import RAGChatbot from '@site/src/components/RAGChatbot';

function Chat() {
  return (
    <Layout title="AI Chatbot" description="Ask questions about the Physical AI textbook">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Physical AI Textbook Chatbot</h1>
            <p>Ask questions about the textbook content. The chatbot will respond based on the information in the book and cite the relevant chapters.</p>
            <RAGChatbot />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Chat;