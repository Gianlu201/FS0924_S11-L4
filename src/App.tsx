import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticlesList from './components/ArticlesList';
import ArticleDetail from './components/ArticleDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />

      <Routes>
        <Route path='/' element={<ArticlesList />} />
        <Route path='/details/:articleId' element={<ArticleDetail />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
