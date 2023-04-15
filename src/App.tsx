import { Navigate, Route, Routes } from 'react-router-dom';
import './localization/i18n';

import Info from './pages/Info/Info';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppContextProviders from './components/Context/AppContextProviders';

import './index.scss';

function App() {
  return (
    <AppContextProviders>
      <Header />
      <section className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/info/:id" element={<Info />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to={'/404'} />} />
          </Routes>
        </div>
      </section>
      <Footer />
    </AppContextProviders>
  );
}

export default App;
