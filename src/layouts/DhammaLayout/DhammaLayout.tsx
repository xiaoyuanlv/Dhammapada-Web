import React, { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import styles from './DhammaLayout.module.css';

interface DhammaLayoutProps {
  children: React.ReactNode
}

const DhammaLayout: FC<DhammaLayoutProps> = ({children}) => (
  <div className={styles.DhammaLayout}>
    <NavBar />
    {children}
    <Footer />
  </div>
);

export default DhammaLayout;
