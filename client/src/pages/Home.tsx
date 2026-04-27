import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, BarChart3, Brain, CheckCircle, Users, Sparkles, Globe } from "lucide-react";
import { useState } from "react";

/**
 * Premium AI Services Website - Home Page
 * Design: Futuristic Elegance with African Soul
 * Color Scheme: Deep Midnight Blue + Electric Cyan + Neon Violet
 * Typography: Sora (Display) + Inter (Body) + Space Mono (Tech)
 */

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Sparkles,
      title: "Generative AI",
      description: "Transform your business with cutting-edge generative AI solutions. From content creation to intelligent automation, we build custom models tailored to your unique needs.",
      image: "/manus-storage/premium_service_1_a2a29286.png",
      features: ["Custom LLM Fine-tuning", "RAG Systems", "AI Content Generation", "Intelligent Chatbots"]
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      description: "Unlock insights from your data. Our advanced analytics platform transforms raw data into actionable intelligence for smarter decision-making.",
      image: "/manus-storage/premium_service_2_7f0e3e85.png",
      features: ["Predictive Analytics", "Real-time Dashboards", "Data Visualization", "Business Intelligence"]
    },
    {
      icon: Brain,
      title: "AI Strategy",
      description: "Navigate the AI landscape with confidence. We provide comprehensive strategy consulting to help you implement AI effectively across your organization.",
      image: "/manus-storage/premium_service_3_e2dd7ae0.png",
      features: ["AI Roadmap Planning", "Implementation Support", "Team Training", "Change Management"]
    }
  ];

  const caseStudies = [
    {
      company: "FinTech Kenya",
      challenge: "Needed AI-powered fraud detection",
      result: "98% fraud detection accuracy, $2M saved annually",
      industry: "Financial Services"
    },
    {
      company: "E-Commerce Uganda",
      challenge: "Personalization at scale",
      result: "45% increase in conversion rate",
      industry: "E-Commerce"
    },
    {
      company: "Agricultural Tech Rwanda",
      challenge: "Crop yield optimization",
      result: "35% improvement in yield predictions",
      industry: "AgriTech"
    }
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: "East Africa Expertise",
      description: "Deep understanding of the regional market, challenges, and opportunities"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Latest AI models and frameworks deployed with enterprise-grade reliability"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Expert team committed to your success, from implementation to optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-cyan-500/20">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-gradient">Generic AI</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#why" className="hover:text-cyan-400 transition">Why Us</a>
            <a href="#cases" className="hover:text-cyan-400 transition">Cases</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Empowering East Africa with <span className="text-gradient">Next-Gen Intelligence</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Transform your business with AI solutions designed for African markets. We deliver cutting-edge generative AI, data intelligence, and strategic consulting.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold gap-2">
                  Start Your Journey <ArrowRight size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-500/50 hover:bg-cyan-500/10">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass rounded-2xl overflow-hidden glow-cyan">
                <img 
                  src="/manus-storage/hero_ai_africa_fd27939c.png" 
                  alt="AI Hub - East Africa"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-background via-background to-violet-950/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to drive innovation and growth across your organization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, idx) => (
              <button
                key={idx}
                onClick={() => setActiveService(idx)}
                className={`glass rounded-xl p-6 text-left transition-all duration-300 ${
                  activeService === idx ? 'glow-cyan border-cyan-500/50' : 'border-cyan-500/20 hover:border-cyan-500/30'
                }`}
              >
                <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </button>
            ))}
          </div>

          {/* Active Service Detail */}
          <div className="glass rounded-2xl p-8 glow-violet">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">{services[activeService].title}</h3>
                <p className="text-muted-foreground mb-6">{services[activeService].description}</p>
                <div className="space-y-3">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass rounded-xl overflow-hidden glow-cyan">
                <img 
                  src={services[activeService].image} 
                  alt={services[activeService].title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Generic AI</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine deep regional expertise with world-class technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="glass rounded-xl p-8 hover:glow-cyan transition-all duration-300">
                <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-20 bg-gradient-to-b from-background via-background to-cyan-950/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real results from real companies across East Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="glass rounded-xl p-8 border-l-4 border-cyan-500 hover:glow-violet transition-all duration-300">
                <div className="mb-4">
                  <span className="text-cyan-400 text-sm font-mono">{study.industry}</span>
                  <h3 className="text-xl font-bold mt-2">{study.company}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Challenge</p>
                    <p className="font-semibold">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Result</p>
                    <p className="font-semibold text-cyan-400">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$100M+</div>
              <p className="text-muted-foreground">Value Created</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
              <p className="text-muted-foreground">Expert Team Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500"></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how Generic AI can help you unlock the power of artificial intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold gap-2">
              Schedule a Demo <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500/50 hover:bg-cyan-500/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 bg-background/50 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gradient mb-4">Generic AI</h3>
              <p className="text-muted-foreground text-sm">Empowering East Africa with next-generation intelligence</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-cyan-400 transition">Generative AI</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Data Intelligence</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">AI Strategy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-cyan-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Team</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: hello@genericai.africa</li>
                <li>Phone: +254 (0) 700 000 000</li>
                <li>Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-cyan-500/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 Generic AI. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
