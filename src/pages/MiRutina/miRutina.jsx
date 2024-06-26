import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Collapsible from 'react-collapsible';
import Alejandra from '../Rutinas/Alejandra';
import Alejandro from '../Rutinas/Alejandro';
import Ejercicios from '../Ejercicios';
import users from '../Users/Users';
import Dalet from '../Rutinas/Dalet';
import Basico1 from '../Rutinas/Basico1';
import Prueba from '../Rutinas/Prueba';
import Estefany from '../Rutinas/Estefany';
import Susina from '../Rutinas/Susina';
import Jorge from '../Rutinas/Jorge';
import Pool from '../Rutinas/Pool';
import Carlos from '../Rutinas/Carlos';

const MiRutina = () => {
  function whatsapp() {
    window.location.href = 'https://api.whatsapp.com/send?phone=525638686467';
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [userRoutine, setUserRoutine] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
      setLoggedIn(true);
      const savedUsername = localStorage.getItem('username');
      setUsername(savedUsername);
    }
  }, []);
  console.log(localStorage?.getItem('username'))

  useEffect(() => {
    switch (username.toLowerCase()) {
      case 'dalet':
        setUserRoutine(<Dalet />);
        break;
      case 'jesus':
        setUserRoutine(<Alejandra />);
        break;
      case 'prueba':
        setUserRoutine(<Prueba />);
        break;
      case 'carlos morales':
        setUserRoutine(<Carlos />)
        break;
      case 'susy':
        setUserRoutine(<Susina />);
        break;
      case 'jorge':
        setUserRoutine(<Alejandra />);
        break;
      case 'alejandro':
        setUserRoutine(<Alejandro />);
        break;
      case 'pool':
        setUserRoutine(<Alejandra />);
        break;
      case 'estefany':
        setUserRoutine(<Estefany />);
        break;
      case 'pool':
        setUserRoutine(<Alejandra />)
        break;
      default:
        setUserRoutine(<Alejandra />);
        break;
    }
  }, [username, password]);


  const handleLogin = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.username.toLowerCase() === username.toLowerCase().trim());
    if (user && user.password === password) {
      setLoggedIn(true);
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', user.username.toLowerCase());
      setUserNotFound(false);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Credenciales inválidas',
        text: 'El nombre de usuario o la contraseña son incorrectos.',
      });
      setLoggedIn(false);
      setUserNotFound(true);
    }
  };


  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    setUserNotFound(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <div className="miRutina">
            <img className="blxck" src="images/blxckLogo.png" alt="" />
            <h1 className="red">Bienvenidx {username}</h1>
            <button className="button1" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
          {userRoutine}
        </div>
      ) : (
        <div className="inicio">
          <h2>Iniciar sesión</h2>
          <Ejercicios />
          <img className="png" src="images/pesa-rusa.png" alt="" />
          <form onSubmit={handleLogin}>
            <div className="inicio">
              <label className="start title">Nombre de usuario:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
              />
            </div>
            <div className="inicio">
              <label className="start title">Contraseña:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                pattern="[a-zA-Z0-9]*"
                className="input"
              />
            </div>
            {userNotFound && <h1>Credenciales inválidas</h1>}
            <button className="button1 title" type="submit">
              Iniciar sesión
            </button>
          </form>
          <div className="flex">
            <h1 className="title">Problemas para iniciar sesión?</h1>
            <button className="button1 title" onClick={whatsapp}>
              Contacto
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiRutina;


