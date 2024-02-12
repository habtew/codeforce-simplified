import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Problems from '/components/problems'

function App() {
  return (
    <BrowserRouter>
      <header >
        <div className="nav--main">
          <div className="user--profile">
            <Link className="site-logo user--profile" to="/">
              <img src="./images/favicon-32x32.png" className="user--profile--image" />
              <p className="user--profile--name">habtew</p>
            </Link>
          </div>
          <nav>
            <Link to="/problems">Problems</Link>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/problems" element={<Problems />} />
      </Routes>
    </BrowserRouter>
  )
}

          // <Route path="contact" element={<ContactPage />} />
          // <Route index element={<HomePage />} />
ReactDOM.createRoot(document.getElementById("root")).render(<App />)