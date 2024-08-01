import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Section.module.scss';

function Section({ title, description, children, className, titleClassName, descriptionClassName }) {
  return (
    <section className={classNames(styles.section, className)}>
      <h2 className={classNames(styles.title, titleClassName)}>{title}</h2>
      <p className={classNames(styles.description, descriptionClassName)}>{description}</p>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
};

export default Section;
