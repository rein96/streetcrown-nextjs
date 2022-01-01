import Image from 'next/image';
import React from 'react';

interface ServicesProps {
  detailingServices: any[];
}

const Services: React.FC<ServicesProps> = ({ detailingServices }) => {
  return (
    <div>
      {detailingServices.map((service) => (
        <div key={service.sys.id}>{service.fields.name}</div>
      ))}
    </div>
  );
};

export default Services;
