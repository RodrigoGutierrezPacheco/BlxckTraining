import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

	const customStyles = {
		content: {
		backgroundColor: "black",
		color:"white",
		fontSize:"100"
		},
	};

	let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

	function miRutina(){
		window.location.href = "/miRutina"
	}

	function home(){
		window.location.href = "/"
	}

	function whatsapp(){
		window.location.href="https://api.whatsapp.com/send?phone=525638686467"
	}

  return (
    // <nav>
    //   <Link to="/">
    //     <button>Home</button>
    //   </Link>

    //   {isLoggedIn && (
    //     <>
    //       <button onClick={logOutUser}>Logout</button>

    //       <Link to="/profile">
    //         <button>Profile</button>
    //         {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
    //       </Link>

    //       <span>{user && user.name}</span>
    //     </>
    //   )}

    //   {!isLoggedIn && (
    //     <>
    //       <Link to="/signup">
    //         {" "}
    //         <button>Sign Up</button>{" "}
    //       </Link>
    //       <Link to="/login">
    //         {" "}
    //         <button>Login</button>{" "}
    //       </Link>
    //     </>
    //   )}
    // </nav>
		
		<nav className="row width media pointer">
			<img onClick={home} className="logoNav l pointer" src="images/pesaRusa.png" alt="" />
			<h1 onClick={home} className="btNv pointer">Blxck Trainig</h1>
			<img onClick={openModal} className="logoNav o pointer" src="images/menu.png" alt="" />
			<Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
				<div>
					<h1 onClick={closeModal} className="pointer">X</h1>
					<h1 onClick={home} className="red menuTexto pointer">Inicio</h1>
					<h1 onClick={miRutina} className="pointer">Mi Rutina</h1>
					<h1 onClick={whatsapp} className="red menuTexto pointer">Contacto</h1>
				</div>
      </Modal>
		</nav>
  );
}

export default Navbar;
