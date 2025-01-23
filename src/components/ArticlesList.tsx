import { useEffect, useState } from 'react';
import { Article } from '../types/Article';
import { Container, Row } from 'react-bootstrap';
import SingleArticle from './SingleArticle';

const URL = 'https://api.spaceflightnewsapi.net/v4/articles';

const ArticlesList = () => {
  const [articles, setArticles] = useState<Article[]>([]);

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
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Container className='pt-5'>
        <Row>
          {articles.map((article) => {
            return <SingleArticle article={article} key={article.id} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default ArticlesList;
