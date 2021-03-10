import './collectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <div>
        {items
          .filter((item, index) => index < 3)
          .map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
