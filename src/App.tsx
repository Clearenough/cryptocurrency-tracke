import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Info from './pages/Info/Info';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import './index.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <body>
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/info/:id" element={<Info />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to={'/404'} />} />
          </Routes>
        </div>
      </body>
    </div>
  );
}

export default App;
