import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Main.css'
import HomePage from './HomePage'
import BookingPage from './BookingPage'
import React from 'react'

function Main() {
    return (
        <main>
          <BrowserRouter>
            <Routes> 
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
          </BrowserRouter>
        </main>
    );
  }

export default Main;