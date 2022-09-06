import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Pagination from './components/Pagination/index'


function App() {
  return (
    <div className="container">
      <h1 className="display-4">Paginacion</h1>
      <Pagination />
    </div>
  );
}

export default App;
