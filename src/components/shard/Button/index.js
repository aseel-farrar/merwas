import React from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

export const Types = {
  login: 'login',
  ordinary: 'ordinary',
  register: 'register',
  subscribe: 'subscribe',
};

export default function Button({
  _ref,
  children,
  className,
  type = Types.ordinary,
  ...restProps
}) {
  const classes = cx(styles.button, styles[type], className);

  const commonProps = {
    className: classes,
    ref: _ref,
    ...restProps,
  };

  return (
    <button type="button" {...commonProps}>
      {children}
    </button>
  );
}
