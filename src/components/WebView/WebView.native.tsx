import React from 'react';
import { WebView as RNWebView } from 'react-native-webview';
import { styled } from '../../utils/styled';
import { Wrapper } from '../../utils/tags';

export const WebView = () => {
  return (
    <Container>
      <RNWebView source={{ uri: 'https://reactadvanced.com/' }} />
    </Container>
  );
};

const Container = styled(Wrapper)`
  flex: 1;
`;
