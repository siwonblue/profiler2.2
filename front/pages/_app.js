import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';
import 'antd/dist/antd.css';
import { GlobalStyle } from '../style/styled';

const App = ({ Component }) => (
  <>
    <GlobalStyle />
    <Head>
      <title>프로파일러</title>
    </Head>
    <Component />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
