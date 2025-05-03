import React from 'react';

import './checkbox2.scss';

function generateId() {
  return 'id-' + Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 5);
}

export interface CheckboxProps {
  id: string;
  /** What color to use */
  color?: string;
  /** How large should the checkbox be? */
  size?: 'small' | 'medium' | 'large';
  /** Checkbox label */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Checkbox = ({
                         id = generateId(),
                         size = 'medium',
                         color,
                         label,
                         ...props
                       }: CheckboxProps) => {
  return (
    <div className={['checkbox-2', `checkbox--${size}`].join(' ')}>
      <input id={id} type="checkbox" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;