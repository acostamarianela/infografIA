"use client"

import { motion } from "framer-motion"
import { Brain, MessageSquare, GraduationCap, Database } from "lucide-react"

const capabilities = [
  {
    icon: Brain,
    title: "Razonamiento",
    description: "Capacidad de inferir conclusiones lógicas a partir de información disponible."
  },
  {
    icon: MessageSquare,
    title: "Lenguaje Natural",
    description: "Comprensión y generación de texto en lenguaje humano."
  },
  {
    icon: GraduationCap,
    title: "Aprendizaje",
    description: "Mejora del rendimiento a través de la experiencia y los datos."
  },
  {
    icon: Database,
    title: "Representación del Conocimiento",
    description: "Almacenamiento y organización estructurada de información."
  }
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

export function WhatIsAI() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div 
        variants={itemVariants}
        className="rounded-lg border border-border bg-card p-6"
      >
        <h3 className="mb-3 text-lg font-semibold text-card-foreground">
          Definición
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          No existe una definición única y universalmente aceptada de Inteligencia Artificial. 
          En términos generales, se refiere a sistemas computacionales capaces de realizar 
          tareas que normalmente requieren inteligencia humana, como el reconocimiento de 
          patrones, la toma de decisiones y la resolución de problemas.
        </p>
      </motion.div>

      <div>
        <motion.h3 
          variants={itemVariants}
          className="mb-4 text-lg font-semibold text-foreground"
        >
          Capacidades Fundamentales
        </motion.h3>
        <motion.div 
          variants={containerVariants}
          className="grid gap-4 sm:grid-cols-2"
        >
          {capabilities.map((capability) => (
            <motion.div
              key={capability.title}
              variants={itemVariants}
              className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <capability.icon className="h-5 w-5 text-accent" />
              </div>
              <h4 className="mb-2 font-medium text-card-foreground">
                {capability.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
