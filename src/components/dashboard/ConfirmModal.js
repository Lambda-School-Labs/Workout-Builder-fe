import React from 'react';

const ConfirmModal = ({ text, cancel, confirm }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-10" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <div className="bg-white p-5 rounded flex flex-col justify-center items-center w-64 h-40 lg:h-48 lg:w-84">
        <p className="font-medium text-lg text-center">{text}</p>
        <div className="flex mt-4 lg:flex-col lg:items-center w-full">
          <button className="bg-white border border-blaze-orange rounded font-semibold text-xs text-blaze-orange py-2 w-1/2 lg:order-1" onClick={cancel}>Cancel</button>
          <button className="bg-blaze-orange rounded font-semibold text-xs text-white py-2 w-1/2 ml-2 lg:ml-0 lg:mb-2" onClick={confirm}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
