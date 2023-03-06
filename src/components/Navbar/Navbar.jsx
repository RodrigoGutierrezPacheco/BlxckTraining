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
		
		<nav className="row">
			<img className="logoNav l" src="images/pesaRusa.png" alt="" />
			<h1 className="btNv">Blxck Trainig</h1>
			<img onClick={openModal} className="logoNav o" src="images/menu.png" alt="" />
			<Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
				<div>
					<h1>Menu</h1>
					<h1>Mi Rutina</h1>
					<h1>Contacto</h1>
				</div>
      </Modal>
		</nav>
  );
}

export default Navbar;
