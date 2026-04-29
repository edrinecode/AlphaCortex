import { useState } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!db) {
        throw new Error("Firebase database is not initialized. Please check your environment variables.");
      }
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error: any) {
      console.error("Error adding document: ", error);
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass p-8 rounded-2xl glow-cyan max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Name</label>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-background/50 border border-cyan-500/20 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-background/50 border border-cyan-500/20 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+256..."
              className="w-full bg-background/50 border border-cyan-500/20 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Company</label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Ltd"
              className="w-full bg-background/50 border border-cyan-500/20 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Message</label>
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your project..."
            className="w-full bg-background/50 border border-cyan-500/20 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 transition resize-none"
          />
        </div>

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.div>
  );
}
