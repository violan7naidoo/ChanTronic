
import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl mb-6">
              About ChanTronic Solutions
            </h2>
            <p className="text-lg text-foreground mb-4">
              ChanTronic Solutions (PTY) LTD is a proudly South African company dedicated to providing top-tier electronic security and communication solutions. With years of experience in the industry, we have built a reputation for excellence, reliability, and innovation.
            </p>
            <p className="text-lg text-foreground mb-4">
              Our mission is to empower our clients with state-of-the-art technology, tailored to their specific needs. We believe in building long-lasting relationships based on trust, quality workmanship, and exceptional customer service.
            </p>
            <p className="text-lg text-foreground">
              From initial consultation and design to installation and ongoing maintenance, ChanTronic Solutions is your partner every step of the way. We are committed to keeping you safe, connected, and secure.
            </p>
          </div>
          <div className="relative animate-fade-in group aspect-video overflow-hidden rounded-lg shadow-xl" style={{ animationDelay: '0.4s' }}>
            <Image
              src="https://placehold.co/600x400.png"
              alt="ChanTronic Solutions Team or Office"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="team meeting office"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
