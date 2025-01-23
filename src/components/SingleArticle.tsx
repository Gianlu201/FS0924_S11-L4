import { Card, Col } from 'react-bootstrap';
import { Article } from '../types/Article';
import { useNavigate } from 'react-router-dom';

interface SingleArticleProps {
  article: Article;
}

const SingleArticle = (props: SingleArticleProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/details/' + props.article.id);
  };

  return (
    <>
      <Col xs={6} lg={4} xl={3} className='mb-4'>
        <Card
          style={{ width: '18rem', cursor: 'pointer' }}
          onClick={() => handleClick()}
        >
          <Card.Img
            variant='top'
            src={props.article.image_url}
            style={{ maxHeight: '150px' }}
          />
          <Card.Body>
            <Card.Title>{props.article.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text className='text-secondary fs-6 fw-medium'>
              Published on: {`${props.article.published_at}`.slice(0, -10)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleArticle;
