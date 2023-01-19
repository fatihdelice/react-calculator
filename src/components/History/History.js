import React from 'react';
import styles from './styles.module.css';
import HistoryIcon from './icons/history.svg';
import  {useModal} from '../../context/ModalContext';

export default function History() {
  const { isActive, setIsActive } = useModal();

  const handleHistory = () => {
    setIsActive(!isActive);
  }
  
  return (
    <div className={styles.history} onClick={handleHistory}>
        <img src={HistoryIcon} className={styles.icon} alt="history" />
    </div>
  )
}
