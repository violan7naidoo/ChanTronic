"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Copy, Check, Send, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

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

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
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
      icon: Phone, 
      label: 'Phone 2',
      value: '+27 (0)86 560 8940',
      copyValue: '+27865608940'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'chantronic@xis.co.za',
      href: 'mailto:chantronic@xis.co.za',
      copyValue: 'chantronic@xis.co.za'
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

          <div className="bg-card rounded-xl p-8 shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  {...register('name')}
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  {...register('email')}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you?" 
                  rows={5} 
                  {...register('message')}
                  className={errors.message ? 'border-destructive' : ''}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
