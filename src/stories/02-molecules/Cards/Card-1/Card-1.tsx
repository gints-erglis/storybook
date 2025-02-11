import React from 'react';
import LinkCta1 from "../../../01-atoms/links/link-cta/link-cta-1/Link-cta-1";

import './card.scss';

type CardProps = {
  heading?: string;
  description?: string;
  linkLabel?: string;
};

const Card = ({
                heading,
                description,
                linkLabel,
                ...props
              }: CardProps) => {
  console.log("Card component is rendering");
  return (
    <div className="card" {...props}>
      <h2>{heading}</h2>
      <p>{description}</p>
      <LinkCta1 label={linkLabel || "Read more"}/>
    </div>
  );
};

export default Card;