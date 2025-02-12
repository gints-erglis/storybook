import React from 'react';
import LinkCta1 from "../../../01-atoms/links/link-cta/link-cta-1/Link-cta-1";

import './card.scss';

type CardProps = {
  mode?: string;
  heading?: string;
  description?: string;
  linkLabel?: string;
};

const Card = ({
                mode,
                heading,
                description,
                linkLabel,
                ...props
              }: CardProps) => {
  console.log("Card component is rendering");
  return (
    <div
      className={['card', `card--${mode}`, mode].join(' ')}
      {...props}
    >
      <h2>{heading}</h2>
      <p>{description}</p>
      <LinkCta1 label={linkLabel || "Read more"}/>
    </div>
  );
};

export default Card;