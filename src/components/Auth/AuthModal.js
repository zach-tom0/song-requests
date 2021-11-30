import Card from "../AuthCard/AuthCard";
import Backdrop from "./Backdrop";
import classes from "./AuthModal.module.css";
import { useRef, useState } from "react";
import { FaExclamation } from "react-icons/fa";

const AuthModal = (props) => {
  const passCodeInputRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isCodeCorrect, setIsCodeCorrect] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (passCodeInputRef.current.value === "beefy") {
      setIsModalOpen(false);
    } else {
      passCodeInputRef.current.value = "";
      setIsCodeCorrect(false);
    }
  };

  return (
    <Backdrop show={isModalOpen}>
      <div className={isModalOpen ? classes.modalOpen : classes.modalClosed}>
        <Card>
          <form onSubmit={handleSubmit}>
            <div className={classes.div}>
              <input
                className={classes.input}
                placeholder={isCodeCorrect ? "Enter Code" : "Incorrect"}
                ref={passCodeInputRef}
              ></input>
              {isCodeCorrect ? "" : <FaExclamation color="red" />}
            </div>
            <div className={classes.div}>
              <button className={classes.button} type="submit">
                Let's GOoOoO
              </button>
            </div>
          </form>
        </Card>
      </div>
    </Backdrop>
  );
};

export default AuthModal;
