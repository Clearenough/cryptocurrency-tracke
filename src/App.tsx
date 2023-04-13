import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Info from './pages/Info/Info';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import './index.scss';
import Footer from './components/Footer/Footer';
import { BriefcaseContext } from './context/briefcaseContext';
import { CurrencyContext } from './context/currencyContext';
import { ICurrencyInfo } from './@types/common';
import { useState } from 'react';

function App() {
  const [currencyInfo, setCurrencyInfo] = useState<ICurrencyInfo[]>([]);

  return (
    <>
      <CurrencyContext.Provider
        value={{
          currencyInfo,
          setCurrencyInfo,
        }}
      >
        <Header />
        <section>
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
      </CurrencyContext.Provider>
    </>
  );
}

export default App;
