import NavBar from './Components/NavBar';
import { NominaEmpleados } from './Components/NominaEmpleados';
import { AllUsers } from './Components/AllUsers';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import { NotFound } from './Components/NotFound';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
   <NavBar />

   <Routes>
   <Route path="/" element={<NominaEmpleados/>} />
   <Route path="/all" element={<AllUsers/>}/>
   <Route path="/add" element={<AddUser/>}/>
   <Route path="/edit/:id" element={<EditUser/>}/>
   <Route path="*" element={<NotFound/>}/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
