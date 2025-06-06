
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative py-20 md:py-32 min-h-[70vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-background to-muted/50">
      <div className="absolute inset-0 opacity-10">
        <Image
            src="https://placehold.co/1920x1080.png"
            alt="Abstract background"
            fill
            className="object-cover"
            quality={75}
            priority
            data-ai-hint="modern electronics technology"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          ChanTronic Solutions <span className="block sm:inline">(PTY) LTD</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground sm:text-xl md:text-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Specializing in all aspects of Electronics: Access Control, CCTV, Intercom Systems, Gate Automation, and much more.
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-md text-muted-foreground sm:text-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Your trusted partner for sales, installation, and repairs of cutting-edge electronic solutions in South Africa.
        </p>
        <div className="mt-10 flex justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button asChild size="lg" className="bg-accent hover:bg-primary text-accent-foreground transition-all duration-300 transform hover:scale-105 shadow-lg rounded-md px-8 py-3 text-lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

