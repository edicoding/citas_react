import { useState, useEffect } from "react"

const usePacientes = () => {

    const [pacientes, setPacientes] = useState([])

    useEffect(() => {
        const obtenerLS = () => {
            const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
            setPacientes(pacientesLS)
        }
        obtenerLS()
    }, [])

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }, [pacientes])

    const eliminarPaciente = id => {
        const pacientesActualizados = pacientes.filter(paciente =>
            paciente.id !== id)
        setPacientes(pacientesActualizados)
    }

    return {
        pacientes,
        setPacientes,
        eliminarPaciente
    }
}

export default usePacientes