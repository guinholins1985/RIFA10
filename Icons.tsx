import React from 'react';

export const FILTER_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L16 11.414V17a1 1 0 01-.293.707l-4 4A1 1 0 0110 21v-5.586L4.293 6.707A1 1 0 014 6V4z" /></svg>;
export const INSTAGRAM_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="2"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path></svg>;
export const FACEBOOK_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>;

// Payment Icons
export const StripeIcon: React.FC<{className?: string}> = ({className}) => <span className={className}>Stripe</span>;
export const PicPayIcon: React.FC<{className?: string}> = ({className}) => <span className={className}>PicPay</span>;
export const NubankIcon: React.FC<{className?: string}> = ({className}) => <span className={className}>Nubank</span>;
export const InterIcon: React.FC<{className?: string}> = ({className}) => <span className={className}>Inter</span>;
export const PagSeguroIcon: React.FC<{className?: string}> = ({className}) => <span className={className}>PagSeguro</span>;
export const KiwifyIcon: React.FC<{className?: string}> = ({className}) => <span className={className}>Kiwify</span>;
export const MercadoPagoIcon: React.FC<{className?: string}> = ({className}) => <span className={className}>Mercado Pago</span>;
