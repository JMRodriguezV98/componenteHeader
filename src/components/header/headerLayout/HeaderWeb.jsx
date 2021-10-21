import React from 'react';
import Icons from '../headerComponents/Icons';
import LogoText from '../headerComponents/LogoText';
import SearchField from '../headerComponents/SearchField';

const HeaderWeb = () => {

    const _header = {
        header:{
            width: '100vw',
            backgroundColor: 'white',
            height: '9vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            position:'fixed',
            zIndex:'1',
        }
    }

  return (
    <div>
        <div style = {_header.header}>
          <LogoText />
          <SearchField />
          <Icons />
        </div>
    </div>
  );
};

export default HeaderWeb;
