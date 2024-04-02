// App.js

import React from 'react';

function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header style={{ textAlign: 'center' }}>
        <h1>Welcome to Our Bookstore</h1>
        <p>Your one-stop destination for all your reading needs!</p>
      </header>
      <main style={{ marginTop: '20px' }}>
        <section className="books">
          <h2>Books</h2>
          {/* Render books directly */}
          <div className="book" style={{ width: '200px', marginBottom: '20px', textAlign: 'center' }}>
            <img src="book1.jpg" alt="Book 1" style={{ width: '100%', height: 'auto' }} />
            <h3>Book Title 1</h3>
            <p>Author Name</p>
            <button>Add to Cart</button>
          </div>
          <div className="book" style={{ width: '200px', marginBottom: '20px', textAlign: 'center' }}>
            <img src="book2.jpg" alt="Book 2" style={{ width: '100%', height: 'auto' }} />
            <h3>Book Title 2</h3>
            <p>Author Name</p>
            <button>Add to Cart</button>
          </div>
          {/* Add more books as needed */}
        </section>
      </main>
      <footer style={{ marginTop: '50px', textAlign: 'center' }}>
        <p>&copy; 2024 Our Bookstore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
