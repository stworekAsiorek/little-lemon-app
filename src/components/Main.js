import {Routes, Route, useNavigate } from "react-router-dom";
import './Main.css'
import HomePage from './homePage/HomePage'
import BookingPage from './bookingPage/BookingPage'
import React, {useReducer} from 'react'
import { fetchAPI, submitAPI } from "../scripts/api";
import ConfirmedBooking from "./confirmedBooking/ConfirmedBooking";

const updateTimes = (state, action) =>{
  const availableTimes = fetchAPI(action.date);
  return {date: action.date, availableTimes: availableTimes}
}

const initializeTimes = () => {
  const today = new Date();
  const availableTimes = fetchAPI(today);
  return { date: today, availableTimes: availableTimes }
}

function Main() {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes())
    const navigate = useNavigate();

    const submitForm = (formdata) => {
      if(submitAPI(formdata)){
        navigate("/confirmed-booking");
      }
    }

    return (
        <main>
            <Routes> 
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/booking" element={<BookingPage state={state} dispatch={dispatch} submitForm={submitForm}/>}></Route>
              <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    );
  }

export default Main;
export {initializeTimes, updateTimes};