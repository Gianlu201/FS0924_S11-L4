import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticlesList from './components/ArticlesList';
import ArticleDetail from './components/ArticleDetail';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />

      <Routes>
        <Route path='/' element={<ArticlesList />} />
        <Route path='/details/:articleId' element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
