import React from 'react';
import { Link } from 'react-router-dom';

function Home({ name }) {
  return (
    <div>
      <Link to="/other">Other</Link>
      <h1>
        Helloe world
      </h1>
    </div>
  );
}

export default Home;