import type { ProcessStep } from "../types"

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Analysis",
    description:
      "We study consumption, orientation, and available surface to know whether the project makes sense before proposing anything.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We size panels, inverters, and, where it applies, storage, with a production and savings simulation specific to the project.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Structure, module, and wiring assembly by our own crew, with quality control at every stage of the process.",
  },
  {
    number: "04",
    title: "Commissioning",
    description:
      "Connection, performance testing, and verification of every parameter before handing over a fully operational system.",
  },
  {
    number: "05",
    title: "Monitoring",
    description:
      "Tracking actual production against the estimate from day one, with alerts for any significant deviation.",
  },
  {
    number: "06",
    title: "Optimization",
    description:
      "Periodic configuration adjustments and preventive maintenance to sustain performance across the system's full service life.",
  },
]
