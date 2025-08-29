import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Activity, 
  Heart, 
  Eye, 
  Stethoscope, 
  Microscope,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Brain,
      title: "AI Model Training",
      description: "Train robust diagnostic and predictive models with diverse, high-quality medical datasets.",
      applications: [
        "Deep learning model development",
        "Predictive analytics training",
        "Computer vision for medical imaging",
        "Natural language processing for clinical notes"
      ],
      benefits: [
        "Reduced training time with clean data",
        "Improved model accuracy and reliability",
        "Better generalization across populations",
        "Compliance-ready datasets"
      ]
    },
    {
      icon: Activity,
      title: "Medical Research",
      description: "Accelerate clinical research with comprehensive, annotated medical datasets.",
      applications: [
        "Clinical trial design and planning",
        "Epidemiological studies",
        "Drug discovery and development",
        "Health outcomes research"
      ],
      benefits: [
        "Faster research hypothesis validation",
        "Access to diverse patient populations",
        "Reduced data collection costs",
        "Accelerated publication timelines"
      ]
    },
    {
      icon: Heart,
      title: "Diagnostic Tool Development",
      description: "Develop accurate diagnostic tools powered by representative medical datasets.",
      applications: [
        "Medical imaging diagnostics",
        "Laboratory result interpretation",
        "Symptom-based diagnosis systems",
        "Risk assessment algorithms"
      ],
      benefits: [
        "Higher diagnostic accuracy",
        "Reduced false positives/negatives",
        "Better performance across demographics",
        "Regulatory approval support"
      ]
    },
    {
      icon: Stethoscope,
      title: "Clinical Decision Support",
      description: "Build intelligent systems that assist healthcare professionals in making better decisions.",
      applications: [
        "Treatment recommendation engines",
        "Drug interaction alerts",
        "Clinical pathway optimization",
        "Patient monitoring systems"
      ],
      benefits: [
        "Improved patient outcomes",
        "Reduced medical errors",
        "Enhanced clinical efficiency",
        "Evidence-based recommendations"
      ]
    },
    {
      icon: Eye,
      title: "Medical Imaging AI",
      description: "Power computer vision applications with expertly annotated medical imaging datasets.",
      applications: [
        "Radiology image analysis",
        "Pathology slide interpretation",
        "Ophthalmology screening",
        "Dermatology lesion detection"
      ],
      benefits: [
        "Expert radiologist annotations",
        "Multi-modality image support",
        "Standardized imaging protocols",
        "Continuous quality validation"
      ]
    },
    {
      icon: Microscope,
      title: "Drug Discovery & Development",
      description: "Accelerate pharmaceutical research with comprehensive patient data and outcomes.",
      applications: [
        "Target identification and validation",
        "Clinical trial patient matching",
        "Adverse event prediction",
        "Drug efficacy analysis"
      ],
      benefits: [
        "Reduced development timelines",
        "Better patient stratification",
        "Improved safety profiles",
        "Enhanced regulatory submissions"
      ]
    }
  ];

  const industries = [
    {
      name: "Healthcare Systems",
      description: "Hospitals and health networks developing AI-powered diagnostic and treatment tools"
    },
    {
      name: "AI/ML Companies",
      description: "Technology companies building healthcare AI solutions and medical devices"
    },
    {
      name: "Pharmaceutical",
      description: "Drug companies leveraging AI for discovery, development, and clinical trials"
    },
    {
      name: "Research Institutions",
      description: "Academic and clinical research organizations conducting medical AI studies"
    },
    {
      name: "Medical Device Manufacturers",
      description: "Companies developing smart medical devices and diagnostic equipment"
    },
    {
      name: "Biotech Startups",
      description: "Emerging companies at the intersection of biology, technology, and AI"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Use Cases & Applications
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover how our medical datasets power breakthrough AI applications 
            across healthcare, research, and pharmaceutical industries.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Primary Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our datasets enable innovation across multiple healthcare AI domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="card-shadow border-0 bg-background">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <useCase.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Applications</h4>
                      <ul className="space-y-2">
                        {useCase.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our medical datasets support AI innovation across diverse healthcare sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="card-shadow border-0 bg-background">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our datasets consistently deliver measurable improvements in AI performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                metric: "95%",
                label: "Average Model Accuracy",
                description: "Across diagnostic applications"
              },
              {
                metric: "60%",
                label: "Faster Development",
                description: "Compared to self-collected data"
              },
              {
                metric: "40%",
                label: "Reduced Bias",
                description: "Through diverse datasets"
              },
              {
                metric: "100%",
                label: "Compliance Rate",
                description: "HIPAA and GDPR adherence"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.metric}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Power Your Medical AI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our datasets can accelerate your specific AI application 
            and help you achieve breakthrough results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
              <Link to="/contact">
                Discuss Your Use Case
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;