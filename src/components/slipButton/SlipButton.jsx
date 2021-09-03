import React from 'react';
import { Button } from 'primereact/button';
import { classname } from 'classname';

export const SlipButton = ({ color, icon, name }) => {
  const buttonClass = classname(color, 'p-p-0');
  const iconClass = classname('pi', `pi-${icon}`, 'p-px-2');
  return (
    <Button className={buttonClass}>
      <i className={iconClass}></i>
      <span className="p-px-3">{name}</span>
    </Button>
  );
};
