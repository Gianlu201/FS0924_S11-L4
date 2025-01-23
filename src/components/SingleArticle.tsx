import { Card, Col } from 'react-bootstrap';
import { Article } from '../types/Article';
import { useNavigate } from 'react-router-dom';
import '../../public/css/singleArticle.css';

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
          style={{ width: '18rem', minHeight: '375px', cursor: 'pointer' }}
          onClick={() => handleClick()}
        >
          <Card.Img
            variant='top'
            src={props.article.image_url}
            style={{ maxHeight: '150px' }}
          />
          <Card.Body className='d-flex flex-column position-relative'>
            <Card.Title className='article-title'>
              {props.article.title}
            </Card.Title>
            <Card.Text className='article-summary'>
              {props.article.summary}
            </Card.Text>
            <Card.Text className='article-pulication text-secondary fs-6 fw-medium'>
              Published on: {`${props.article.published_at}`.slice(0, -10)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleArticle;
