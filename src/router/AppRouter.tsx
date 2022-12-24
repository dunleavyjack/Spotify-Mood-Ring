import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/global.css';
import Navbar from '../components/Navbar/Navbar';
// import { HomePage } from '../pages/HomePage/HomePage';
import AnalyzingPage from '../pages/AnalyzingPage/AnalyzingPage';
import MoodPage from '../pages/MoodPage/MoodPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import SpotifyRedirect from '../pages/SpotifyRedirect/SpotifyRedirect';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PageContainer from '../components/PageContainer/PageContainer';
import Home from '../newPages/home/Home';
import Welcome from '../newPages/welcome/Welcome';

const AppRouter: React.FC = () => (
    <BrowserRouter>
        <PageContainer>
            <Navbar />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/analyzing" element={<AnalyzingPage />} />
                <Route path="/mood" element={<MoodPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/redirect" element={<SpotifyRedirect />} />
                <Route path="/error" element={<ErrorPage />} />
            </Routes>
        </PageContainer>
    </BrowserRouter>
);

export default AppRouter;
