import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';
import 'antd/dist/antd.css';
import { GlobalStyle } from '../style/styled';
import initGA from '../lib/ga';

const App = ({ Component }) => {
  useEffect(() => {
    initGA(process.env.GA_APP_ID, Router);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>프로파일러</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
