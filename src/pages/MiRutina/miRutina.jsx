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

	function whatsapp(){
		window.location.href="https://api.whatsapp.com/send?phone=525638686467"
	}

	function pressPechoMaquina(){
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

 function user(){
 }

 function pressMilitarMaquina(){
	Swal.fire({
		title: 'Press Militar en Maquina',
		imageUrl: 'images/pmm.png',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
 }

 function pulldownMaquina(){
	Swal.fire({
		title: 'Pulldown en Maquina',
		imageUrl: 'images/ppm.webp',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
 }

 function curlBicepsZ(){
	Swal.fire({
		title: 'Curl Biceps con barra Z',
		imageUrl: 'images/curlBicepsZDePie.jpeg',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
 }

 function copa2Manos(){
	Swal.fire({
		title: 'Copa a 2 Manos',
		imageUrl: 'images/copa2Manos.jpg',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
 }

 function sentadillaMancuerna(){
	Swal.fire({
		title: 'Sentadilla con Mancuerna',
		imageUrl: 'images/sentadillaMancuerna.webp',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
 }

 function pesoMuertoMancuerna(){
	Swal.fire({
		title: 'Peso Muerto con Mancuerna',
		imageUrl: 'images/pesoMuertoMancuerna.webp',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
 }

 function elevacionesLateralesMancuerna(){
	Swal.fire({
		title: 'Elevaciones Laterales con Mancuernas',
		imageUrl: 'images/elevacionesLateralesMancuerna.jpg',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
 }

 function elevacionesFrontalesMartillo(){
	Swal.fire({
		title: 'Elevaciones Frontales Martillo con Mancuernas',
		imageUrl: 'images/elevacionesFrontalesMartillo.webp',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
 }

 function curlBicepsMaquina(){
	Swal.fire({
		title: 'Curl Biceps en Maquina',
		imageUrl: 'images/curlBicepsMaquina.jpg',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
 }

 function curlBicepsMartilloMancuerna(){
	Swal.fire({
		title: 'Curl Biceps Martillo con Mancuernas',
		imageUrl: 'images/curlBicepsMartillo.png',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
 }

 function fondosMaquina(){
	Swal.fire({
		title: 'Peso Muerto con Mancuerna',
		imageUrl: 'images/fondosMaquina.jpg',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
 }

 function extencionCuadriceps(){	
	Swal.fire({
	title: 'Extencion de Cuadriceps en Maquina',
	imageUrl: 'images/extencionCuadriceps.webp',
	imageWidth: 400,
	imageHeight: 200,
	imageAlt: 'Custom image',
	confirmButtonText: "Entendido",
	confirmButtonColor:"black",
})
}

 function curlFemoralSentado(){	
	Swal.fire({
	title: 'Curl Femoral Sentado',
	imageUrl: 'images/curlFemoralSentado.png',
	imageWidth: 400,
	imageHeight: 200,
	imageAlt: 'Custom image',
	confirmButtonText: "Entendido",
	confirmButtonColor:"black",
})
}

 function abduccion(){	
	Swal.fire({
	title: 'Abduccion en Maquina',
	imageUrl: 'images/abduccionMAquina.webp',
	imageWidth: 400,
	imageHeight: 200,
	imageAlt: 'Custom image',
	confirmButtonText: "Entendido",
	confirmButtonColor:"black",
})
}

 function adduccion(){	
	Swal.fire({
	title: 'Aduccion en Maquina',
	imageUrl: 'images/adduccionMaquina.jpg',
	imageWidth: 400,
	imageHeight: 200,
	imageAlt: 'Custom image',
	confirmButtonText: "Entendido",
	confirmButtonColor:"black",
})
}

function remoMaquina(){
	Swal.fire({
		title: 'Remo en Maquina',
		imageUrl: 'images/remoMaquina.jpg',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
}

function pulloverPoleaAlta(){
	Swal.fire({
		title: 'Pullover en Polea Alta',
		imageUrl: 'images/pulloverPoleaAlta.jpg',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
}

function hiperextencionesMaquina(){
	Swal.fire({
		title: 'Hiperextenciones en Maquina',
		imageUrl: 'images/hiperextencionMaquina.jpg',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
}

function aperturasMaquina(){
	Swal.fire({
		title: 'Aperturas en Maquina',
		imageUrl: 'images/aperturasMaquina.jpg',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		confirmButtonText: "Entendido",
		confirmButtonColor:"black",
	})
}

	const usuario = prompt("Ingresa tu Usuario")

  if(usuario==="Flor"||usuario==="flor"||usuario==="migue"||usuario==="Migue"){
	return (	
		<div>
			<div className='miRutina'>
			 <img className='blxck' src="images/blxckLogo.png" alt="" />
			 <h1 className='red'>Bienvenida {usuario}</h1>
			</div>
			<Collapsible className='dia ' triggerWhenOpen="Semana 1"  triggerStyle={{fontSize:'5rem'}} trigger="Semana 1">
				<div className='justify'>
					<h1 className='red'>Dia 1 Hombro-Biceps-Triceps</h1>
					<p>1.-<a onClick={pressMilitarMaquina}>▶️</a>Press militar en maquina <a className='red'> 4 series 12/15 repeticiones</a></p>
					<p>2.-<a onClick={elevacionesLateralesMancuerna}>▶️</a>Elevaciones laterales con mancuernas<a className='red'> 4 series 12/15 repeticiones</a></p>
					<p>3.-<a onClick={elevacionesFrontalesMartillo}>▶️</a>Elevaciones frontales con mancuernas<a className='red'> 4 series 12/15 repeticiones</a></p>
					<p>4.-<a onClick={curlBicepsMaquina}>▶️</a>Curl biceps en maquina<a className='red'> 4 series 12/15 repeticiones</a></p>
					<p>5.-<a onClick={curlBicepsMartilloMancuerna}>▶️</a>Curl biceps martillo con mancuerna<a className='red'> 4 series 12/15 repeticiones</a></p>
					<p>6.-<a onClick={fondosMaquina}>▶️</a>Fondos en maquina<a className='red'> 4 series 12/15 repeticiones</a></p>
					<p>7.-<a onClick={copa2Manos}>▶️</a>Copa a 2 manos<a className='red'> 4 series 12/15 repeticiones</a></p>
				</div>
				<hr />
				<div className='justify'>
					<h1>Dia 2 Pierna</h1>
					<p>1.-<a onClick={extencionCuadriceps}>▶️</a>Extencion Cuadriceps en Maquina <a className='red'>4 series 15 repeticiones</a></p>
					<p>2.-<a onClick={curlFemoralSentado}>▶️</a>Curl Femoral en Maquina<a className='red'>4 series 15 repeticiones</a></p>
					<p>3.-<a onClick={abduccion}>▶️</a>Abdduccion<a className='red'>4 series 15 repeticiones</a></p>
					<p>4.-<a onClick={adduccion}>▶️</a>Adduccion<a className='red'>4 series 15 repeticiones</a></p>
					<p>5.-<a onClick={sentadillaMancuerna}>▶️</a>Sentadilla con Mancuerna<a className='red'>4 series 15 repeticiones</a></p>
					<p>6.-<a onClick={pesoMuertoMancuerna}>▶️</a>Peso Muerto con Mancuerna<a className='red'>4 series 15 repeticiones</a></p>
				</div>
				<hr />
				<div className='justify'>
					<h1 className='red'>Dia 3 Pecho-Espalda</h1>
					<p>1.-<a onClick={pressPechoMaquina}>▶️</a>Press pecho en maquina<a className='red'>4 series 15 repeticiones</a></p>
					<p>2.-<a onClick={aperturasMaquina}>▶️</a>Aperturas en maquina<a className='red'>4 series 15 repeticiones</a></p>
					<p>3.-<a onClick={pulldownMaquina}>▶️</a>Pulldown en Maquina<a className='red'>4 series 15 repeticiones</a></p>
					<p>4.-<a onClick={remoMaquina}>▶️</a>Remo en Maquina<a className='red'>4 series 15 repeticiones</a></p>
					<p>5.-<a onClick={pulloverPoleaAlta}>▶️</a>Pullover Polea Alta<a className='red'>4 series 15 repeticiones</a></p>
					<p>6.-<a onClick={hiperextencionesMaquina}>▶️</a>Hiperextenciones<a className='red'>4 series 15 repeticiones</a></p>
				</div>
				<hr />
				<div className='justify'>
				<h1 className='red'>Dia 4 Hombro-Biceps-Triceps</h1>
					<p>1.-<a onClick={pressMilitarMaquina}>▶️</a>Press militar en maquina <a className='red'> 4 series 12/15 repeticiones</a></p>
					<p>2.-<a onClick={elevacionesLateralesMancuerna}>▶️</a>Elevaciones laterales con mancuernas<a className='red'> 4 series 12/15 repeticiones</a></p>
					<p>3.-<a onClick={elevacionesFrontalesMartillo}>▶️</a>Elevaciones frontales con mancuernas<a className='red'> 4 series 12/15 repeticiones</a></p>
					<p>4.-<a onClick={curlBicepsMaquina}>▶️</a>Curl biceps en maquina<a className='red'> 4 series 12/15 repeticiones</a></p>
					<p>5.-<a onClick={curlBicepsMartilloMancuerna}>▶️</a>Curl biceps martillo con mancuerna<a className='red'> 4 series 12/15 repeticiones</a></p>
					<p>6.-<a onClick={fondosMaquina}>▶️</a>Fondos en maquina<a className='red'> 4 series 12/15 repeticiones</a></p>
					<p>7.-<a onClick={copa2Manos}>▶️</a>Copa a 2 manos<a className='red'> 4 series 12/15 repeticiones</a></p>
				</div>
				<hr />
				<div className='justify'>
					<h1 className='red'>Dia 5 fullbody</h1>
					<p>1.-<a>▶️</a>Press pecho en maquina <a className='red'>4 series 15 repeticiones</a></p>
					<p>2.-<a>▶️</a>Aperturas en maquina <a className='red'>4 series 15 repeticiones</a></p>
					<p>3.-<a>▶️</a>Lagartijas 4 <a className='red'>4 series 15 repeticiones</a></p>
					<p>4.-<a>▶️</a>Fondos en maquina <a className='red'>4 series 15 repeticiones</a></p>
					<p>5.-<a>▶️</a>Copa a 2 manos <a className='red'>4 series 15 repeticiones</a></p>
					<p>6.-<a>▶️</a>Jalones con cuerda en polea alta <a className='red'>4 series 15 repeticiones</a></p>
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
		<button onClick={whatsapp} className='button2'>¿Tienes alguna duda o problema con tu rutina?</button>
		<footer className="footer">
				<h1 className="lFooter">Blxck Training</h1>
				<img className="iFooter" src="images/blxckLogo.png" alt="" />
			</footer>
		</div>
	)
    } else if(usuario === "pepe"||usuario==="dani"||usuario==="Dani"||usuario==="dani "||usuario==="Dani "){
			return(
				<div>
	<div className='miRutina'>
	 <img className='blxck' src="images/blxckLogo.png" alt="" />
	 <h1 className='red'>Bienvenidx {usuario}</h1>
	</div>
	<Collapsible className='dia ' triggerWhenOpen="Semana 1"  triggerStyle={{fontSize:'5rem'}} trigger="Semana 1">
		<div className='justify'>
			<h1 className='red'>Dia 1 Fullbody</h1>
			<p>1.-<a onClick={pressMilitarMaquina}>▶️</a>Press militar en maquina <a className='red'>4 series 8/10 repeticiones-2ex/2con</a></p>
			<p>2.-<a onClick={pressPechoMaquina}>▶️</a>Press pecho en maquina <a className='red'>4 series 8/10 repeticiones-2ex/2con</a></p>
			<p>3.-<a onClick={pulldownMaquina}>▶️</a>Pulldown en maquina <a className='red'>4 series 8/10 repeticiones-2ex/2con</a></p>
			<p>4.-<a onClick={curlBicepsZ}>▶️</a>Curl biceps con barra z de pie <a className='red'>4 series 8/10 repeticiones-2ex/2con</a></p>
			<p>5.-<a onClick={copa2Manos}>▶️</a>Copa a 2 manos <a className='red'>4 series 8/10 repeticiones-2ex/2con</a></p>
			<p>6.-<a onClick={sentadillaMancuerna}>▶️</a>Sentadilla con mancuerna <a className='red'>4 series 8/10 repeticiones-2ex/2con</a></p>
			<p>7.-<a onClick={pesoMuertoMancuerna}>▶️</a>Peso muerto con mancuerna <a className='red'>4 series 8/10 repeticiones-2ex/2con</a></p>
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
<button onClick={whatsapp} className='button2'>¿Tienes alguna duda o problema con tu rutina?</button>
<footer className="footer">
		<h1 className="lFooter">Blxck Training</h1>
		<img className="iFooter" src="images/blxckLogo.png" alt="" />
	</footer>
</div>
			)
    } else {
	Swal.fire({
		title:"Usuario no encontrado",
		confirmButtonColor:"black",
	})
	return(
		<div className='black1'>
			<div className='black1'>
			 <img className='blxck' src="images/blxckLogo.png" alt="" />
			 <h1 className='red u'>Contactanos para programar tu entrenamiento.</h1>
			 <button onClick={whatsapp} className='button1'>Contactanos</button>
			</div>
			<footer className="footer">
				<h1 className="lFooter">Blxck Training</h1>
				<img className="iFooter" src="images/blxckLogo.png" alt="" />
			</footer>
		</div>
	)

}




}

export default MiRutina

