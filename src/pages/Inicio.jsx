import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
  const navigate = useNavigate();

  const goToInicio = () => {
    navigate('/inicio');
  };

  return (
    <div>
      <button className="button1 pointer" onClick={goToInicio}>
        Entrar
      </button>
    </div>
  );
};

export default Inicio;
