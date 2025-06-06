
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, ShieldCheck } from 'lucide-react'; // Using ShieldCheck as a placeholder logo icon

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About Us' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) {
    return null; 
  }

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-card shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2 text-primary hover:text-accent transition-colors" onClick={closeSheet}>
          <ShieldCheck className="h-8 w-8" />
          <span className="text-xl font-bold font-headline">ChanTronic</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" className="bg-accent hover:bg-primary transition-colors">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-card p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                  <Link href="#home" className="flex items-center gap-2 text-primary" onClick={closeSheet}>
                     <ShieldCheck className="h-8 w-8" />
                     <span className="text-xl font-bold font-headline">ChanTronic</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={closeSheet}>
                    <X className="h-6 w-6 text-primary" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={closeSheet}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild variant="default" className="w-full bg-accent hover:bg-primary transition-colors">
                  <Link href="#contact" onClick={closeSheet}>Get in Touch</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
