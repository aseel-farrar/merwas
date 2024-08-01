import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Grid.module.scss'

function Grid({ children, columns = 2, rows = 2, gap = '20px', className }) {
  return (
    <div className={classNames(styles.gridWrapper, className)}>
      <div
        className={styles.grid}
        style={{ '--columns': columns, '--rows': rows, '--gap': gap }}
      >
        {children}
      </div>
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
  gap: PropTypes.string,
  className: PropTypes.string,
};

export default Grid;
