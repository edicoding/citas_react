import { useState, useEffect } from "react"
import { generarId } from "../helpers"

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

    const addPaciente = paciente => {
        paciente.id = generarId()
        setPacientes([...pacientes, paciente])
    }

    const editarPaciente = paciente => {
        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
            paciente.id ? paciente : pacienteState)
        setPacientes(pacientesActualizados)
    }

    const eliminarPaciente = id => {
        const pacientesActualizados = pacientes.filter(paciente =>
            paciente.id !== id)
        setPacientes(pacientesActualizados)
    }

    return {
        pacientes,
        addPaciente,
        editarPaciente,
        eliminarPaciente
    }
}

export default usePacientes