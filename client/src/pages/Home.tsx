import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Brain, CheckCircle, Sparkles, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { HeroVisualization } from "@/components/HeroVisualization";

/**
 * AlphaCortex - Premium AI Services Website
 * Design: Futuristic Elegance with African Soul
 * Features: Light & Dark Mode Toggle
 * Color Scheme: Deep Midnight Blue + Electric Cyan + Neon Violet (Dark) | Clean White + Cyan + Violet (Light)
 * Typography: Sora (Display) + Inter (Body) + Space Mono (Tech)
 */

import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [activeService, setActiveService] = useState(0);
  const [heroVisualizationIndex, setHeroVisualizationIndex] = useState(0);

  const visualizationCount = 3; // Number of different 3D visualizations

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroVisualizationIndex((prev) => (prev + 1) % visualizationCount);
    }, 8000);
    return () => clearInterval(timer);
  }, [visualizationCount]);

  const services = [
    {
      icon: Sparkles,
      title: "Generative AI",
      description: "Transform your business with cutting-edge generative AI solutions. From content creation to intelligent automation, we build custom models tailored to your unique needs.",
      image: "/images/generative_ai.png",
      features: ["Custom LLM Fine-tuning", "RAG Systems", "AI Content Generation", "Intelligent Chatbots"]
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      description: "Unlock insights from your data. Our advanced analytics platform transforms raw data into actionable intelligence for smarter decision-making.",
      image: "/images/data_intelligence.png",
      features: ["Predictive Analytics", "Real-time Dashboards", "Data Visualization", "Business Intelligence"]
    },
    {
      icon: Brain,
      title: "AI Strategy",
      description: "Navigate the AI landscape with confidence. We provide comprehensive strategy consulting to help you implement AI effectively across your organization.",
      image: "/images/ai_strategy.png",
      features: ["AI Roadmap Planning", "Implementation Support", "Team Training", "Change Management"]
    }
  ];

  const caseStudies = [
    {
      company: "HelloQuip",
      challenge: "Building an AI-powered e-commerce platform",
      result: "Fully functional online store with intelligent product recommendations",
      industry: "E-Commerce",
      url: "https://helloquip-zr8b.vercel.app/"
    },
    {
      company: "CareMax",
      challenge: "Creating an AI-powered WhatsApp bot with human handoff capability",
      result: "Seamless customer service automation with human escalation",
      industry: "Customer Service",
      url: "https://caremax.online"
    },
    {
      company: "Enterprise Solutions",
      challenge: "Digital transformation with AI integration",
      result: "40% operational efficiency improvement",
      industry: "Enterprise"
    }
  ];



  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-cyan-500/20">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-gradient">AlphaCortex</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#cases" className="hover:text-cyan-400 transition">Cases</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
          <div className="flex gap-4 items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-cyan-500/10 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">Get Started</Button>
          </div>
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
                AlphaCortex transforms your business with AI solutions designed for African markets. We deliver cutting-edge generative AI, data intelligence, and strategic consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold gap-2">
                  Start Your Journey <ArrowRight size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-500/50 hover:bg-cyan-500/10">
                  Schedule Demo
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-video">
              <div className="glass rounded-2xl overflow-hidden glow-cyan h-full relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroVisualizationIndex}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <HeroVisualization index={heroVisualizationIndex} />
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Visualization Indicators */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {Array.from({ length: visualizationCount }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setHeroVisualizationIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      heroVisualizationIndex === idx ? "w-8 bg-cyan-500" : "bg-cyan-500/30"
                    }`}
                    aria-label={`Go to visualization ${idx + 1}`}
                  />
                ))}
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
                  {study.url && (
                    <Button asChild size="sm" variant="outline" className="border-cyan-500/50 hover:bg-cyan-500/10">
                      <a href={study.url} target="_blank" rel="noopener noreferrer">
                        Visit
                      </a>
                    </Button>
                  )}
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
              <div className="text-4xl font-bold text-cyan-400 mb-2">40+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$80M+</div>
              <p className="text-muted-foreground">Value Created</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">12+</div>
              <p className="text-muted-foreground">Expert Team Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">96%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get in touch with us to discuss how AlphaCortex can help you unlock the power of artificial intelligence.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 bg-background/50 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gradient mb-4">AlphaCortex</h3>
              <p className="text-muted-foreground text-sm">Empowering East Africa with next-generation intelligence</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-cyan-400 transition">Generative AI</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition">Data Intelligence</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition">AI Strategy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#cases" className="hover:text-cyan-400 transition">Case Studies</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:alphacortexai@gmail.com" className="hover:text-cyan-400 transition">alphacortexai@gmail.com</a></li>
                <li><a href="tel:+254782830524" className="hover:text-cyan-400 transition">+254 782 830 524</a></li>
                <li>Kampala, Uganda, 2026</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-cyan-500/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 AlphaCortex. All rights reserved.</p>
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
