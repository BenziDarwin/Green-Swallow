"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  LineChart, 
  Wallet2, 
  TrendingUp, 
  Shield,
  CheckCircle,
  Users,
  Globe,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Secure Investments",
        "Sustainable Growth",
        "Expert Management",
        "Real-Time Updates"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative animated-background py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold tracking-tight text-primary mb-6">
              Welcome to Green Swallow Investments
            </h1>
            <p className="text-2xl mb-4">
              Providing <span ref={typedRef}></span>
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              Join our exclusive investment group and watch your wealth grow through strategic, sustainable investments.
            </p>
            <div className="flex gap-4">
              <Link href="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg">Sign In</Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Stats */}
        <div className="container mx-auto px-4 mt-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <Users className="h-12 w-12 text-primary" />
              <div>
                <p className="text-3xl font-bold">10,000+</p>
                <p className="text-muted-foreground">Active Investors</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="h-12 w-12 text-primary" />
              <div>
                <p className="text-3xl font-bold">30+</p>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <TrendingUp className="h-12 w-12 text-primary" />
              <div>
                <p className="text-3xl font-bold">24.5%</p>
                <p className="text-muted-foreground">Avg. Annual Return</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Green Swallow?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our comprehensive investment platform designed for modern investors.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <LineChart className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
              <p className="text-muted-foreground">
                Track your investments with live price updates and portfolio performance metrics.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                  Live portfolio tracking
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                  Performance analytics
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                  Market insights
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Wallet2 className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Deposits</h3>
              <p className="text-muted-foreground">
                Make deposits easily and securely through our protected payment system.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                  Bank-grade security
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                  Multiple payment options
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                  Instant processing
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <TrendingUp className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your investment growth with detailed analytics and reports.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                  Custom reports
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                  Growth projections
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                  Risk analysis
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-8">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Your Trust is Our Priority</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Green Swallow Investments is committed to maintaining the highest standards of security and transparency. 
              Your investments are protected by state-of-the-art security measures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Bank-Level Security</h4>
                <p className="text-muted-foreground">256-bit encryption for all transactions</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Licensed & Regulated</h4>
                <p className="text-muted-foreground">Fully compliant with financial regulations</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
                <p className="text-muted-foreground">Expert assistance whenever you need it</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Investing?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful investors who have already chosen Green Swallow Investments for their financial growth.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Create Your Account
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}