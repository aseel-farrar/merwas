import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

function Icon({ name, size = 24, color = 'currentColor', className, ...props }) {
  const src = `/images/${name}.svg`;

  return (
    <Image
      src={src}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={className}
      style={{ fill: color }}
      {...props}
    />
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
