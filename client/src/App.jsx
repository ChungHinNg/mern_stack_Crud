/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Corrected import path for Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Corrected import path for Bootstrap JS
import './App.css';
import UserTable from './Table/UserTable';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payroll from './Table/Payroll2.jsx';
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <>
      <Toaster></Toaster>
      
      <Router><Routes>
        <Route path="/" element={<UserTable />}></Route>
        <Route path="/payroll" element={<Payroll />}></Route>
        </Routes></Router>
    </>
  );
}
