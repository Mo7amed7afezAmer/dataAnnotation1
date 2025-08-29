import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Tag, 
  RefreshCw, 
  FileSearch, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Medical Data Collection",
      description: "Comprehensive collection of diverse medical datasets from ethical sources with proper consent and privacy protection.",
      features: [
        "Multi-specialty medical data",
        "Diverse demographic representation",
        "Ethical sourcing protocols",
        "Patient consent verification"
      ]
    },
    {
      icon: Tag,
      title: "Data Annotation & Labeling",
      description: "Expert medical professionals provide accurate annotations and labels for machine learning applications.",
      features: [
        "Clinical expert annotations",
        "Multi-rater validation",
        "Standardized labeling protocols",
        "Quality assurance reviews"
      ]
    }
  ];

  const compliance = [
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Full compliance with Health Insurance Portability and Accountability Act requirements"
    },
    {
      icon: Users,
      title: "GDPR Compliance", 
      description: "Adherence to General Data Protection Regulation for international data handling"
    },
    {
      icon: CheckCircle,
      title: "De-identification",
      description: "Complete removal of personally identifiable information using advanced techniques"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive medical data solutions designed to power your AI innovations 
            while maintaining the highest ethical and quality standards.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-shadow border-0 bg-background">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to ensure data quality, ethics, and compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "Understanding your specific data needs and AI objectives"
              },
              {
                step: "02", 
                title: "Ethical Sourcing",
                description: "Collecting data through ethical channels with proper consent"
              },
              {
                step: "03",
                title: "Processing & Annotation", 
                description: "Expert annotation and quality validation by medical professionals"
              },
              {
                step: "04",
                title: "Delivery & Support",
                description: "Secure delivery with ongoing support and documentation"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {process.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Compliance & Privacy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your data security and regulatory compliance are our top priorities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {compliance.map((item, index) => (
              <Card key={index} className="card-shadow border-0 bg-background text-center">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your medical data needs and how we can support your AI initiatives.
          </p>
          <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;