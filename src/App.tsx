import { Navigate, Route, Routes } from 'react-router-dom';
import './localization/i18n';

import Info from './pages/Info/Info';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppContextProviders from './components/Context/AppContextProviders';

import './index.scss';
import { ROUTE } from './@constants/routes';

function App() {
  return (
    <AppContextProviders>
      <Header />
      <section className="section">
        <div className="container">
          <Routes>
            <Route path={ROUTE.MAIN} element={<Main />} />
            <Route path={ROUTE.INFO} element={<Info />} />
            <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
            <Route path={ROUTE.ANY} element={<Navigate to={ROUTE.NOT_FOUND} />} />
          </Routes>
        </div>
      </section>
      <Footer />
    </AppContextProviders>
  );
}

export default App;
