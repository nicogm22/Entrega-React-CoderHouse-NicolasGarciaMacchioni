
import { Navbar } from "./components/layout/Navbar"
import {ItemListContainer} from "./components/pages/ItemListContainer"

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={ "Bienvenido a MAXStrong!"}/>
      
    </div>
  )
}

export default App
