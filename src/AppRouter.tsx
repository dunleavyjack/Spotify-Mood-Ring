import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/Home/HomePage';
import { MoodPage } from './pages/Mood/MoodPage';

export const AppRouter = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mood" element={<MoodPage />} />
        </Routes>
    </BrowserRouter>
);
