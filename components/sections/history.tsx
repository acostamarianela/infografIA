"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const timelineEvents = [
  {
    year: "1943",
    title: "Primera Red Neuronal",
    summary: "McCulloch y Pitts crean el primer modelo de neurona artificial.",
    details: "Warren McCulloch y Walter Pitts publicaron un artículo describiendo un modelo computacional de neuronas artificiales, sentando las bases teóricas para las redes neuronales modernas."
  },
  {
    year: "1950",
    title: "Test de Turing",
    summary: "Alan Turing propone su famoso test de inteligencia de máquinas.",
    details: "En su artículo 'Computing Machinery and Intelligence', Turing planteó la pregunta '¿Pueden las máquinas pensar?' y propuso el test de imitación como criterio de inteligencia."
  },
  {
    year: "1956",
    title: "Nace el término 'IA'",
    summary: "John McCarthy acuña el término en la conferencia de Dartmouth.",
    details: "La Conferencia de Dartmouth, organizada por McCarthy, Minsky, Rochester y Shannon, es considerada el evento fundacional del campo de la Inteligencia Artificial como disciplina."
  },
  {
    year: "1980s",
    title: "Sistemas Expertos",
    summary: "Auge de los sistemas basados en reglas para dominios específicos.",
    details: "Los sistemas expertos como MYCIN (diagnóstico médico) y XCON (configuración de computadoras) demostraron aplicaciones comerciales exitosas de la IA en dominios especializados."
  },
  {
    year: "1990s",
    title: "Redes Bayesianas y Agentes",
    summary: "Nuevos enfoques probabilísticos y arquitecturas de agentes inteligentes.",
    details: "El desarrollo de redes bayesianas permitió manejar la incertidumbre de forma rigurosa, mientras que la arquitectura de agentes proporcionó un marco para sistemas autónomos."
  },
  {
    year: "2000s+",
    title: "Era del Deep Learning",
    summary: "Las redes neuronales profundas revolucionan el campo.",
    details: "El aumento del poder computacional, la disponibilidad de grandes conjuntos de datos y algoritmos mejorados permitieron entrenar redes neuronales profundas, logrando avances en visión, lenguaje y más."
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

export function History() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border sm:left-6" />

      <div className="space-y-4">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            variants={itemVariants}
            className="relative pl-12 sm:pl-16"
          >
            {/* Timeline dot */}
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className={`absolute left-2 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors sm:left-4 sm:h-5 sm:w-5 ${
                expandedIndex === index
                  ? "border-accent bg-accent"
                  : "border-border bg-card hover:border-accent"
              }`}
              aria-expanded={expandedIndex === index}
              aria-label={`Ver detalles de ${event.year}: ${event.title}`}
            >
              <span className="sr-only">Expandir</span>
            </button>

            {/* Content card */}
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full text-left"
            >
              <div
                className={`rounded-lg border bg-card p-4 transition-colors ${
                  expandedIndex === index ? "border-accent" : "border-border hover:border-accent/50"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="mb-1 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                      {event.year}
                    </span>
                    <h3 className="mb-1 font-semibold text-card-foreground">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {event.summary}
                    </p>
                  </div>
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="h-3 w-3 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground leading-relaxed">
                        {event.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
