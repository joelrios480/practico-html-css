/* Historial de sesiones "hardcodeado" indexado por CI del paciente */
const HISTORIAL_SESIONES = {
  5234891: {
    nombre: "Juan Rodríguez",
    ci: "5234891",
    diagnostico: "Tendinitis de hombro",
    sesiones: [
      {
        fecha: "30/08/2026",
        estado: "Realizada",
        duracion: "45 min",
        actividades: "Electroterapia (TENS) y estiramientos de manguito rotador",
        fisioterapeuta: "Lic. Fernando Rojas",
      },
      {
        fecha: "02/09/2026",
        estado: "No realizada",
        duracion: "—",
        actividades: "Paciente no asistió",
        fisioterapeuta: "Lic. Fernando Rojas",
      },
      {
        fecha: "04/09/2026",
        estado: "Reprogramada",
        duracion: "—",
        actividades: "Reprogramada por disponibilidad del fisioterapeuta",
        fisioterapeuta: "Lic. Fernando Rojas",
      },
    ],
  },
  7845632: {
    nombre: "Lucía Fernández",
    ci: "7845632",
    diagnostico: "Hernia discal L4-L5",
    sesiones: [
      {
        fecha: "26/08/2026",
        estado: "Realizada",
        duracion: "60 min",
        actividades: "Terapia manual y ejercicios de estabilización lumbar",
        fisioterapeuta: "Lic. Patricia Vargas",
      },
      {
        fecha: "29/08/2026",
        estado: "Realizada",
        duracion: "60 min",
        actividades: "Calor local y ejercicios de McKenzie",
        fisioterapeuta: "Lic. Patricia Vargas",
      },
      {
        fecha: "01/09/2026",
        estado: "Realizada",
        duracion: "50 min",
        actividades: "Fortalecimiento de core y estiramientos",
        fisioterapeuta: "Lic. Patricia Vargas",
      },
    ],
  },
  2987341: {
    nombre: "Pedro Sánchez",
    ci: "2987341",
    diagnostico: "Fractura de muñeca en recuperación",
    sesiones: [
      {
        fecha: "04/09/2026",
        estado: "Reprogramada",
        duracion: "—",
        actividades: "Reprogramada a solicitud del paciente",
        fisioterapeuta: "Lic. Andrés Quispe",
      },
    ],
  },
  4521678: {
    nombre: "María Gómez",
    ci: "4521678",
    diagnostico: "Lumbalgia crónica",
    sesiones: [
      {
        fecha: "28/08/2026",
        estado: "Realizada",
        duracion: "40 min",
        actividades: "Electroterapia y masoterapia lumbar",
        fisioterapeuta: "Lic. Patricia Vargas",
      },
      {
        fecha: "31/08/2026",
        estado: "Realizada",
        duracion: "40 min",
        actividades: "Ejercicios de Williams y estiramientos",
        fisioterapeuta: "Lic. Fernando Rojas",
      },
      {
        fecha: "03/09/2026",
        estado: "No realizada",
        duracion: "—",
        actividades: "Paciente canceló por motivos de salud",
        fisioterapeuta: "Lic. Fernando Rojas",
      },
    ],
  },
};
