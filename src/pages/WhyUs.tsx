import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  Database, 
  CheckCircle, 
  Award,
  Clock,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

const WhyUs = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Ethically Sourced Data",
      description: "Every dataset comes with verified consent and ethical approval, ensuring your AI development maintains the highest moral standards.",
      benefit: "Build AI with confidence and trust"
    },
    {
      icon: Users,
      title: "Diverse & Representative",
      description: "Our datasets include diverse demographics, reducing bias and improving model performance across all populations.",
      benefit: "Create more inclusive AI systems"
    },
    {
      icon: Database,
      title: "Fully De-identified",
      description: "Complete HIPAA and GDPR compliance with advanced de-identification techniques that preserve data utility.",
      benefit: "Eliminate privacy and compliance risks"
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Multi-tier validation by medical experts ensures accuracy and reliability for your AI training needs.",
      benefit: "Reduce development time and costs"
    }
  ];

  const differentiators = [
    {
      icon: Award,
      title: "Medical Expert Network",
      description: "Our annotation team includes board-certified physicians and medical specialists across multiple disciplines."
    },
    {
      icon: Clock,
      title: "Rapid Delivery",
      description: "Streamlined processes allow us to deliver high-quality datasets faster than traditional medical data providers."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "From small research projects to enterprise-scale AI initiatives, we adapt to your needs and timeline."
    },
    {
      icon: Shield,
      title: "End-to-End Security",
      description: "Military-grade encryption and secure data handling throughout the entire data lifecycle."
    }
  ];

  const stats = [
    { number: "100%", label: "HIPAA Compliant", description: "All datasets fully de-identified" },
    { number: "50+", label: "Medical Specialties", description: "Comprehensive coverage" },
    { number: "24/7", label: "Data Security", description: "Continuous monitoring" },
    { number: "99.9%", label: "Quality Score", description: "Expert-validated datasets" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Why Choose Jawda Med?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're not just another data provider. We're your trusted partner in building 
            ethical, reliable, and groundbreaking medical AI solutions.
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Value Proposition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four core advantages that set us apart in the medical data landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="card-shadow border-0 bg-background">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <advantage.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {advantage.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium text-secondary">
                          {advantage.benefit}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our track record
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond data - we provide expertise, security, and partnership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => (
              <Card key={index} className="card-shadow border-0 bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <diff.icon className="h-6 w-6 text-secondary" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {diff.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {diff.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              The Jawda Med Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we compare to traditional medical data sources
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-destructive/20 bg-background">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  Traditional Data Sources
                </h3>
                <ul className="space-y-3">
                  {[
                    "Limited diversity and representation",
                    "Unclear consent and ethical approval",
                    "Time-consuming compliance processes",
                    "Inconsistent quality and annotation",
                    "Complex procurement procedures"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary bg-background">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  Jawda Med Approach
                </h3>
                <ul className="space-y-3">
                  {[
                    "Diverse, representative datasets by design",
                    "Verified ethical sourcing and consent",
                    "Pre-compliant with HIPAA and GDPR",
                    "Expert-validated, consistent quality",
                    "Streamlined, transparent processes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Experience the Jawda Med Advantage
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the growing number of organizations that trust us for their medical AI data needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary">
              <Link to="/use-cases">
                View Use Cases
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;