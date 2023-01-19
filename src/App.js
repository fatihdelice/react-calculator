import { useTheme } from './context/ThemeContext';
import Toggle from './components/Toggle';
import History from './components/History';
import Calculator from './components/Calculator';
import Result from './components/Result';
import { useModal } from './context/ModalContext';
import Modal from './components/Modal';

function App() {
  const { theme } = useTheme();
  const { isActive } = useModal();

  return (
    <div className={`app ${theme === "dark" ? theme : ""}`}>
      {isActive && <Modal />}
      <Toggle />
      <History />
      <Result />
      <Calculator />
    </div>
  );
}

export default App;
