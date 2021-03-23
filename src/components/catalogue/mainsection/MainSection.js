import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../../redux/directory/directorySelectors';

import Card from './Card';
import './mainSection.scss';

const MainSection = ({ sections }) => {
  return (
    <section id='main-section'>
      {sections.map(({ id, ...rest }) => (
        <Card key={id} {...rest} />
      ))}
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(MainSection);
