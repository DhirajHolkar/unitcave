// components/Footer.js
'use client';
import '../styles/Footer.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} unitcave.com All rights reserved.</p>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </footer>
  );
}
