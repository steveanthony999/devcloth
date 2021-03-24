import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shopActions';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase';

import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview';

import Collection from '../collection/Collection';

import './shop.scss';

const Shop = ({ match, updateCollections }) => {
  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });

    return () => collectionRef;
  }, []);

  return (
    <section id='shop'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
