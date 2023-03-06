import React from 'react'
import Collapsible from 'react-collapsible';
import Modal from 'react-modal';
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

	return (
		<div>
			<div className='miRutina'>
			 <img className='blxck' src="images/blxckLogo.png" alt="" />
		   <h1 className='red'>Bienvenidx</h1>
			</div>
			<Collapsible className='dia ' triggerWhenOpen="Semana 1"  triggerStyle={{fontSize:'5rem'}} trigger="Semana 1">
				<h1>Dia 1</h1>
				<h1>Dia 2</h1>
				<h1>Dia 3</h1>
				<h1>Dia 4</h1>
				<h1>Dia 5</h1>
				<h1>Dia 6</h1>
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
}

export default MiRutina