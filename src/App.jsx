import { Card } from "./components/Card";
import { useEffect, useState } from "react";

import "./App.css";

export const App = () => {
  const userObj = [
    {
      login: "qwerty",
      password: "12345",
      name: "Max",
      age: 18,
      isAuth: false,
    },
    {
      login: "zx",
      password: "90",
      name: "Piter",
      age: 23,
      isAuth: false,
    },
  ];

  localStorage.setItem("users", JSON.stringify(userObj));

  const [isAuth, setIsAuth] = useState(false);

  //проверяем на наличие в LocalStorage пользоватялея, у которого значение ключа isAuth будет true
  const checkAuthLS = () => {
    let users = JSON.parse(localStorage.getItem("users"));

    let auth = false;

    users.forEach((user) => {
      if (user.isAuth === true) {
        auth = true;
      }
    });

    return auth;
  };

  //получаем пользователей из LS. проверяем на совпадение логина и пароля. и если совпадение было то перезаписывает LS
  const userVerification = (form) => {
    let users = JSON.parse(localStorage.getItem("users"));

    let verification = false;

    let usersLS = users.map((user) => {
      if (user.login === form.login && user.password === form.password) {
        verification = true;
        return { ...user, isAuth: true };
      } else {
        return { ...user, isAuth: false };
      }
    });

    if (verification === true) {
      localStorage.setItem("users", JSON.stringify(usersLS));
    }

    setIsAuth(verification);
  };

  //каждый раз после запуска приложения, запускается функция checkAuthLS
  useEffect(() => {
    let auth = checkAuthLS();
    if (auth === true) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div className="app">
      <div className="card">
        <Card isAuth={isAuth} userVerification={userVerification} />
      </div>
    </div>
  );
};
