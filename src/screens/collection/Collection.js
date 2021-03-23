import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shopSelectors';

import CollectionItem from '../../components/catalogue/collectionItem/CollectionItem';

import './collection.scss';

const Collection = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className='collection'>
      <h1 className='title util-medium-heading'>{title}</h1>
      <div className='container'>
        <div className='items'>
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
