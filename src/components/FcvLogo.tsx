import React from 'react';

const FCV_LOGO_URL = 'https://www.fcv.org/co/images/logo/fcv-40-logo-g.svg';

type FcvLogoProps = {
  variant?: 'medium' | 'minimum';
  className?: string;
};

export const FcvLogo: React.FC<FcvLogoProps> = ({ variant = 'medium', className = '' }) => {
  const sizeClass = variant === 'medium'
    ? 'h-10 max-w-[180px]'
    : 'h-8 max-w-[128px]';

  return (
    <img
      src={FCV_LOGO_URL}
      srcSet={`${FCV_LOGO_URL} 1x, ${FCV_LOGO_URL} 2x`}
      sizes={variant === 'medium' ? '180px' : '128px'}
      alt="FCV 40 Años"
      className={`w-auto object-contain object-left ${sizeClass} ${className}`.trim()}
    />
  );
};
