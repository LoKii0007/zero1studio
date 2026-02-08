"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Plan = {
    name: string;
    price: string;
    desc: string;
    features: string[];
    highlight?: boolean;
};

type PricingData = {
    [key: string]: Plan[];
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("web");

  const tabs = [
      { id: "web", label: "Web Development" },
      { id: "chatbot", label: "Chatbot Creation" },
      { id: "mvp", label: "MVP Build" },
  ];

  const pricingData: PricingData = {
    web: [
        {
            name: "Landing",
            price: "3k",
            desc: "High-converting one-pager.",
            features: ["Custom Design", "React/Next.js", "SEO Optimized", "Fast Loading"],
        },
        {
            name: "Corporate",
            price: "8k",
            desc: "Complete brand presence.",
            features: ["5-10 Pages", "CMS Integration", "Animations", "Analytics", "Lead Capture"],
            highlight: true
        },
        {
            name: "E-Commerce",
            price: "15k",
            desc: "Sell products globally.",
            features: ["Shopify/Woo/Custom", "Payment Gateways", "Inventory Sync", "User Accounts", "Admin Dashboard"],
        }
    ],
    chatbot: [
        {
            name: "FAQ Bot",
            price: "2k",
            desc: "Automate common questions.",
            features: ["Scripted Responses", "Website Widget", "Basic Analytics", "Email Handoff"],
        },
        {
            name: "AI Agent",
            price: "5k",
            desc: "Smart conversationalist.",
            features: ["LLM Integration", "Knowledge Base", "Sentiment Analysis", "Lead Qualification", "CRM Sync"],
            highlight: true
        },
        {
            name: "Custom Brain",
            price: "10k+",
            desc: "Full enterprise integration.",
            features: ["Custom Model Tuning", "API Actions", "Multi-channel", "Voice Capability", "SLA Support"],
        }
    ],
    mvp: [
        {
            name: "Prototype",
            price: "5k",
            desc: "Clickable UI/UX for investors.",
            features: ["High-fidelity Design", "Interactive Flow", "User Testing Ready", "Dev Handoff File"],
        },
        {
            name: "Core MVP",
            price: "15k",
            desc: "Functional product for launch.",
            features: ["Core Features", "Database Setup", "Auth System", "Admin Panel", "Hosting Setup"],
            highlight: true
        },
        {
            name: "Scale",
            price: "30k+",
            desc: "Built for high growth.",
            features: ["Microservices", "Advanced Security", "Load Balancing", "CI/CD Pipelines", "Mobile App Support"],
        }
    ]
  };

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-[90rem] mx-auto">
        
        {/* Tabs */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mb-8">Investment</h2>
            <div className="flex flex-wrap justify-center gap-2 p-1 bg-white/5 rounded-3xl md:rounded-full backdrop-blur-sm border border-white/10 w-full md:w-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative flex-1 md:flex-none px-4 md:px-6 py-3 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${activeTab === tab.id ? "text-black" : "text-white/60 hover:text-white"}`}
                    >
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-accent rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
                    </button>
                ))}
            </div>
        </div>

        {/* Pricing Cards */}
        <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden"
                >
                {pricingData[activeTab].map((plan, i) => (
                    <div key={i} className={`bg-background p-6 md:p-12 flex flex-col relative group ${plan.highlight ? 'bg-surface' : ''}`}>
                    {plan.highlight && (
                        <div className="absolute top-0 right-0 p-4">
                            <div className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#D4FF00]"></div>
                        </div>
                    )}
                    
                    <div className="mb-8 md:mb-12">
                        <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-white/50 text-xs md:text-sm mb-6 md:mb-8 h-8 md:h-10">{plan.desc}</p>
                        <div className="flex items-baseline">
                            <span className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter">${plan.price}</span>
                            {plan.price.includes("k") || plan.price.includes("+") ? (
                                <span className="text-white/30 ml-2 text-sm md:text-base">/ start</span>
                            ) : null}
                        </div>
                    </div>

                    <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12 flex-1">
                        {plan.features.map((feature, f) => (
                        <li key={f} className="flex items-start gap-3 text-xs md:text-sm text-white/70">
                            <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            {feature}
                        </li>
                        ))}
                    </ul>

                    <button className={`w-full py-3 md:py-4 px-6 rounded-full border border-white/20 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${plan.highlight ? 'bg-accent text-black border-accent' : 'bg-transparent text-white hover:bg-white hover:text-black'}`}>
                        Start Project
                    </button>
                    </div>
                ))}
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
}