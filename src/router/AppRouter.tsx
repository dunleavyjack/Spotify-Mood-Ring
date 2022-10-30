import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/global.css';
import Navbar from '../components/Navbar/Navbar';
import HomePage from '../pages/HomePage/HomePage';
import AnalyzingPage from '../pages/AnalyzingPage/AnalyzingPage';
import MoodPage from '../pages/MoodPage/MoodPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import SpotifyRedirect from '../pages/SpotifyRedirect/SpotifyRedirect';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const AppRouter: React.FC = () => (
    <BrowserRouter>
        <div className="page-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/analyzing" element={<AnalyzingPage />} />
                <Route path="/mood" element={<MoodPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/redirect" element={<SpotifyRedirect />} />
                <Route path="/error" element={<ErrorPage />} />
            </Routes>
        </div>
    </BrowserRouter>
);

export default AppRouter;
