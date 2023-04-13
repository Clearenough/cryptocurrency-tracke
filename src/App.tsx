import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Info from './pages/Info/Info';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import './index.scss';
import Footer from './components/Footer/Footer';
import { BriefcaseContext } from './context/briefcaseContext';
import { CurrencyContext } from './context/currencyContext';
import { IBriefcaseInfo, ICurrencyInfo } from './@types/common';
import { useState } from 'react';

function App() {
  const [currencyInfo, setCurrencyInfo] = useState<ICurrencyInfo[]>([]);
  const [briefcaseInfo, setBriefcaseInfo] = useState<IBriefcaseInfo[]>([]);
  const [purchasePrice, setPurchasePrice] = useState<string>('');
  console.log(purchasePrice);

  return (
    <>
      <CurrencyContext.Provider
        value={{
          currencyInfo,
          setCurrencyInfo,
        }}
      >
        <BriefcaseContext.Provider
          value={{
            briefcaseInfo,
            setBriefcaseInfo,
            purchasePrice,
            setPurchasePrice,
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
        </BriefcaseContext.Provider>
      </CurrencyContext.Provider>
    </>
  );
}

export default App;
