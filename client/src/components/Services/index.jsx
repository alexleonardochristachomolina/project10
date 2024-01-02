import React from 'react';
import PropTypes from 'prop-types';
import {
  LockIcon,
  DeliveryIcon,
  MessageIcon,
} from '../../assets/services-icons';

export const Services = () => {
  const SERVICES = [
    {
      icon: <LockIcon />,
      title: 'Secure payment',
      details: 'Have you ever finally just',
    },
    {
      icon: <MessageIcon />,
      title: 'Customer support',
      details: 'Have you ever finally just',
    },
    {
      icon: <DeliveryIcon />,
      title: 'Free delivery',
      details: 'Have you ever finally just',
    },
  ];

  return (
    <section className="my-3 max-w-4xl">
      <div className="flex flex-wrap gap-y-4">
        {SERVICES.map(({ icon, title, details }, index) => (
          <ServiceCard
            title={title}
            details={details}
            icon={icon}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="flex gap-x-2">
          {icon}

          <div className="font-normal text-base">
            <h4 className="text-[#1c1c1c]">{title}</h4>
            <p className="text-[#A9ACB0]">{details}</p>
          </div>
        </div>
      </div>
    </>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};
