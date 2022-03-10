import styled from 'styled-components/native';
import { primary } from '../../styles/colors';

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: white;
`;

export const View = styled.View`
  flex: 1;
  background-color: ${primary};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: palevioletred;
`;
