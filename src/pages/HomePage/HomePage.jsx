import "./HomePage.css";
import { motion } from "framer-motion";

function HomePage() {

	function whatsapp(){
		window.location.href = "https://api.whatsapp.com/send?phone=525638686467"
	}
  return (
    <div>
			<div className="width">
			<div className="box1">
       <img className="blxck" src="images/blxckLogo.png" alt="" />
			 <h1 className="red justify q">!Únete a nuestra comunidad!</h1>
			 <h3 className="white justify w">Nuestro programa de entrenamiento es un conjunto de métodos, actividades y ejercicios que sirven para desarrollar la condición física. un buen entrenamiento junto con una buena recuperación, son la clave para cumplir tus objetivos.</h3>
			 <motion.button whileTap={{scale:1.1}} whileHover={{scale:1.1}} className="button1 ins" onClick={whatsapp}>!Inscríbete ahora!</motion.button>
			</div>
			<div>
				<h1 className="red e">¿Que incluyen nuestros programas de entrenamiento?</h1>
				<div className="box2 row">
					<h1 className="white t">1.-</h1>
					<img className="incluye" src="images/planEntrenamiento.png" alt="" />
					<h1 className="white r">Plan de entrenamiento de hasta 5 semanas.</h1>
				</div>
				<div className="box3 row">
					<h1 className="black t">2.-</h1>
					<img className="incluye" src="images/estiramiento.png" alt="" />
					<h1 className="black r">Sesiones de estiramientos y recuperación muscular.</h1>
				</div>
				<div className="box2 row">
					<h1 className="white t">3.-</h1>
					<img className="contacto" src="images/contacto.png" alt="" />
					<h1 className="white r">Seguimiento diario con los entrenadores.</h1>
				</div>
				<div className="box3 row">
					<h1 className="black t">4.-</h1>
					<img className="medida" src="images/medida.png" alt="" />
					<h1 className="black r">Medidas Antropométricas. Mediciones de pliegues cutáneos para la valoración de la cantidad del tejido adiposo subcutáneo <br /><a className="red">*costo extra*</a></h1>
				</div>
				<h1 className="red ">¿Estas buscando un cambio en tu vida?</h1>
				<h2 className="justify y">¡Únete ya! a nuestro programa de entrenamiento de hasta 5 semanas, todas nuestras rutinas están diseñadas específicamente para ti. Contáctanos para mayor información</h2>
				<motion.button whileTap={{scale:1.1}} whileHover={{scale:1.1}} className="button1" onClick={whatsapp}>¡Contáctanos!</motion.button>
			</div>
			<footer className="footer">
				<h1 className="lFooter">Blxck Training</h1>
				<img className="iFooter" src="images/blxckLogo.png" alt="" />
			</footer>
			</div>
			<div className="noCel">
				<img src="images/blxckLogo.png" alt="" />
				<h1 className="red">Ingresa desde tu celular</h1>
				<h2>Para una mejor experiencia </h2>
			</div>
    </div>
  );
}

export default HomePage;
