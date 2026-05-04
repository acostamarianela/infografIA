"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const timelineEvents = [
  {
    year: "1943",
    title: "Primera Red Neuronal",
    summary: "Inicio del modelo de neuronas artificiales.",
    details:
      "McCulloch y Pitts desarrollaron el primer modelo matemático de una neurona artificial, demostrando que los procesos neuronales podían representarse mediante lógica computacional."
  },
  {
    year: "1950",
    title: "Test de Turing",
    summary: "Primer criterio para evaluar inteligencia artificial.",
    details:
      "Alan Turing propuso evaluar la inteligencia de una máquina a través de su comportamiento en una conversación, cambiando la forma de entender la IA."
  },
  {
    year: "1956",
    title: "Nacimiento de la IA",
    summary: "Se define oficialmente la disciplina.",
    details:
      "En la conferencia de Dartmouth se acuñó el término 'Inteligencia Artificial', marcando el inicio formal del campo."
  },
  {
    year: "1970 - 1980",
    title: "Primeras limitaciones",
    summary: "Falta de avances significativos.",
    details:
      "Se produjo el llamado 'invierno de la IA' debido a limitaciones tecnológicas y expectativas no cumplidas."
  },
  {
    year: "1980s",
    title: "Sistemas Expertos",
    summary: "Aplicaciones en industrias.",
    details:
      "Los sistemas expertos permitieron aplicar IA en áreas como medicina e ingeniería mediante reglas predefinidas."
  },
  {
    year: "1990s",
    title: "IA probabilística",
    summary: "Manejo de incertidumbre.",
    details:
      "Las redes bayesianas y agentes inteligentes permitieron trabajar con información incompleta."
  },
  {
    year: "2000s",
    title: "Machine Learning",
    summary: "Aprendizaje a partir de datos.",
    details:
      "Las máquinas comienzan a aprender patrones sin necesidad de reglas explícitas."
  },
  {
    year: "2010s",
    title: "Deep Learning",
    summary: "Avances en redes neuronales.",
    details:
      "Las redes profundas revolucionaron áreas como visión artificial y procesamiento de lenguaje."
  },
  {
    year: "Actualidad",
    title: "IA en la vida cotidiana",
    summary: "Uso masivo en múltiples áreas.",
    details:
      "La IA está presente en asistentes virtuales, medicina, transporte y sistemas digitales."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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
      className="space-y-8"
    >
      {/* INTRO */}
      <motion.div
        variants={itemVariants}
        className="rounded-lg border border-border bg-card p-6"
      >
        <h3 className="mb-3 text-lg font-semibold text-card-foreground">
          Evolución de la Inteligencia Artificial
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          La Inteligencia Artificial es el resultado de décadas de investigación
          y avances tecnológicos. Desde modelos teóricos hasta aplicaciones
          actuales, su evolución permitió el desarrollo de sistemas cada vez más
          complejos capaces de aprender, razonar y tomar decisiones.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative">
        {/* línea */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border sm:left-6" />

        <div className="space-y-4">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              variants={itemVariants}
              className="relative pl-12 sm:pl-16"
            >
              {/* punto */}
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className={`absolute left-2 top-6 h-5 w-5 rounded-full border-2 ${
                  expandedIndex === index
                    ? "border-accent bg-accent"
                    : "border-border bg-card"
                }`}
              />

              {/* card */}
              <div
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="cursor-pointer rounded-lg border bg-card p-4"
              >
                <span className="text-xs font-semibold text-accent">
                  {event.year}
                </span>

                <h3 className="font-semibold text-card-foreground">
                  {event.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {event.summary}
                </p>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 border-t border-border pt-3 text-sm text-muted-foreground leading-relaxed">
                        {event.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CIERRE */}
      <motion.div
        variants={itemVariants}
        className="rounded-lg border border-accent/30 bg-accent/5 p-6"
      >
        <p className="text-muted-foreground leading-relaxed">
          La evolución de la Inteligencia Artificial demuestra cómo una idea
          teórica se transformó en una tecnología fundamental en la actualidad,
          presente en múltiples ámbitos de la vida cotidiana.
        </p>
      </motion.div>
    </motion.div>
  )
}