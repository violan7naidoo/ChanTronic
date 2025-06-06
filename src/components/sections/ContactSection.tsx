"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const copyToClipboard = (text: string, itemName: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedItem(itemName);
        setTimeout(() => setCopiedItem(null), 2000);
      });
    }
  };
  
  if (!isMounted) return null;

  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 (0)84 455 0036',
      href: 'tel:+27844550036',
      copyValue: '+27844550036'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'chantronic@xis.co.za',
      href: 'mailto:chantronic@xis.co.za',
      copyValue: 'chantronic@xis.co.za'
    },
    {
      icon: Phone, // Using Phone icon for Fax as there's no dedicated Fax icon in Lucide
      label: 'Fax',
      value: '+27 (0)86 560 8940',
      copyValue: '+27865608940'
    },
    {
      icon: MapPin,
      label: 'Website',
      value: 'chantronic.co.za',
      href: 'https://chantronic.co.za',
      isLink: true
    },
    // Add Physical Address if available
    // { icon: MapPin, label: 'Address', value: '123 Tech Street, Johannesburg, SA' }
  ];


  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re here to help with all your electronic solution needs. Contact us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground">{item.label}</h4>
                  {item.href && item.isLink ? (
                     <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors break-all">
                       {item.value}
                     </a>
                  ) : item.href ? (
                    <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors break-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground break-all">{item.value}</p>
                  )}
                </div>
                {item.copyValue && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(item.copyValue!, item.label)}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary"
                    aria-label={`Copy ${item.label}`}
                  >
                    {copiedItem === item.label ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="p-8 bg-card rounded-lg shadow-xl animate-fade-in border border-border" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-foreground">Full Name</Label>
                <Input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-foreground">Email Address</Label>
                <Input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-foreground">Phone Number (Optional)</Label>
                <Input type="tel" name="phone" id="phone" className="mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-foreground">Message</Label>
                <Textarea name="message" id="message" rows={4} required className="mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <Button type="submit" className="w-full bg-accent hover:bg-primary text-accent-foreground transition-colors py-3 px-6 text-base rounded-md shadow-md">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
