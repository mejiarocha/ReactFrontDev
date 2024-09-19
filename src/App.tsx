import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemList } from "./components/ItemList"
import { NewEmployee } from "./components/NewEmployee"
import { EditEmployee } from "./components/EditEmployee"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ItemList/>} />
      <Route path="/NewEmploye" element={<NewEmployee/>} />
      <Route path="/EditEmployee/:id" element={<EditEmployee/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
