import './App.css'
import ChangeBackground from './index.jsx'
import Navbar from './components/navbar.jsx'

function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="four">
            <h1 className="my-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cambia el color de fondo mientras escribes</h1>
          </div>
          <div className="flex flex-col">
            <div>
              <ChangeBackground />
            </div>
          </div>
        </div>
      </div>
    </>  
  )
}

export default App
