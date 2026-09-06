import Layout from '@theme/Layout';
import {useState} from 'react';

export default function Test() {
  const [message] = useState('Hooks work!');

  return (
    <Layout title="Test">
      <div style={{padding: '2rem'}}>
        <h1>Test Page</h1>
        <p>{message}</p>
      </div>
    </Layout>
  );
}
