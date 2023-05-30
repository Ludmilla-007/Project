import React, { useState } from 'react';
import style from './Navbar.css';
import Logo from '../../assets/logo.png';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NAvbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.box}>
          <div className={style.logo_image}>
            <img src={Logo} alt='/' />
          </div>
          <ul
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            }
          >
            <li>
              <a href='##'>Home</a>
            </li>
            <li>
              <a href='##'>Card List</a>
            </li>
            <li>
              <a href='##'>Game</a>
            </li>
            <li>
              <a href='##'>Contacts</a>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NAvbar;
