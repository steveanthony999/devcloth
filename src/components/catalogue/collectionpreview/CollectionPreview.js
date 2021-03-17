import CollectionItem from '../collectionItem/CollectionItem';
import './collectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview-container'>
      <h1 className='util-medium-heading'>{title}</h1>
      <div className='inner'>
        {items
          .filter((item, index) => index < 3)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
