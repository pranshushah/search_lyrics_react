import React from 'react';
import Styles from './Spinner.module.css';

const spinner = props => {
  return <div className={Styles.loader}>loading</div>;
};

export default spinner;
