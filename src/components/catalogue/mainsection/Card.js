import './card.scss';

const Card = ({ title, image }) => {
  return (
    <div className='card-wrapper'>
      <div
        className='main-section-card'
        style={{ background: `url(${image}) no-repeat center center/cover` }}
      />
      <div className='overlay'></div>
      <div className='content'>
        <div className='card-title util-small-heading'>{title}</div>
      </div>
    </div>
  );
};

export default Card;
