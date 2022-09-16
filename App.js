
import './App.css';
import './custom.css';
import {
  BrowserRouter,
  Routes,Route,
  Link
} from 'react-router-dom'; ''
// import RestaurantList from './components/RestaurantList';
// import Home from "./components/Home"
// import RestaurantCreate from "./components/RestaurantCreate"
// import RestaurantDetail from "./components/RestaurantDetail"
// import RestaurantList from "./components/RestaurantList"
// import RestaurantSearch from "./components/RestaurantSearch"
// import RestaurantUpdate from "./components/RestaurantUpdate"
function App() {
  
  return (
   
  
    <BrowserRouter>
    
       <Link to='/'>Home</Link>
        <br></br>
        <Link to='/Create'>Create</Link>
        <br></br>
        <Link to='/detail'>Detail</Link>
        <br></br>
        <Link to='/list'>List</Link>
        <br></br>
        <Link to='/Search'>Search</Link>
        <br></br>
        <Link to='/Update'>Update</Link>
        <br></br>
        <br></br>
       <Routes>
     
      <Route path="/Create" element={<div>RestaurantCreate</div>} />
        <Route path="/detail" element={<div>RestaurantDetail</div>} />
        <Route path="/list" element={<div>RestaurantList</div>} />
        <Route path="/Search" element={<div>RestaurantSearch</div>} />
        <Route exact path="/Update" element={<div>RestaurantUpdate</div>} />
        <Route path="/" element={<div>Home</div>}/>
    

    </Routes>
    </BrowserRouter>
  );
}

export default App


