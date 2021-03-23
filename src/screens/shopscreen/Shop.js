import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview';

import Collection from '../collection/Collection';

import './shop.scss';

const Shop = ({ match }) => {
  return (
    <section id='shop'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </section>
  );
};

export default Shop;
