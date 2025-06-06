
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Mr. Chan',
    role: 'Founder & Lead Technician',
    bio: 'With over 20 years of experience, Mr. Chan leads our team with expertise and dedication.',
    imageSrc: 'https://placehold.co/400x400.png',
    imageHint: 'professional male'
  },
  {
    name: 'Ms. Thandi',
    role: 'Operations Manager',
    bio: 'Ensuring smooth project execution and exceptional client satisfaction.',
    imageSrc: 'https://placehold.co/400x400.png',
    imageHint: 'professional female'
  },
  {
    name: 'John Doe',
    role: 'Senior Installer',
    bio: 'Specializing in complex installations and system integrations.',
    imageSrc: 'https://placehold.co/400x400.png',
    imageHint: 'technician male'
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The dedicated professionals behind ChanTronic Solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <Card className="h-full text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card border-border hover:border-primary">
                <CardHeader className="flex flex-col items-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg border-2 border-primary">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover"
                      data-ai-hint={member.imageHint}
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
