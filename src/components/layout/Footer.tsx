
import Link from 'next/link';
import { SiTiktok } from 'react-icons/si';
import { Facebook, Instagram, Linkedin, Twitter, ShieldCheck, Link2 } from 'lucide-react'; // Using ShieldCheck as logo, Link2 for TikTok

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100063522873911', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { name: 'TikTok', href: 'https://www.tiktok.com/@chan.hariram', icon: SiTiktok  }, // Using Link2 for TikTok as a generic link icon
  ];

  return (
    <footer className="bg-foreground text-background/80 border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-4 text-primary hover:text-accent transition-colors">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline text-primary-foreground">ChanTronic Solutions</span>
            </Link>
            <p className="text-sm">
              Your trusted partner for electronic security and communication solutions in South Africa.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-primary-foreground mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-primary-foreground mb-4">Connect With Us</h5>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="text-sm">Phone: <a href="tel:+27844550036" className="hover:text-primary transition-colors">+27 (0)84 455 0036</a></p>
            <p className="text-sm">Email: <a href="mailto:chantronic@xis.co.za" className="hover:text-primary transition-colors">chantronic@xis.co.za</a></p>
            <p className="text-sm">Website: <a href="https://chantronic.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">chantronic.co.za</a></p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm">
          <p>&copy; {currentYear} ChanTronic Solutions (PTY) LTD. All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  );
}
