import React from 'react';

const EditModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-10" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <div className="bg-white p-5 rounded flex flex-col justify-center items-center w-64 h-40 lg:h-48 lg:w-84">
        <svg width="46" height="36" viewBox="0 0 46 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8917 36L0 18.9012L3.35037 15.2964L15.8917 28.7903L42.6496 0L46 3.60484" fill="#27CF2D"/>
        </svg>
        <p className="font-medium text-sm mt-4">Exercise changes saved</p>
      </div>
    </div>
  );
};

export default EditModal;
