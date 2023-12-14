import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './component/Footer';
import { Header } from './component/Header';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<ListEmployeeComponent></ListEmployeeComponent>}></Route>
        <Route path='/Create' element={<CreateEmployeeComponent></CreateEmployeeComponent>}></Route>
        <Route path='/Update' element={<UpdateEmployeeComponent></UpdateEmployeeComponent>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
