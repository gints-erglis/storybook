import React from "react";
import "./grid.scss";
import Card from "../../02-molecules/Cards/Card-1/Card-1";

type GridProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

const Grid: React.FC<GridProps> = ({children, className = "", size = 'medium', }) => {
  return <div className={`grid ${className} sb-${size}`}>{children}</div>;
};

export default Grid;