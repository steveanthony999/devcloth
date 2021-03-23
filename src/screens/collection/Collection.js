import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shopSelectors';

import './collection.scss';

const Collection = ({ collection }) => {
  console.log(collection);

  return (
    <div className='collection'>
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
