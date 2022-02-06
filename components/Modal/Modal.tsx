import React from "react";

const Modal = ({ children }) => {

  return (
    <div className="flex justify-center inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
        {children}
        </div>
      </div>
     
    </div>
  );
};

export default Modal;
