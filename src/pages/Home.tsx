import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SvgLandingPage } from '@/components/SVGLandingPage';
import { Shield, Database, Users, CheckCircle, ArrowRight, Activity, Brain, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center space-y-8">
            {/* Animated data dots */}
            <div className="flex justify-center space-x-4 mb-8">
              <div className="data-dot"></div>
              <div className="data-dot"></div>
              <div className="data-dot"></div>
              <div className="data-dot"></div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Ethically Sourced.<br />
              <span className="text-primary">Diverse.</span><br />
              <span className="text-secondary">De-identified</span> Medical Data for AI.
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We provide clean, high-quality, and de-identified medical data to power artificial intelligence 
              in healthcare. Building the foundation for trustworthy medical AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="min-w-[200px]">
                <Link to="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[200px]">
                <Link to="/services">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Flowing data visualization */}
        
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Jawda Med?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We address the critical challenges in medical AI development with our core values
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Ethical Standards",
                description: "All data is ethically sourced with proper consent and privacy protection"
              },
              {
                icon: Users,
                title: "Diverse Datasets",
                description: "Representative data across demographics, conditions, and populations"
              },
              {
                icon: Database,
                title: "De-identified",
                description: "HIPAA and GDPR compliant data processing and anonymization"
              }
            ].map((value, index) => (
              <Card key={index} className="card-shadow border-0 bg-background">
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
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

      {/* Use Cases Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Powering Medical AI Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our datasets enable breakthrough applications across healthcare
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Model Training",
                description: "Train robust diagnostic and predictive models with diverse, high-quality datasets"
              },
              {
                icon: Activity,
                title: "Medical Research",
                description: "Accelerate clinical research with comprehensive, annotated medical data"
              },
              {
                icon: Heart,
                title: "Diagnostic Tools",
                description: "Develop accurate diagnostic tools powered by representative medical datasets"
              }
            ].map((useCase, index) => (
              <Card key={index} className="card-shadow border-0 bg-background">
                <CardContent className="p-6">
                  <useCase.icon className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12" style={{display: "none"}}>
            <Button asChild variant="outline" size="lg">
              <Link to="/use-cases">
                View All Use Cases
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Trustworthy Medical AI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading healthcare organizations and AI companies who trust Jawda Med 
            for their medical data needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
            <Link to="/contact">
              Request a Dataset
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;