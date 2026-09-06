import Layout from '@theme/Layout';
import {useState, useEffect} from 'react';
import Markdown from 'react-markdown';

export default function Terms() {
  const [content, setContent] = useState('Loading...');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/wesleiaqui/EternoMail/main/docs/TERMS.md')
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(err => setContent('Error: ' + err.message));
  }, []);

  return (
    <Layout title="Terms of Use">
      <main style={{padding: '2rem 0'}}>
        <div className="container">
          <article className="markdown" style={{fontSize: '0.9rem'}}>
            <Markdown>{content}</Markdown>
          </article>
        </div>
      </main>
    </Layout>
  );
}
