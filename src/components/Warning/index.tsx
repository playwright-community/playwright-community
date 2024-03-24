import React from 'react';
import styles from './index.module.css';

const Warning: React.FC = ({ children }) => (
  <div className={styles.warning}>
    <span className={styles.warningIcon}>⚠️</span>
    {children}
  </div>
);

export default Warning;
