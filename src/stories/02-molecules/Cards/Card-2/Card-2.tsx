import React from 'react';
import LinkCta1 from "../../../01-atoms/links/link-cta/link-cta-1/Link-cta-1";
import image1 from '../../../../assets/imgages/image-1.jpg';

import './card-2.scss';

type CardProps = {
  mode?: string;
  heading?: string;
  description?: string;
  linkLabel?: string;
};

const Card2 = ({
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
      <div className="card__image">
        <img src={image1} />
      </div>
      <div className="card__content">
        <h2>{heading}</h2>
        <p>{description}</p>
        <LinkCta1 label={linkLabel || "Read more"}/>
      </div>
    </div>
  );
};

export default Card2;