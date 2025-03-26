import React from 'react';

import './arrow-1.scss';

export interface Arrow1Props {
  /** What background color to use */
  color?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  direction?: 'top' | 'right' | 'bottom' | 'left' | 'top-right';
}

export const Arrow1 = ({
                          size = 'medium',
                          direction = 'bottom',
                          color,
                          ...props
                        }: Arrow1Props) => {
  return (
    <span
      className={['arrow', `arrow--${size}`, `arrow--${direction}`].join(' ')}
      style={{ color }}
      {...props}
    >
    </span>
  );
};
