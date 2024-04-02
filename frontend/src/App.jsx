import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import CreateCustomer from "./pages/CreateCustomers";
import ShowBook from "./pages/ShowBook";
import ShowCustomer from "./pages/ShowCustomer";
import EditBook from "./pages/EditBook";
import EditCustomer from "./pages/EditCustomer";
import DeleteBook from "./pages/DeleteBook";
import DeleteCustomer from "./pages/DeleteCustomer";
import AllBooks from "./pages/AllBooks";
import AllCustomers from "./pages/AllCustomers";
import CreatePurchase from "./pages/CreatePurchases";
import ShowPurchase from "./pages/ShowPurchase";
import EditPurchase from "./pages/EditPurchase";
import AllPurchases from "./pages/AllPurchases";
import DeletePurchase from "./pages/Deletepurchase";
import CreateAuthor from "./pages/CreateAuthors";
import ShowAuthor from "./pages/ShowAuthor";
import EditAuthor from "./pages/EditAuthor";
import AllAuthors from "./pages/AllAuthors";
import DeleteAuthor from "./pages/DeleteAuthor";
import CreateStationary from "./pages/CreateStationary";
import ShowStationary from "./pages/ShowStationary";
import EditStationary from "./pages/EditStationary";
import AllStationary from "./pages/AllStationary";
import DeleteStationary from "./pages/DeleteStationary";


const App = () =>{
  return (
    <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path = '/books/create' element ={<CreateBook/>}/>
      <Route path = '/customers/create' element ={<CreateCustomer/>}/>
      <Route path = '/books/details/:id' element ={<ShowBook/>}/>
      <Route path = '/customers/details/:id' element ={<ShowCustomer/>}/>
      <Route path = '/books/edit/:id' element ={<EditBook/>}/>
      <Route path = '/customers/edit/:id' element ={<EditCustomer/>}/>
      <Route path = '/books/delete/:id' element ={<DeleteBook/>}/>
      <Route path = '/customers/delete/:id' element ={<DeleteCustomer/>}/>
      <Route path = '/books' element ={<AllBooks/>}/>
      <Route path = '/customers' element ={<AllCustomers/>}/>
      <Route path = '/purchases/create' element ={<CreatePurchase/>}/>
      <Route path = '/purchases/details/:id' element ={<ShowPurchase/>}/>
      <Route path = '/purchases/edit/:id' element ={<EditPurchase/>}/>
      <Route path = '/purchases' element ={<AllPurchases/>}/>
      <Route path = '/purchases/delete/:id' element ={<DeletePurchase/>}/>
      <Route path = '/authors/create' element ={<CreateAuthor/>}/>
      <Route path = '/authors/details/:id' element ={<ShowAuthor/>}/>
      <Route path = '/authors/edit/:id' element ={<EditAuthor/>}/>
      <Route path = '/authors' element ={<AllAuthors/>}/>
      <Route path = '/authors/delete/:id' element ={<DeleteAuthor/>}/>
      <Route path = '/Stationary/create' element ={<CreateStationary/>}/>
      <Route path = '/Stationary/details/:id' element ={<ShowStationary/>}/>
      <Route path = '/Stationary/edit/:id' element ={<EditStationary/>}/>
      <Route path = '/Stationary' element ={<AllStationary/>}/>
      <Route path = '/Stationary/delete/:id' element ={<DeleteStationary/>}/>
      







    </Routes>
  );
}
export default App