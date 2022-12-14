import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Municipality from "./views/Municipality";
import People from "./views/People";
import Login from "./views/Login";
import PeopleRegister from "./views/PeopleRegister";
import MuniRegister from "./views/MuniRegister";
import PeopleDashboard from "./views/PeopleDashboard";
import NotFound from "./views/NotFound";
import Forgot from "./views/Forgot";
import Footer from "./components/Footer";
import User from "./views/User";
import UserAdmin from "./views/UserAdmin";
import UserMuni from "./views/UserMuni";
import UserPeople from "./views/UserPeople";
import Map from "./views/sideviews/Map";
import Report from "./views/sideviews/Report";
import Edit from "./views/sideviews/Edit";
import List from "./views/sideviews/List";
import Mod from "./views/sideviews/Mod";
import Profile from "./views/sideviews/Profile";
import Settings from "./views/sideviews/Settings";

const App = ({ copyright }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/municipality" element={<Municipality />} />
        <Route path="/municipality/register" element={<MuniRegister />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/register" element={<PeopleRegister />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/change/password" element={<Forgot />} />
        <Route path="/people/dashboard" element={<PeopleDashboard />} />
      </Routes>
      <Footer footer={copyright} />
    </BrowserRouter>
  );
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/municipality" element={<Municipality />} />
                <Route path="/municipality/register" element={<MuniRegister />} />
                <Route path="/people" element={<People />} />
                <Route path="/people/register" element={<PeopleRegister />} />
                <Route path="/change/password" element={<Forgot />} />
                <Route path="/user">
                    <Route index element={<User/>} />
                    <Route path="admin" element={<UserAdmin />}>
                        <Route path="map" element={<Map/>}/>
                        <Route path="report" element={<Report/>}/>
                        <Route path="edit" element={<Edit/>}/>
                        <Route path="list" element={<List/>}/>
                        <Route path="mod" element={<Mod/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="settings" element={<Settings/>}/>
                    </Route>
                    <Route path="municipality" element={<UserMuni />} />
                    <Route path="people" element={<UserPeople />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer footer={copyright} />
        </BrowserRouter>
    );
};

export default App;
