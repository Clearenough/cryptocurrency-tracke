import { Navigate, Route, Routes } from 'react-router-dom';
import Info from './pages/Info/Info';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to={'/404'} />} />
      </Routes>
    </div>
  );
}

export default App;
