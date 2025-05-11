// components/Navbar.js
'use client';
import Link from 'next/link';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">Unit Cave</Link>
      </div>
      <div className="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
