import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Jawda Med
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're building the foundation for trustworthy medical AI through ethically sourced, 
            diverse, and de-identified medical data. Our mission is to bridge the gap between 
            healthcare innovation and responsible data practices.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The healthcare industry is rapidly adopting artificial intelligence, but the foundation 
                of any successful AI system is high-quality, representative data. Many organizations 
                struggle with unreliable, biased, or ethically problematic datasets.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At Jawda Med, we solve this critical challenge by providing ethically sourced, 
                diverse, and meticulously prepared medical datasets that enable the development 
                of trustworthy medical AI systems.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that responsible AI in healthcare starts with responsible data practices.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="card-shadow border-0 bg-background">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Vision</h3>
                  <p className="text-muted-foreground">
                    A world where medical AI systems are built on ethical, diverse, 
                    and reliable data foundations.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-shadow border-0 bg-background">
                <CardContent className="p-6">
                  <Lightbulb className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    Advancing healthcare through responsible AI development and 
                    data stewardship practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Jawda Med
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Ethics First",
                description: "We prioritize ethical data sourcing, patient privacy, and consent in every aspect of our work."
              },
              {
                icon: Users,
                title: "Diversity & Inclusion",
                description: "Our datasets represent diverse populations to reduce bias and improve AI fairness."
              },
              {
                icon: Target,
                title: "Quality Excellence",
                description: "We maintain the highest standards for data quality, annotation, and validation."
              },
              {
                icon: Shield,
                title: "Privacy Protection",
                description: "Complete de-identification and compliance with HIPAA, GDPR, and other privacy regulations."
              }
            ].map((value, index) => (
              <Card key={index} className="card-shadow border-0 bg-background text-center">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why We Started</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              The idea for Jawda Med emerged from witnessing the persistent challenges faced by 
              healthcare AI developers: unreliable datasets, biased data, privacy concerns, 
              and the complexity of obtaining ethically sourced medical information.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6">
              We recognized that while the potential for AI to transform healthcare is enormous, 
              the foundation – the data – was often the weakest link. Poor quality datasets lead 
              to unreliable AI systems, which can have serious consequences in healthcare settings.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6">
              Our team combines expertise in healthcare, data science, privacy law, and AI ethics 
              to address these challenges comprehensively. We don't just provide data; we provide 
              the ethical framework and quality assurance that healthcare AI deserves.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Today, we're proud to partner with leading healthcare organizations, AI companies, 
              and research institutions to build the next generation of trustworthy medical AI systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;