"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  User,
  MessageSquare,
  Bot,
  Eye,
  Hand,
  ChevronDown,
  Brain,
  BookOpen,
  Cpu,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const requiredCapabilities = [
  {
    icon: MessageSquare,
    title: "Procesamiento de lenguaje natural",
    description:
      "Permite comprender preguntas escritas en lenguaje humano y generar respuestas coherentes durante una conversación.",
  },
  {
    icon: BookOpen,
    title: "Representación del conocimiento",
    description:
      "Organiza información sobre el mundo para que el sistema pueda utilizarla al responder, comparar ideas o explicar conceptos.",
  },
  {
    icon: Brain,
    title: "Razonamiento automatizado",
    description:
      "Ayuda a conectar datos, sacar conclusiones y mantener respuestas lógicas según el contexto de la conversación.",
  },
  {
    icon: Cpu,
    title: "Aprendizaje automático",
    description:
      "Permite mejorar el rendimiento del sistema a partir de datos, ejemplos previos y patrones detectados.",
  },
]

const turingSteps = [
  "El interrogador realiza preguntas mediante un canal de texto.",
  "Del otro lado pueden responder una persona o una máquina.",
  "El evaluador analiza las respuestas sin saber quién responde.",
  "Si no puede distinguirlos con seguridad, se considera que la máquina supera la prueba.",
]

const limitations = [
  "No mide si la máquina realmente comprende lo que dice.",
  "Se centra principalmente en la conversación escrita.",
  "Puede valorar la imitación humana más que la inteligencia en sí misma.",
  "Hoy existen sistemas que parecen inteligentes, pero pueden cometer errores o inventar información.",
]

const totalTuringAdditions = [
  {
    icon: Eye,
    label: "Visión por computadora",
    description:
      "Permite interpretar imágenes, objetos, gestos y elementos visuales del entorno.",
  },
  {
    icon: Hand,
    label: "Robótica",
    description:
      "Permite actuar físicamente en el mundo mediante movimientos, sensores y dispositivos.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
      <motion.div
        variants={itemVariants}
        className="rounded-lg border border-border bg-card p-6"
      >
        <h3 className="mb-3 text-lg font-semibold text-card-foreground">
          ¿Qué es el Test de Turing?
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          El Test de Turing fue propuesto por Alan Turing en 1950 como una forma
          de analizar si una máquina podía mostrar un comportamiento inteligente.
          En lugar de preguntar si la máquina “piensa” como una persona, el test
          propone observar si sus respuestas pueden confundirse con las de un ser
          humano durante una conversación escrita.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="rounded-lg border border-border bg-card p-6"
      >
        <h3 className="mb-6 text-center text-lg font-semibold text-card-foreground">
          Esquema del Test
        </h3>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-accent/10">
              <User className="h-8 w-8 text-accent" />
            </div>
            <span className="text-sm font-medium text-card-foreground">
              Interrogador
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="hidden h-0.5 w-16 bg-border sm:block" />
            <div className="block h-8 w-0.5 bg-border sm:hidden" />
            <div className="flex items-center gap-1 rounded-full bg-muted px-3 py-1">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                Canal de texto
              </span>
            </div>
            <div className="hidden h-0.5 w-16 bg-border sm:block" />
            <div className="block h-8 w-0.5 bg-border sm:hidden" />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-muted">
                <User className="h-8 w-8 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium text-card-foreground">
                Humano
              </span>
            </div>

            <div className="flex items-center text-muted-foreground">o</div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-muted">
                <Bot className="h-8 w-8 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium text-card-foreground">
                Máquina
              </span>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Si el interrogador no puede distinguir consistentemente entre el humano
          y la máquina, esta última pasa el test.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="rounded-lg border border-border bg-card p-6"
      >
        <h3 className="mb-4 text-lg font-semibold text-card-foreground">
          ¿Cómo funciona?
        </h3>

        <div className="grid gap-3 sm:grid-cols-2">
          {turingSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-lg border border-border bg-muted/30 p-4"
            >
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                {index + 1}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="mb-4 text-lg font-semibold text-foreground">
          Capacidades requeridas
        </h3>

        <p className="mb-4 text-muted-foreground leading-relaxed">
          Para superar esta prueba, una máquina no solo debe responder frases
          aisladas. También necesita combinar distintas capacidades vinculadas
          con la comunicación, el razonamiento y el manejo de información.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {requiredCapabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent"
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
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="rounded-lg border border-accent/30 bg-accent/5 p-6"
      >
        <div className="mb-3 flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold text-card-foreground">
            Importancia histórica
          </h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          La importancia del Test de Turing está en que marcó una manera nueva de
          pensar la inteligencia artificial. Su propuesta ayudó a trasladar la
          discusión desde una pregunta filosófica —si una máquina puede pensar—
          hacia una evaluación más práctica basada en su comportamiento observable.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="rounded-lg border border-border bg-card p-6"
      >
        <div className="mb-3 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold text-card-foreground">
            Limitaciones del test
          </h3>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {limitations.map((limitation) => (
            <div key={limitation} className="flex gap-2 rounded-lg bg-muted/30 p-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {limitation}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button
          variant="outline"
          onClick={() => setShowTotalTuring(!showTotalTuring)}
          className="w-full justify-between"
        >
          <span>Test de Turing Total</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              showTotalTuring ? "rotate-180" : ""
            }`}
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
                  El Test de Turing Total amplía la prueba original. Además de
                  conversar mediante texto, una máquina debería poder percibir el
                  entorno e interactuar físicamente con él. Por eso incorpora
                  capacidades adicionales:
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {totalTuringAdditions.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-accent/30 bg-card p-4"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <item.icon className="h-5 w-5 text-accent" />
                        <span className="text-sm font-medium text-card-foreground">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
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