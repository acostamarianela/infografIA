"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { WhatIsAI } from "@/components/sections/what-is-ai"
import { TuringTest } from "@/components/sections/turing-test"
import { History } from "@/components/sections/history"
import { AIToday } from "@/components/sections/ai-today"

const tabs = [
  { id: "what-is-ai", label: "¿Qué es la IA?" },
  { id: "turing-test", label: "Test de Turing" },
  { id: "history", label: "Historia" },
  { id: "ai-today", label: "IA Hoy" }
]

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 }
}

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("what-is-ai")

  const renderContent = () => {
    switch (activeTab) {
      case "what-is-ai":
        return <WhatIsAI />
      case "turing-test":
        return <TuringTest />
      case "history":
        return <History />
      case "ai-today":
        return <AIToday />
      default:
        return <WhatIsAI />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="bg-primary px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl"
          >
            Inteligencia Artificial
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-pretty text-lg text-primary-foreground/80"
          >
            Una introducción a los conceptos fundamentales
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-2 h-1 w-16 rounded-full bg-accent"
          />
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex gap-1 overflow-x-auto py-3 sm:gap-2 sm:py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-4 py-6">
        <div className="mx-auto max-w-4xl text-center text-sm text-muted-foreground">
          <p>Infografía interactiva sobre Inteligencia Artificial</p>
        </div>
      </footer>
    </div>
  )
}
