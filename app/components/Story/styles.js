import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: calc(33.3333% - 2rem);
  height: 150px;
  margin: 1rem;
  padding: 10px;
  background: #E0E0E0;
  cursor: pointer;
  
  ${props => props.expanded && css`
    background: #F6DDBC;
    flex-basis: calc(45.6666% - 2rem);
  `}
`;

export const Icon = styled.div`
  flex: 1;
`;

export const IconText = styled.div`
  font-size: 10px;
  margin-left: 3px;
`;

export const Details = styled.div`
  flex: 8;
`;

export const Title = styled.div`
  font-weight: bold;
  ${props => !props.expanded && css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `}
`;

export const Author = styled.div`
  font-size: 12px;
  color: #888787;
`;

export const Text = styled.div`
  font-size: 14px;
  margin: 7px 0;
  color: darkslategray;
  ${props => !props.expanded && css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `}
`;
