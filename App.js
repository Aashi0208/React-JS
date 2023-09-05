import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Todolist from './Todo/Todolist';
import Count from './counter';
import Imgsearch from './Imgsearch';
import Report from './Weather/WeatherReport';
import SearchWeather from './Component/searchWeather';
import Api from './Api';
function App() {
  return( 
      <BrowserRouter>
      <nav>
        <Link to ="/count">Count</Link><br></br>
        <Link to ="/todo">Todo</Link><br></br>
        <Link to ="/Imgsearch">Imgsearch</Link><br></br>
        <Link to ="/WeatherReport">WeatherReport</Link><br></br>
        <Link to ="/SearchWeather">SearchWeather</Link><br></br>
        <Link to ="/Api">Api</Link>

      </nav>
      <Routes>
         <Route path="count"     element={<Count></Count>}></Route>
         <Route path="todo"      element={<Todolist></Todolist>}></Route>
         <Route path="Imgsearch" element={<Imgsearch></Imgsearch>}></Route>
         <Route path="WeatherReport"   element={<Report></Report>}></Route>
         <Route path="SearchWeather"   element={<SearchWeather></SearchWeather>}></Route>
         <Route path="Api"   element={<Api></Api>}></Route>
      </Routes>
      </BrowserRouter>
  );
}
export default App;
