
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShieldCheck, Camera, Mic, PanelRightOpen, BellRing, SatelliteDish, Volume2, Siren, Zap, Laptop, Wrench
} from 'lucide-react'; // Wrench for Repairs

const services = [
  { name: 'Access Control', icon: ShieldCheck, description: "Secure your premises with advanced access solutions." },
  { name: 'CCTV', icon: Camera, description: "High-definition surveillance for ultimate peace of mind." },
  { name: 'Intercoms', icon: Mic, description: "Seamless communication systems for homes and businesses." },
  { name: 'Gate Automation', icon: PanelRightOpen, description: "Automated gate systems for convenience and security." },
  { name: 'Nurse Call & Electronics', icon: BellRing, description: "Reliable nurse call systems and electronic repairs." },
  { name: 'Satellite & CATV', icon: SatelliteDish, description: "Communal antenna TV and satellite installations." },
  { name: 'PA & BGM Systems', icon: Volume2, description: "Public address and background music solutions." },
  { name: 'Audio EVAC & Fire Detection', icon: Siren, description: "Integrated evacuation and fire alert systems." },
  { name: 'Electric Fence Intruder Detection', icon: Zap, description: "Robust electric fencing for perimeter security." },
  { name: 'IT and Turnkey Solutions', icon: Laptop, description: "Comprehensive IT infrastructure and project delivery." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of electronic solutions, including sales, professional installation, and expert repairs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div key={service.name} className="animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <Card className="h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card border-border hover:border-primary">
                <CardHeader className="flex flex-col items-center text-center">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold text-foreground">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
           <div key="repairs" className="animate-fade-in" style={{ animationDelay: `${0.1 * (services.length + 1)}s` }}>
              <Card className="h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card border-border hover:border-primary">
                <CardHeader className="flex flex-col items-center text-center">
                  <Wrench className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold text-foreground">Expert Repairs</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm">Reliable repair services for all your electronic systems.</p>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
