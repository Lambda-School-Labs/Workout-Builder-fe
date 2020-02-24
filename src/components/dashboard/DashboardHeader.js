import React from 'react';

const DashboardHeader = () => {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const time = new Intl.DateTimeFormat('en-US', options).format(date);
  return (
    <div className="border-b border-blaze-orange pb-1 lg:border-none lg:pb-0 lg:flex lg:items-center">
      <p className="font-semibold text-2xl lg:text-dove-grey">Programs due<span className="lg:hidden">:</span></p>
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden lg:block ml-2 mr-auto">
        <path d="M12.2222 19.8C12.2222 20.3835 11.9881 20.9431 11.5713 21.3556C11.1546 21.7682 10.5894 22 10 22C9.41063 22 8.8454 21.7682 8.42865 21.3556C8.0119 20.9431 7.77778 20.3835 7.77778 19.8H12.2222ZM10 0C10.2947 0 10.5773 0.115892 10.7857 0.322183C10.994 0.528472 11.1111 0.808262 11.1111 1.1V2.288C14.2667 2.816 16.6667 5.533 16.6667 8.8V15.4L20 18.7H0L3.33333 15.4V8.8C3.33333 5.533 5.73333 2.816 8.88889 2.288V1.1C8.88889 0.808262 9.00595 0.528472 9.21433 0.322183C9.4227 0.115892 9.70532 0 10 0Z" fill="#FD6A02"/>
      </svg>
      <p className="text-dove-grey text-xs -mt-1 lg:mt-0">{time}</p>
    </div>
  );
};

export default DashboardHeader;
