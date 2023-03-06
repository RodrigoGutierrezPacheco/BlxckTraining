import React from 'react'
import Collapsible from 'react-collapsible';
const MiRutina = () => {
	return (
		<div>
			<div className='miRutina'>
			 <img className='blxck' src="images/blxckLogo.png" alt="" />
		   <h1 className='red'>Bienvenidx</h1>
			</div>
			<Collapsible className='dia ' trigger="Semana 1">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
		<Collapsible className='dia black' trigger="Semana 2">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
		<Collapsible className='dia' trigger="Semana 3">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
		<Collapsible className='dia black' trigger="Semana 4">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
		<Collapsible className='dia' trigger="Semana 5">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
		</div>
	)
}

export default MiRutina