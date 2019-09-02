/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: papayawhip;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

class App extends Component {
  render() {
    return (
       <StyledView>
         <StyledText>Hello World!</StyledText>
       </StyledView>
   );
  }
}

export default App;
