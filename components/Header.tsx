'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Democracy Activated', href: '/democracy-activated' },
    { label: 'Digital Resilience', href: '/reports' },
    { label: 'Reports', href: '/reports' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background neo-border border-b-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/var-logo.png"
              alt="VAR 37-38 Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm leading-none">VAR</span>
              <span className="text-xs font-bold">37-38</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-bold text-sm hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button className="stamp-button text-sm">
              Join the Movement
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 space-y-4 border-t-4 border-foreground pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block font-bold text-sm hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full stamp-button text-sm mt-4">
              Join the Movement
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
