import { withRouter } from 'react-router-dom';
import './card.scss';

const Card = ({ title, imageUrl, history, linkUrl, match }) => {
  return (
    <div
      className='card-wrapper'
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='main-section-card'
        style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
      />
      <div className='overlay'></div>
      <div className='content'>
        <div className='card-title util-small-heading'>{title}</div>
      </div>
    </div>
  );
};

export default withRouter(Card);
