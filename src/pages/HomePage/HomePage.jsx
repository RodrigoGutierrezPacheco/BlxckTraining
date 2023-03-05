import "./HomePage.css";

function HomePage() {
  return (
    <div>
			<div className="box1">
       <img className="blxck" src="images/blxckLogo.png" alt="" />
			 <h1 className="red justify q">!Unete a nuestra comunidad!</h1>
			 <h3 className="white justify w">Nuestro programa de entrenamiento es un conjunto de métodos, actividades y ejercicios que sirven para desarrollar la condición física. un buen entrenamiento junto con una buena recuperación, son la clave para cumplir tus objetivos.</h3>
			 <button className="button">!Inscribete ahora!</button>
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
					<h1 className="white r">Seguimiento diario con los coaches.</h1>
				</div>
				<div className="box3 row">
					<h1 className="black t">4.-</h1>
					<img className="medida" src="images/medida.png" alt="" />
					<h1 className="black r">Medidas Antropometricas. Mediciones de pliegues cutaneos para la valoracion de la cantidad del tejido adiposo subcutaneo.</h1>
				</div>
			</div>
    </div>
  );
}

export default HomePage;
