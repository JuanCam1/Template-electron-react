import { FaCirclePlus } from "react-icons/fa6";
import styles from "./ButtonCreate.module.css";

interface ButtonCreateProps {
  goToCreate: () => void;
  text: string;
}
const ButtonCreate = ({ goToCreate, text }: ButtonCreateProps) => {
  return (
    <button onClick={goToCreate} className={styles.boton}>
      <FaCirclePlus />
      <span>{text}</span>
    </button>
  );
};
export default ButtonCreate;
