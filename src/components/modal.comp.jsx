/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';

const ModalPage = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // If isOpen is false, don't render the modal.
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[90%] md:w-[50%] shadow-lg relative">
                <button
                    className="absolute top-2 right-2 focus:outline-none focus:ring-2 focus:ring-gray-300 p-2 rounded-md text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >
                    <FaTimes fontSize={16}/>
                </button>
                {children ? <div className="modal-content">
                    {children} {/* This is where the modal content goes */}
                </div> : null}
            </div>
        </div>)
};

export default ModalPage;
