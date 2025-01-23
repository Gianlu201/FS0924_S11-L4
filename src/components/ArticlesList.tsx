import { useEffect, useState } from 'react';
import { Article } from '../types/Article';
import { Alert, Container, Row, Spinner } from 'react-bootstrap';
import SingleArticle from './SingleArticle';

const URL = 'https://api.spaceflightnewsapi.net/v4/articles/?limit=20';

const ArticlesList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getArticles = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setArticles(data.results);
      } else {
        throw new Error('Errore nel recupero dati');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Container className='pt-5 mb-5'>
        <Row>
          {articles.length === 0 && errorMessage === '' && (
            <Spinner animation='border' variant='info' />
          )}

          {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}

          {articles.map((article) => {
            return <SingleArticle article={article} key={article.id} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default ArticlesList;
