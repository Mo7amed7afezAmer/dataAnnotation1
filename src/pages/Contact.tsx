import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Linkedin, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    datasetType: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted Successfully!",
      description: "We'll get back to you within 24 hours to discuss your medical data needs.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      datasetType: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@jawdamed.com",
      description: "Get in touch for dataset inquiries"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      details: "linkedin.com/company/jawdamed",
      description: "Connect with our team"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "Typical response for inquiries"
    },
    {
      icon: MapPin,
      title: "Global Service",
      details: "Worldwide",
      description: "Supporting clients globally"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to discuss your medical data needs? Let's start a conversation about 
            how we can support your AI initiatives with ethical, high-quality datasets.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-shadow border-0 bg-background">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Request a Dataset</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your project and we'll help you find the right medical data solution.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input
                      id="organization"
                      placeholder="Your company or institution"
                      value={formData.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="datasetType">Dataset Type</Label>
                    <Select value={formData.datasetType} onValueChange={(value) => handleInputChange('datasetType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select dataset type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medical-imaging">Medical Imaging</SelectItem>
                        <SelectItem value="clinical-notes">Clinical Notes</SelectItem>
                        <SelectItem value="laboratory-results">Laboratory Results</SelectItem>
                        <SelectItem value="diagnostic-data">Diagnostic Data</SelectItem>
                        <SelectItem value="genomic-data">Genomic Data</SelectItem>
                        <SelectItem value="custom-dataset">Custom Dataset</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your AI project, specific data requirements, timeline, and any compliance needs..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Send Request
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to help you navigate the world of medical AI data. 
                  Our team of experts is ready to discuss your specific needs and 
                  provide customized solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="card-shadow border-0 bg-background">
                    <CardContent className="p-6">
                      <info.icon className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <p className="text-sm font-medium text-secondary mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="card-shadow border-0 bg-background">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    What Happens Next?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Initial Consultation</p>
                        <p className="text-sm text-muted-foreground">We'll discuss your project requirements and data needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Custom Proposal</p>
                        <p className="text-sm text-muted-foreground">Receive a tailored proposal with datasets and timeline</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Data Delivery</p>
                        <p className="text-sm text-muted-foreground">Secure delivery of your customized medical datasets</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30" style={{display:"none"}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our medical data services
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does it take to prepare a custom dataset?",
                answer: "Timeline varies by project complexity, but most custom datasets are delivered within 2-4 weeks. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "What compliance standards do you follow?",
                answer: "We maintain full compliance with HIPAA, GDPR, and other relevant privacy regulations. All data is thoroughly de-identified using advanced techniques."
              },
              {
                question: "Can you provide datasets for specific medical specialties?",
                answer: "Yes, we have expertise across 50+ medical specialties and can create custom datasets tailored to your specific clinical domain."
              },
              {
                question: "Do you offer ongoing support after data delivery?",
                answer: "Absolutely. We provide documentation, technical support, and can assist with data integration into your AI development workflow."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 bg-background">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;