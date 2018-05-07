import React from 'react';
import PropTypes from 'prop-types';
import UpIcon from './up-icon.svg';
import { Wrapper, Icon, IconText, Details, Title, Author, Text } from './styles';

const Story = ({ id, title, by: author, toggleExpansion, expanded }) => (
  <Wrapper onClick={() => toggleExpansion(id)} expanded={expanded}>
    <Icon>
      <img alt="Score" src={UpIcon} style={{ width: 32, height: 32 }} />
      <IconText>Score</IconText>
    </Icon>
    <Details>
      <Title expanded={expanded}>{title}</Title>
      <Author>{author}</Author>
      <Text expanded={expanded}>{title} {title} {title}</Text>
    </Details>
  </Wrapper>
);

Story.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  toggleExpansion: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default Story;
