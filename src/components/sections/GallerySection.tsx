
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'CCTV Installation Project', hint: 'cctv installation' },
  { src: 'https://placehold.co/600x400.png', alt: 'Access Control System', hint: 'access control' },
  { src: 'https://placehold.co/600x400.png', alt: 'Gate Automation Example', hint: 'gate automation' },
  { src: 'https://placehold.co/600x400.png', alt: 'Intercom System Setup', hint: 'intercom system' },
  { src: 'https://placehold.co/600x400.png', alt: 'Electric Fence Project', hint: 'electric fence' },
  { src: 'https://placehold.co/600x400.png', alt: 'PA System Installation', hint: 'audio system' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Our Work Showcase</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into some of our successfully completed projects and installations.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="animate-fade-in group" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card border-border hover:border-primary">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={image.hint}
                    />
                  </div>
                  <div className="p-4">
                     <p className="text-sm text-center font-medium text-foreground">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
