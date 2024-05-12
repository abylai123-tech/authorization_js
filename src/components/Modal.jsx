import { useState } from "react";

export const Modal = ({ setIsModal, userVerification }) => {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userVerification(form);
    setIsModal(false);
  };

  return (
    <div className="modal">
      <div className="modal_wrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="login"
            onChange={handleChange}
            name="login"
            value={form.login}
          />
          <input
            type="password"
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={form.password}
          />
          <input type="submit" value="Войти" />
        </form>
      </div>
    </div>
  );
};
