import { Routes, Route } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import LandingPage from './pages/LandingPage';
import BookingPage from './pages/BookingPage';

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Route>
    </Routes>
  );
}
