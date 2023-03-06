import React from 'react'
import Collapsible from 'react-collapsible';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
const MiRutina = () => {

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

	function ppm(){
		Swal.fire({
			title: 'Press Pecho en Maquina',
			imageUrl: 'images/pressPechoMaquina.jpeg',
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'Custom image',
			confirmButtonText: "Entendido",
			confirmButtonColor:"black",
		})
	}

	function am(){
		Swal.fire({
			title: 'Press Pecho en Maquina',
			imageUrl: 'images/pressPechoMaquina.jpeg',
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'Custom image',
			confirmButtonText: "Entendido",
			confirmButtonColor:"black",
		})
	}

const usuario = prompt("Ingresa tu usuario")

if(usuario === "rodrigo" || usuario === "Rodrigo" || usuario === "pepe" || usuario === "Pepe"){
	return (	
		<div>
			<div className='miRutina'>
			 <img className='blxck' src="images/blxckLogo.png" alt="" />
			 <h1 className='red'>Bienvenidx {usuario}</h1>
			</div>
			<Collapsible className='dia ' triggerWhenOpen="Semana 1"  triggerStyle={{fontSize:'5rem'}} trigger="Semana 1">
				<div className='justify'>
					<h1 className='red'>Dia 1 Pecho-Triceps</h1>
					<p>1.-Press pecho en maquina <a className='red'>4 series 15 repeticiones</a><a onClick={ppm
					}>▶️</a></p>
					<p>2.-Aperturas en maquina <a className='red'>4 series 15 repeticiones</a><a onClick={am}>▶️</a></p>
					<p>3.-Lagartijas 4 <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>4.-Fondos en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>5.-Copa a 2 manos <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>6.-Jalones con cuerda en polea alta <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
				</div>
				<hr />
				<div className='justify'>
					<h1>Dia 2 Pierna</h1>
					<p>1.-Press pecho en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>2.-Aperturas en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>3.-Lagartijas 4 <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>4.-Fondos en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>5.-Copa a 2 manos <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>6.-Jalones con cuerda en polea alta <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
				</div>
				<hr />
				<div className='justify'>
					<h1 className='red'>Dia 3 Hombro-Biceps</h1>
					<p>1.-Press pecho en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>2.-Aperturas en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>3.-Lagartijas 4 <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>4.-Fondos en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>5.-Copa a 2 manos <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>6.-Jalones con cuerda en polea alta <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
				</div>
				<hr />
				<div className='justify'>
					<h1>Dia 4 Espalda-Biceps</h1>
					<p>1.-Press pecho en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>2.-Aperturas en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>3.-Lagartijas 4 <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>4.-Fondos en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>5.-Copa a 2 manos <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>6.-Jalones con cuerda en polea alta <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
				</div>
				<hr />
				<div className='justify'>
					<h1 className='red'>Dia 5 fullbody</h1>
					<p>1.-Press pecho en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>2.-Aperturas en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>3.-Lagartijas 4 <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>4.-Fondos en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>5.-Copa a 2 manos <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
					<p>6.-Jalones con cuerda en polea alta <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
				</div>
		</Collapsible>
		<Collapsible className='dia black1' trigger="Semana 2" triggerWhenOpen="Semana 2" triggerStyle={{fontSize:'5rem'}}>
		<h1>Dia 1</h1>
				<h1>Dia 2</h1>
				<h1>Dia 3</h1>
				<h1>Dia 4</h1>
				<h1>Dia 5</h1>
				<h1>Dia 6</h1>
		</Collapsible>
		<Collapsible className='dia' trigger="Semana 3" triggerWhenOpen="Semana 3" triggerStyle={{fontSize:'5rem'}}>
		<h1>Dia 1</h1>
				<h1>Dia 2</h1>
				<h1>Dia 3</h1>
				<h1>Dia 4</h1>
				<h1>Dia 5</h1>
				<h1>Dia 6</h1>
		</Collapsible>
		<Collapsible className='dia black1' trigger="Semana 4" triggerWhenOpen="Semana 4" triggerStyle={{fontSize:'5rem'}}>
				<h1>Dia 1</h1>
				<h1>Dia 2</h1>
				<h1>Dia 3</h1>
				<h1>Dia 4</h1>
				<h1>Dia 5</h1>
				<h1>Dia 6</h1>
		</Collapsible>
		<Collapsible className='dia' trigger="Semana 5" triggerWhenOpen="Semana 5" triggerStyle={{fontSize:'5rem'}}>
			  <h1>Dia 1</h1>
				<h1>Dia 2</h1>
				<h1>Dia 3</h1>
				<h1>Dia 4</h1>
				<h1>Dia 5</h1>
				<h1>Dia 6</h1>
		</Collapsible>
		</div>
	)
} else {
	Swal.fire({
		title:"Usuario no encontrado"
	})
	return(
		<h1>Contactanos para tu Programa de Entrenamiento</h1>
	)
}




}

export default MiRutina

// if(usuario === "rodrigo" || "Rodrigo"|| "pepe"){
// 	return (	
// 		<div>
// 			<div className='miRutina'>
// 			 <img className='blxck' src="images/blxckLogo.png" alt="" />
// 			 <h1 className='red'>Bienvenidx {usuario}</h1>
// 			</div>
// 			<Collapsible className='dia ' triggerWhenOpen="Semana 1"  triggerStyle={{fontSize:'5rem'}} trigger="Semana 1">
// 				<div className='justify'>
// 					<h1 className='red'>Dia 1 Pecho-Triceps</h1>
// 					<p>1.-Press pecho en maquina <a className='red'>4 series 15 repeticiones</a><a onClick={ppm
// 					}>▶️</a></p>
// 					<p>2.-Aperturas en maquina <a className='red'>4 series 15 repeticiones</a><a onClick={am}>▶️</a></p>
// 					<p>3.-Lagartijas 4 <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>4.-Fondos en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>5.-Copa a 2 manos <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>6.-Jalones con cuerda en polea alta <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 				</div>
// 				<hr />
// 				<div className='justify'>
// 					<h1>Dia 2 Pierna</h1>
// 					<p>1.-Press pecho en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>2.-Aperturas en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>3.-Lagartijas 4 <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>4.-Fondos en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>5.-Copa a 2 manos <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>6.-Jalones con cuerda en polea alta <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 				</div>
// 				<hr />
// 				<div className='justify'>
// 					<h1 className='red'>Dia 3 Hombro-Biceps</h1>
// 					<p>1.-Press pecho en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>2.-Aperturas en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>3.-Lagartijas 4 <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>4.-Fondos en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>5.-Copa a 2 manos <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>6.-Jalones con cuerda en polea alta <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 				</div>
// 				<hr />
// 				<div className='justify'>
// 					<h1>Dia 4 Espalda-Biceps</h1>
// 					<p>1.-Press pecho en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>2.-Aperturas en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>3.-Lagartijas 4 <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>4.-Fondos en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>5.-Copa a 2 manos <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>6.-Jalones con cuerda en polea alta <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 				</div>
// 				<hr />
// 				<div className='justify'>
// 					<h1 className='red'>Dia 5 fullbody</h1>
// 					<p>1.-Press pecho en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>2.-Aperturas en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>3.-Lagartijas 4 <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>4.-Fondos en maquina <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>5.-Copa a 2 manos <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 					<p>6.-Jalones con cuerda en polea alta <a className='red'>4 series 15 repeticiones</a><a>▶️</a></p>
// 				</div>
// 		</Collapsible>
// 		<Collapsible className='dia black1' trigger="Semana 2" triggerWhenOpen="Semana 2" triggerStyle={{fontSize:'5rem'}}>
// 		<h1>Dia 1</h1>
// 				<h1>Dia 2</h1>
// 				<h1>Dia 3</h1>
// 				<h1>Dia 4</h1>
// 				<h1>Dia 5</h1>
// 				<h1>Dia 6</h1>
// 		</Collapsible>
// 		<Collapsible className='dia' trigger="Semana 3" triggerWhenOpen="Semana 3" triggerStyle={{fontSize:'5rem'}}>
// 		<h1>Dia 1</h1>
// 				<h1>Dia 2</h1>
// 				<h1>Dia 3</h1>
// 				<h1>Dia 4</h1>
// 				<h1>Dia 5</h1>
// 				<h1>Dia 6</h1>
// 		</Collapsible>
// 		<Collapsible className='dia black1' trigger="Semana 4" triggerWhenOpen="Semana 4" triggerStyle={{fontSize:'5rem'}}>
// 				<h1>Dia 1</h1>
// 				<h1>Dia 2</h1>
// 				<h1>Dia 3</h1>
// 				<h1>Dia 4</h1>
// 				<h1>Dia 5</h1>
// 				<h1>Dia 6</h1>
// 		</Collapsible>
// 		<Collapsible className='dia' trigger="Semana 5" triggerWhenOpen="Semana 5" triggerStyle={{fontSize:'5rem'}}>
// 			  <h1>Dia 1</h1>
// 				<h1>Dia 2</h1>
// 				<h1>Dia 3</h1>
// 				<h1>Dia 4</h1>
// 				<h1>Dia 5</h1>
// 				<h1>Dia 6</h1>
// 		</Collapsible>
// 		</div>
// 	)
// } else {
// 	Swal.fire({
// 		title:"Usuario no encontrado"
// 	})
// 	return(
// 		<h1>Contactanos para tu Programa de Entrenamiento</h1>
// 	)
// }
