import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ListedItems from './pages/ListedItems';
import DetailedItem from './pages/DetailedItem';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';
import Payment from './pages/Payment';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/items" element={<ListedItems />} />
        <Route path="/items/:id" element={<DetailedItem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
