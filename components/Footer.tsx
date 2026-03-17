'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="w-full bg-foreground text-background mt-20 border-t-4 border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-2">VAR 37-38</h3>
            <p className="text-sm">
              The Voice of a Generation. Institutionalizing youth energy into democratic power.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/democracy-activated" className="hover:text-primary transition-colors">
                  Democracy Activated
                </Link>
              </li>
              <li>
                <Link href="/reports" className="hover:text-primary transition-colors">
                  Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="hover:text-primary transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-4 border-background pt-8 text-center text-sm">
          <p>
            VAR 37-38 is a registered movement building the future of Kenyan Democracy.
          </p>
          <p className="mt-2 text-xs opacity-80">
            © {new Date().getFullYear()} VAR 37-38. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
