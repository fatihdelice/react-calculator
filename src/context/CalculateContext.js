import { createContext, useState, useContext } from 'react';

const ResultContext = createContext();
const ProcessContext = createContext();
const HistoryContext = createContext();

export const ResultProvider = ({ children }) => {
    const [result, setResult] = useState(null);

    const values = { result, setResult };

    return (
        <ResultContext.Provider value={values}>{children}</ResultContext.Provider>
    );
};

export const ProcessProvider = ({ children }) => {
    const [process, setProcess] = useState(null);

    const values = { process, setProcess };

    return (
        <ProcessContext.Provider value={values}>{children}</ProcessContext.Provider>
    );
};

export const HistoryProvider = ({ children }) => {
    const [history, setHistory] = useState([]);

    const values = { history, setHistory };

    return (
        <HistoryContext.Provider value={values}>{children}</HistoryContext.Provider>
    );
};


export const useResult = () => useContext(ResultContext);
export const useProcess = () => useContext(ProcessContext);
export const useHistory = () => useContext(HistoryContext);