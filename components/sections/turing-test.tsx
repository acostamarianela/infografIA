"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, MessageSquare, Bot, Eye, Hand, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const requiredCapabilities = [
  "Procesamiento de lenguaje natural",
  "Representación del conocimiento",
  "Razonamiento automatizado",
  "Aprendizaje automático"
]

const totalTuringAdditions = [
  { icon: Eye, label: "Visión por computadora" },
  { icon: Hand, label: "Robótica" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function TuringTest() {
  const [showTotalTuring, setShowTotalTuring] = useState(false)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          Propuesto por Alan Turing en 1950, este test evalúa si una máquina puede 
          exhibir un comportamiento inteligente indistinguible del de un humano.
        </p>
      </motion.div>

      {/* Visual Flow Diagram */}
      <motion.div 
        variants={itemVariants}
        className="rounded-lg border border-border bg-card p-6"
      >
        <h3 className="mb-6 text-center text-lg font-semibold text-card-foreground">
          Esquema del Test
        </h3>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          {/* Interrogator */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-accent/10">
              <User className="h-8 w-8 text-accent" />
            </div>
            <span className="text-sm font-medium text-card-foreground">Interrogador</span>
          </div>

          {/* Arrow / Channel */}
          <div className="flex flex-col items-center gap-1">
            <div className="hidden h-0.5 w-16 bg-border sm:block" />
            <div className="block h-8 w-0.5 bg-border sm:hidden" />
            <div className="flex items-center gap-1 rounded-full bg-muted px-3 py-1">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Canal de texto</span>
            </div>
            <div className="hidden h-0.5 w-16 bg-border sm:block" />
            <div className="block h-8 w-0.5 bg-border sm:hidden" />
          </div>

          {/* Human or Machine */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-muted">
                <User className="h-8 w-8 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium text-card-foreground">Humano</span>
            </div>
            <div className="flex items-center text-muted-foreground">o</div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-muted">
                <Bot className="h-8 w-8 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium text-card-foreground">Máquina</span>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Si el interrogador no puede distinguir consistentemente entre el humano y la máquina, 
          esta última pasa el test.
        </p>
      </motion.div>

      {/* Required Capabilities */}
      <motion.div variants={itemVariants}>
        <h3 className="mb-4 text-lg font-semibold text-foreground">
          Capacidades Requeridas
        </h3>
        <div className="flex flex-wrap gap-2">
          {requiredCapabilities.map((capability) => (
            <span
              key={capability}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-card-foreground"
            >
              {capability}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Total Turing Test Accordion */}
      <motion.div variants={itemVariants}>
        <Button
          variant="outline"
          onClick={() => setShowTotalTuring(!showTotalTuring)}
          className="w-full justify-between"
        >
          <span>Test de Turing Total</span>
          <ChevronDown 
            className={`h-4 w-4 transition-transform ${showTotalTuring ? "rotate-180" : ""}`} 
          />
        </Button>
        
        <AnimatePresence>
          {showTotalTuring && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-lg border border-accent/30 bg-accent/5 p-5">
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  El Test de Turing Total extiende el test original agregando interacción 
                  física con el mundo real, lo que requiere capacidades adicionales:
                </p>
                <div className="flex flex-wrap gap-3">
                  {totalTuringAdditions.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-lg border border-accent/30 bg-card px-4 py-2"
                    >
                      <item.icon className="h-5 w-5 text-accent" />
                      <span className="text-sm font-medium text-card-foreground">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
