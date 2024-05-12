import { Modal } from "./Modal";
import { useState } from "react";

export const Card = ({ isAuth, userVerification }) => {
  const [isModal, setIsModal] = useState(false);

  const checkAuth = () => {
    if (isAuth !== true) {
      setIsModal(true);
    }
  };
  return (
    <div className="card_wrapper">
      <p>Продукт</p>
      <p>Авторизован: {String(isAuth)}</p>
      <button onClick={checkAuth}>Купить</button>

      {isModal ? (
        <Modal setIsModal={setIsModal} userVerification={userVerification} />
      ) : null}
    </div>
  );
};
