// import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useModal } from '../../context/ModalContext';
import CloseIcon from './icons/close.svg';
import { useHistory } from '../../context/CalculateContext';


export default function Modal() {
    const { history } = useHistory();
    const { isActive, setIsActive } = useModal();
    
    // 3 items in history
    // const [filteredList, setFilteredList] = useState([]);

    // useEffect(() => {
    //     setFilteredList(history.slice(0, 3).reverse());
    // }, [history]);

    const handleClose = () => {
        setIsActive(!isActive);
    }



    return (
        <div className={styles.modal}>
            <div className={styles.modal_container}>
                <button className={styles.modal_close} onClick={handleClose}>
                    <img src={CloseIcon} alt="close modal" />
                </button>
                <span className={styles.modal_title}>History</span>
                <div className={styles.modal_content}>
                    {
                        history.reverse().map((item, index) => {
                            return (
                                <div className={styles.modal_item} key={index}>
                                    <p>{item}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
