"use client"

import { motion } from "framer-motion"
import { Search, Mic, Car, Stethoscope, BarChart3, MessageCircle } from "lucide-react"

const applications = [
  {
    icon: Search,
    title: "Búsqueda Web",
    description: "Motores de búsqueda que entienden la intención del usuario y devuelven resultados relevantes."
  },
  {
    icon: Mic,
    title: "Asistentes Virtuales",
    description: "Sistemas como Siri, Alexa o Google Assistant que interactúan mediante voz."
  },
  {
    icon: Car,
    title: "Vehículos Autónomos",
    description: "Automóviles capaces de navegar y conducir sin intervención humana."
  },
  {
    icon: Stethoscope,
    title: "Diagnóstico Médico",
    description: "Sistemas que asisten a profesionales en la detección de enfermedades."
  },
  {
    icon: BarChart3,
    title: "Planificación Empresarial",
    description: "Herramientas de análisis predictivo y optimización de recursos."
  },
  {
    icon: MessageCircle,
    title: "Modelos de Lenguaje",
    description: "Sistemas como GPT que generan y comprenden texto de forma avanzada."
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
}

export function AIToday() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p 
        variants={itemVariants}
        className="mb-6 text-muted-foreground leading-relaxed"
      >
        La IA está presente en numerosas aplicaciones cotidianas que transforman 
        la forma en que vivimos y trabajamos.
      </motion.p>

      <motion.div 
        variants={containerVariants}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {applications.map((app) => (
          <motion.div
            key={app.title}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
              <app.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2 font-semibold text-card-foreground">
              {app.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {app.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
