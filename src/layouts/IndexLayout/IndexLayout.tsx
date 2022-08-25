import React, { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import styles from './IndexLayout.module.css';

interface IndexLayoutProps {
  children: React.ReactNode
}

const IndexLayout: FC<IndexLayoutProps> = ({children}) => (
  <div className={styles.IndexLayout}>
    <NavBar />
    <Header />
    {children}
    <Footer />
  </div>
);

export default IndexLayout;
