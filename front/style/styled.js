import styled, { createGlobalStyle } from 'styled-components';
import { Input } from 'antd';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  html {
    background: white;
    min-width: 361px;
    max-width: 375px;
    height: 100%;
    font-size: 10.416px;
    padding: 0;
    position: relative;
    z-index: -1;
    box-sizing: border-box;
    margin: auto;
    background: -moz-radial-gradient(center, #2D2C3C 0%, #232330 35%, #191925 100%);
    background: -webkit-radial-gradient(center, #2D2C3C 0%, #232330 35%, #191925 100%);
    background: radial-gradient(ellipse at center, #2D2C3C 0%, #232330 35%, #191925 100%);
  }

  body {
    font-family: Montserrat, "Noto Sans KR", sans-serif;
    font-size: 1rem;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    //border: 1px solid #2D2C3CFF;
    background: #2D2C3C;
    background: -moz-radial-gradient(center, #2D2C3C 0%, #232330 35%, #191925 100%);
    background: -webkit-radial-gradient(center, #2D2C3C 0%, #232330 35%, #191925 100%);
    background: radial-gradient(ellipse at center, #2D2C3C 0%, #232330 35%, #191925 100%);
    -webkit-box-shadow: -10px 0 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 9px 0px rgba(255, 255, 255, 0.13);
    box-shadow: -10px 0 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 9px 0px rgba(255, 255, 255, 0.13);
  }

  h1 {
    margin: 0;
    color: #FFFFFF;
    font-size: 2.5rem;
  }

  h2 {
    margin: 0;
    color: #FFFFFF;
    font-size: 2rem;
  }

  h3 {
    margin: 0;
    color: #FFFFFF;
    font-size: 1.5rem;
  }

  h4 {
    margin: 0;
    color: #FFFFFF;
    font-size: 1.25rem;
  }

  h5 {
    margin: 0;
    color: #FFFFFF;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

`;

export const DivChildren = styled.div`
  background: #2d2c3c;
  background: -moz-radial-gradient(center, #2d2c3c 0%, #232330 35%, #191925 100%);
  background: -webkit-radial-gradient(center, #2d2c3c 0%, #232330 35%, #191925 100%);
  background: radial-gradient(ellipse at center, #2d2c3c 0%, #232330 35%, #191925 100%);
  -webkit-box-shadow: -10px 0 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 9px 0px rgba(255, 255, 255, 0.13);
  box-shadow: -10px 0 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 9px 0px rgba(255, 255, 255, 0.13);
  padding: 2rem;
  height: ${(props) => props.height || '100vh'};
`;

export const topRow = {
  height: '3.2rem',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottom: '1px solid #2d2c3c',
  display: 'flex',
  color: '#FFFFFF',
};

export const bottomRow = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'fixed',
  bottom: '0px',
  width: '100%',
  height: '6.4rem',
  maxWidth: '36rem',
  zIndex: '100',
  padding: '0px 1.2rem',
  background: '#181A26',
  WebkitBoxShadow: '0px -10px 49px 0px rgba(0,0,0,0.88)',
  boxShadow: '0px -10px 49px 0px rgba(0,0,0,0.88)',
};

export const DrawWrapper = {
  position: 'relative',
  overflow: 'hidden',
};

export const drawerStyle = {
  background: '#181A26',
  border: 'none',
  paddingTop: '3rem',
};

export const drawerHeaderStyle = {
  borderBottomRightRadius: '2rem',
  borderBottomLeftRadius: '2rem',
  borderBottom: 'none',
  textAlign: 'center',
  background: '#FB6580',
};
export const LocalInput = styled(Input)`
  border: none;
  padding: 1.5rem;
  color: ${(props) => props.color || '#ffffff'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  opacity: ${(props) => props.opacity || '100%'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '1.5rem'};
  background-color: ${(props) => props.backgroundColor || '#0b0b15'};

  &:hover {
    background: #0b0b15;
    outline: none;
  }

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

export const IntroText = styled.textarea`
  background-color: #0b0b15;
  border: none;
  padding: 1.5rem;
  color: ${(props) => props.color || '#ffffff'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  opacity: ${(props) => props.opacity || '100%'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '1.5rem'};

  &:hover {
    background: #0b0b15;
    outline: none;
  }

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

export const TagText = styled.textarea`
  background-color: #0b0b15;
  border: none;
  padding: 1.5rem;
  color: ${(props) => props.color || '#ffffff'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  opacity: ${(props) => props.opacity || '100%'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '1.5rem'};

  &:hover {
    background: #0b0b15;
    outline: none;
  }

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;
export const TagSpan = styled.div`
  color: #ffffff;
  border: 1px solid #716f88;
  background: #716f88;
  border-radius: 1rem;
  padding: 0.25rem 0.8rem;
`;
export const rowStyle = {
  marginBottom: '1.5rem',
};
export const rowStyle1 = {
  marginBottom: '2rem',
  height: '27vh',
};
export const rowStyle2 = {
  marginBottom: '2rem',
  height: '30vh',
};

export const ImageStyle = {
  width: '7.2rem',
  borderRadius: '50%',
  boxSizing: 'border-box',
  objectFit: 'cover',
  height: '7.2rem',
  border: 'none',
  // marginBottom: "0.6rem",
  WebkitBoxShadow: '0px -10px 49px 0px rgba(0,0,0,0.88)',
  boxShadow: '0px -10px 49px 0px rgba(0,0,0,0.88)',
};
export const ImageStyle0 = {
  width: '20rem',
  borderRadius: '50%',
  boxSizing: 'border-box',
  objectFit: 'cover',
  height: '20rem',
  border: 'none',
  // marginBottom: "0.6rem",
  WebkitBoxShadow: '0px -10px 49px 0px rgba(0,0,0,0.88)',
  boxShadow: '0px -10px 49px 0px rgba(0,0,0,0.88)',
};

// 프로필 생성 및 편집 페이지에 들어가는 애들

export const ImageStyle2 = {
  width: '6rem',
  borderRadius: '50%',
  boxSizing: 'border-box',
  objectFit: 'cover',
  height: '6rem',
  border: 'none',
  WebkitBoxShadow: '0px -10px 49px 0px rgba(0,0,0,0.88)',
  boxShadow: '0px -10px 49px 0px rgba(0,0,0,0.88)',
};
// 프로필 카드에 들어가는 애들

export const ImageStyle3 = {
  width: '4rem',
  borderRadius: '50%',
  boxSizing: 'border-box',
  objectFit: 'cover',
  height: '4rem',
  border: 'none',
  WebkitBoxShadow: '0px -10px 49px 0px rgba(0,0,0,0.88)',
  boxShadow: '0px -10px 49px 0px rgba(0,0,0,0.88)',
  marginRight: '1rem',
};
// Liker toast 에 들어가는

export const ImageStyle4 = {
  width: '4rem',
  borderRadius: '50%',
  boxSizing: 'border-box',
  objectFit: 'cover',
  height: '4rem',
  border: 'none',
  WebkitBoxShadow: '0px -10px 49px 0px rgba(0,0,0,0.88)',
  boxShadow: '0px -10px 49px 0px rgba(0,0,0,0.88)',
  marginRight: '1rem',
};
// liking maping 에 들어가는

export const ImageStyle5 = {
  width: '7.2rem',
  borderRadius: '50%',
  boxSizing: 'border-box',
  objectFit: 'cover',
  height: '7.2rem',
  border: 'none',
};
// renderOther 에 들어가는 애들

export const ImageStyle6 = {
  width: '4rem',
  borderRadius: '50%',
  boxSizing: 'border-box',
  objectFit: 'cover',
  height: '4rem',
  border: 'none',
};
// 추천에 들어가는 애들

export const ProfileCardStyle = {
  background: 'black',
  width: '100%',
};
// liking maping 에 들어가는

export const Search = {
  height: '10vh',
  border: '1px solid ',
  display: 'flex',
};

export const SearchHeader = {
  height: '18vh',
  border: '1px solid yellow ',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const tagStyle = {
  background: '#716F88',
  color: '#ffffff',
  padding: '2px 15px 2px 15px',
  borderRadius: '20px',
  margin: '10px',
  cursor: 'pointer',
};
