import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import usePacientes from './hooks/usePacientes'

function App() {
	const { pacientes, addPaciente, editarPaciente, eliminarPaciente } =
		usePacientes()
	const [paciente, setPaciente] = useState({})

	return (
		<div className='container mx-auto mt-20'>
			<Header />

			<div className='mt-12 md:flex'>
				<Formulario
					pacientes={pacientes}
					addPaciente={addPaciente}
					editarPaciente={editarPaciente}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	)
}

export default App
