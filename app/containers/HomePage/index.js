import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { loadTopStories } from 'containers/App/actions';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectStories,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Story from 'components/Story';
import saga from './saga';
import { Stories } from './styles';

class HomePage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      expandedIds: [],
    };
    this.toggleExpansion = this.toggleExpansion.bind(this);
  }

  componentDidMount() {
    this.props.loadTopStories();
  }

  toggleExpansion(storyId) {
    const { expandedIds: stateExpandedIds } = this.state;
    const expanded = stateExpandedIds.includes(storyId);
    let expandedIds = [];

    if (expanded) {
      expandedIds = stateExpandedIds.filter(stateStoryId => stateStoryId !== storyId);
    } else {
      expandedIds = [...stateExpandedIds, storyId];
    }
    this.setState({ expandedIds });
  }

  render() {
    const { expandedIds } = this.state;
    const { stories } = this.props;
    return (
      <Stories>
        {stories.map(story => (
          <Story
            key={story.id}
            expanded={expandedIds.includes(story.id)}
            toggleExpansion={this.toggleExpansion}
            {...story}
          />
        ))}
      </Stories>
    );
  }
}

HomePage.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired,
  })),
  loadTopStories: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadTopStories: () => dispatch(loadTopStories()),
  };
}

const mapStateToProps = createStructuredSelector({
  stories: makeSelectStories(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withSaga,
  withConnect,
)(HomePage);
