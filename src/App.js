import './App.css';
import ConceptosBasicos from './components/ConceptosBasicos';
import MenuConceptos from './pagesLuka/MenuConceptos';

function App() {
  return (
		<div className='grid-1-1'>
      <h1>Ejercicios React</h1>
			<h2>React Router</h2>
			<a href='https://reactrouter.com/docs/en/v6/getting-started/tutorial' target='_blank' rel='noreferrer'>
        <button className='boton'>
          Documentacion
        </button>
			</a>
      <MenuConceptos />
      <ConceptosBasicos />
		</div>
	);
}

export default App;
