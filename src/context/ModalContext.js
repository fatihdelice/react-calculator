import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);

    const values = { isActive, setIsActive };

    return (
        <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);