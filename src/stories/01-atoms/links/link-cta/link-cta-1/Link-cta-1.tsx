import React from 'react';

import './link-cta-1.scss';

type LinkCta1Props = {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Icon position */
  iconPosition?: 'left' | 'right';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
const LinkCta1 = ({
  primary = false,
  size = 'medium',
  iconPosition = 'right',
  label,
  ...props
}: LinkCta1Props) => {
  const mode = primary ? 'link-cta--primary' : 'link-cta--secondary';
  return (
    <a
      className={['link-cta', `link-cta--${size}`, `link-cta--icon-${iconPosition}`, mode].join(' ')}
      {...props}
    >
      {label}
    </a>
  );
};

export default LinkCta1;