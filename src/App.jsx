import { useState } from 'react'
import './App.css'

function App() {
  const [cart] = useState([])

  return (
    <>
      <header>
        <h1>Regalty E-Commerce</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#cart">Cart ({cart.length})</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>Welcome to Regalty E-Commerce</h2>
          <p>Your premium online shopping destination</p>
        </section>
        <section className="info">
          <p>
            This is a React-based e-commerce application built with Vite.
            Edit <code>src/App.jsx</code> to start building your store.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Regalty E-Commerce. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
