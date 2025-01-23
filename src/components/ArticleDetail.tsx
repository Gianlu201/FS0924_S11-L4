import { useEffect, useState } from 'react';
import { Alert, Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Article } from '../types/Article';

const URL = 'https://api.spaceflightnewsapi.net/v4/articles/';

const ArticleDetail = () => {
  const [article, setArticle] = useState<Article>();
  const [errorMessage, setErrorMessage] = useState('');

  const params = useParams();

  const getArticle = async () => {
    try {
      const response = await fetch(URL + params.articleId);
      if (response.ok) {
        const data = await response.json();
        setArticle(data);
      } else {
        throw new Error('Errore recupero dati');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    getArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className='pt-4 pb-5 mb-5'>
      {article && errorMessage === '' ? (
        <Row>
          <Col xs={12}>
            <Image
              src={article?.image_url}
              alt='article picture'
              className='w-100'
            />
            <span className='d-block text-end text-secondary h6 pt-1'>
              Published at: {`${article?.published_at}`.slice(0, -10)}
            </span>
          </Col>
          <Col xs={12} className='mt-3'>
            <h3>{article?.title}</h3>
            <p className='fw-semibold text-secondary'>
              {article?.authors[0].name}
            </p>
            <p>{article?.summary}</p>
            <a href={article?.url} target='_blank'>
              Discover more
            </a>
          </Col>
        </Row>
      ) : errorMessage === '' ? (
        <Spinner animation='border' variant='info' />
      ) : (
        <Alert variant='danger'>{errorMessage}</Alert>
      )}
    </Container>
  );
};

export default ArticleDetail;
