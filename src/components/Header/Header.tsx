import React, { FC } from 'react';
import styles from './Header.module.css';
import lotus from '../../assets/img/lotus.svg';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header}>
   <header className="bg-gradient-dark">
    <div className="page-header min-vh-75 bg-primary" >
      <span className="mask bg-gradient-primary opacity-6"></span>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center mx-auto my-auto">
            <img src={lotus} width={77} height="auto" />
            <h1 className="text-white mb-2">Dhammapada</h1>
            <h2 className='text-white mb-5'>ဓမ္မပဒ</h2>
            <p className="lead mb-4 text-white opacity-8">The Dhammapada is a collection of sayings of the Buddha in verse form and one of the most widely read and best known Buddhist scriptures.</p>
            {/* <h6 className="text-white mb-2 mt-5">Find also on App Store</h6> */}
            {/* <div className="d-flex justify-content-center">
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.senlasy.dhammapada"><i className="fab fa-google-play text-lg text-white me-4"></i></a>
              <a target="_blank" href="https://apps.apple.com/us/app/the-dhammapada/id1631533228"><i className="fab fa-apple text-lg text-white me-4"></i></a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </header>
  </div>
);

export default Header;
