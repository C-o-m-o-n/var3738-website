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
    <footer className="w-full bg-card mt-20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-2 text-primary">VAR 37-38</h3>
            <p className="text-sm text-muted-foreground">
              The Voice of a Generation. Institutionalizing youth energy into democratic power.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/democracy-activated" className="text-muted-foreground hover:text-primary transition-colors">
                  Democracy Activated
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-muted-foreground hover:text-primary transition-colors">
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
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 pt-8 text-center text-sm">
          <p className="text-muted-foreground">
            VAR 37-38 is a registered movement building the future of Kenyan Democracy.
          </p>
          <p className="mt-2 text-xs text-muted-foreground opacity-60">
            © {new Date().getFullYear()} VAR 37-38. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
