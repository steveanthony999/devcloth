import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../catalogue/collectionpreview/CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

import './collectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
