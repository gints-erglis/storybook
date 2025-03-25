import React from 'react';

import './chevron.scss';

export interface ChevronProps {
  /** What background color to use */
  color?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  direction?: 'top' | 'right' | 'bottom' | 'left';
}

export const Chevron = ({
                         size = 'medium',
                          direction = 'bottom',
                         color,
                         ...props
                       }: ChevronProps) => {
  return (
    <span
      className={['chevron', `chevron--${size}`, `chevron--${direction}`].join(' ')}
      style={{ color }}
      {...props}
    >
    </span>
  );
};
