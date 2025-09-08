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








 {/* -----------------RUTINA NIVEL 1 SIN LESIONES PRINCIPIANTE ------ */}
							 {/* Rutina Semana #1  */}
							 <Collapsible open={false} trigger="Semana 1" className='dia ' triggerWhenOpen="Semana 1"  triggerStyle={{fontSize:'5rem'}}>
								 <div className='justify'>
									 <h1 className='red'>Dia 1 Full-Body</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>4 series 15 repeticiones, peso necesario para sacar las 15-17 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pressMilitarMaquina}>▶️</a>Press militar en maquina<a className='red'></a></p>
									 <p>2.-<a onClick={pressPechoMaquina}>▶️</a>press pecho en maquina<a className='red'></a></p>
									 <p>3.-<a onClick={pulldownMaquina}>▶️</a>pulldown en maquina<a className='red'></a></p>
									 <p>4.-<a onClick={curlBicepsMaquina}>▶️</a>curl biceps en maquina<a className='red'></a></p>
									 <p>5.-<a onClick={fondosMaquina}>▶️</a>fondos para triceps en maquina<a className='red'></a></p>
									 <p>6.-<a onClick={prensaCerrada}>▶️</a>prensa apertura a la anchura de la cadera<a className='red'></a></p>
									 <p>7.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral sentado en maquina<a className='red'></a></p>
									 <p>8.-<a onClick={abdomenInferiorMaquina}>▶️</a>abdomen en maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel 3</p>
								 </div>
								 <hr />
								 <div className='justify'>
										<h1>Dia 2 Pierna</h1>
										<p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
										<p className='red'>4 series 20 repeticiones, peso necesario para sacar las 20-22 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
										<p>1.-<a onClick={extencionCuadriceps}>▶️</a>extenciones cuadriceps en maquina<a className='red'></a></p>
										<p>2.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral en maquina<a className='red'></a></p>
										<p>3.-<a onClick={sentadillaMancuerna}>▶️</a>sentadilla sin peso<a className='red'></a></p>
										<p>4.-<a onClick={desplanteBulgaro}>▶️</a>desplantes bulgaros sin peso<a className='red'></a></p>
										<p>5.-<a onClick={pesoMuertoMancuerna}>▶️</a>peso muerto con mancuerna<a className='red'></a></p>
										<p>6.-<a onClick={adduccion}>▶️</a>adducciones en maquina<a className='red'></a></p>
										<p>7.-<a onClick={abduccion}>▶️</a>abducciones en maquina<a className='red'></a></p>
										<p>8.-<a onClick={abdomenInferiorLibre}>▶️</a>abdomen libre<a className='red'></a></p>
										<p>9.-<a onClick={pantorrillaLibre}>▶️</a>pantorrilla en maquina<a className='red'></a></p>
										<p className='red'>*Termina con programa cardio S8-Principiante-Nivel 3</p>
								 </div>
								 <hr />
								 <div className='justify'>
									 <h1 className='red'>Dia 3 Empuje</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>4 series 20 repeticiones, peso necesario para sacar las 20-22 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pressMilitarBarraPie}>▶️</a>Press militar con barra de pie<a className='red'></a></p>
									 <p>2.-<a onClick={hombroPosteriorPoleaBaja}>▶️</a>aperturas para posterior en polea<a className='red'></a></p>
									 <p>3.-<a onClick={pressPechoMancuernasBancoPlano}>▶️</a>press pecho con mancuernas<a className='red'></a></p>
									 <p>4.-<a onClick={aperturasMancuernasBancoInclinado}>▶️</a>aperturas con mancuernas en banco inclinado<a className='red'></a></p>
									 <p>5.-<a onClick={fondosMaquina}>▶️</a>fondos en maquina<a className='red'></a></p>
									 <p>6.-<a onClick={patadasMancuernas}>▶️</a>patada con mancuerna en banco<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel 2</p>
								 </div>
								 <hr />
								 <div className='justify'>
									 <h1 className='red'>Dia 4 pierna</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>4 series 20 repeticiones, peso necesario para sacar las 20-22 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={crunchesPiernasArriba}>▶️</a>abdomen<a className='red'></a></p>
									 <p>2.-<a onClick={extencionCuadriceps}>▶️</a>extencion cuadriceps maquina a 1 pierna<a className='red'></a></p>
									 <p>3.-<a onClick={sentadillaBarra}>▶️</a>sentadilla estricta con mancuerna *hasta abajo*<a className='red'></a></p>
									 <p>4.-<a onClick={desplantesEstaticos}>▶️</a>desplantes estaticos con barra<a className='red'></a></p>
									 <p>5.-<a onClick={prensaSumo}>▶️</a>prensa sumo para femoral<a className='red'></a></p>
									 <p>6.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral en maquina<a className='red'></a></p>
									 <p>7.-<a onClick={pantorrillaMaquina}>▶️</a>pantorrilla en maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel 2</p>
								 </div>
								 <hr />
								 <div className='justify'>
									 <h1 className='red'>Dia 5 fullbody</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p>1.-<a onClick={pressPechoMaquina}>▶️</a>Press pecho en maquina <a className='red'></a></p>
									 <p>2.-<a onClick={aperturasMaquina}>▶️</a>Aperturas en maquina <a className='red'></a></p>
									 <p>3.-<a onClick={elevacionesLateralesMancuerna}>▶️</a>Elevaciones Laterales con Mancuernas<a className='red'></a></p>
									 <p>4.-<a onClick={fondosMaquina}>▶️</a>Fondos en maquina <a className='red'></a></p>
									 <p>5.-<a onClick={copa2Manos}>▶️</a>Copa a 2 manos <a className='red'></a></p>
									 <p>6.-<a onClick={curlBicepsMartilloMancuerna}>▶️</a>Curl Biceps Martillo Sentado<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel1</p>
								 </div>
						 </Collapsible> 
						 {/* Rutina Semana #2  */}
						 <Collapsible open={false} className='dia black1' trigger="Semana 2" triggerWhenOpen="Semana 2" triggerStyle={{fontSize:'5rem'}}>
						 <div className='justify'>
									 <h1>--Dia 1 Pierna</h1>
										<p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
										<p className='red'>5 series 8-12 repeticiones,velocidad de ejecucion controlada menos en peso muerto y hipthrust, peso necesario para sacar mismas repeticiones en todas las series, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso , velocidad de ejecucion lenta a excepcion del peso muerto</p>
										<p>1.-<a onClick={extencionCuadriceps}>▶️</a>extenciones cuadriceps en maquina<a className='red'></a></p>
										<p>2.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral en maquina<a className='red'></a></p>
										<p>3.-<a onClick={sentadillaMancuerna}>▶️</a>sentadilla sin peso<a className='red'></a></p>
										<p>4.-<a onClick={desplanteBulgaro}>▶️</a>desplantes bulgaros sin peso<a className='red'></a></p>
										<p>5.-<a onClick={pesoMuertoMancuerna}>▶️</a>peso muerto con mancuerna<a className='red'></a></p>
										<p>6.-<a onClick={adduccion}>▶️</a>adducciones en maquina<a className='red'></a></p>
										<p>7.-<a onClick={abduccion}>▶️</a>abducciones en maquina<a className='red'></a></p>
										<p>8.-<a onClick={abdomenInferiorLibre}>▶️</a>abdomen libre<a className='red'></a></p>
										<p>9.-<a onClick={pantorrillaLibre}>▶️</a>pantorrilla en maquina<a className='red'></a></p>
										<p className='red'>*Termina con programa cardio S8-Principiante-Nivel 3</p>
								 </div>
								 <hr />
								 <div className='justify'>
										 <h1 className='red'>Dia 2 Full-Body</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>5 series 8-12 repeticiones, peso necesario para sacar mismas repeticiones en todas las series, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pressMilitarMaquina}>▶️</a>Press militar en maquina<a className='red'></a></p>
									 <p>2.-<a onClick={pressPechoMaquina}>▶️</a>press pecho en maquina<a className='red'></a></p>
									 <p>3.-<a onClick={pulldownMaquina}>▶️</a>pulldown en maquina<a className='red'></a></p>
									 <p>4.-<a onClick={curlBicepsMaquina}>▶️</a>curl biceps en maquina<a className='red'></a></p>
									 <p>5.-<a onClick={fondosMaquina}>▶️</a>fondos para triceps en maquina<a className='red'></a></p>
									 <p>6.-<a onClick={prensaCerrada}>▶️</a>prensa apertura a la anchura de la cadera<a className='red'></a></p>
									 <p>7.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral sentado en maquina<a className='red'></a></p>
									 <p>8.-<a onClick={abdomenInferiorMaquina}>▶️</a>abdomen en maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel 3</p>
								 </div>
								 <hr />
								 <div className='justify'>
									 <h1 className='red'>Dia 3 Empuje</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>5 series 8-12 repeticiones, peso necesario para sacar mismas repeticiones en todas las series, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pressMilitarBarraPie}>▶️</a>Press militar con barra de pie<a className='red'></a></p>
									 <p>2.-<a onClick={hombroPosteriorPoleaBaja}>▶️</a>aperturas para posterior en polea<a className='red'></a></p>
									 <p>3.-<a onClick={pressPechoMancuernasBancoPlano}>▶️</a>press pecho con mancuernas<a className='red'></a></p>
									 <p>4.-<a onClick={aperturasMancuernasBancoInclinado}>▶️</a>aperturas con mancuernas en banco inclinado<a className='red'></a></p>
									 <p>5.-<a onClick={fondosMaquina}>▶️</a>fondos en maquina<a className='red'></a></p>
									 <p>6.-<a onClick={patadasMancuernas}>▶️</a>patada con mancuerna en banco<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel 2</p>
								 </div>
								 <hr />
								 <div className='justify'>
									 <h1 className='red'>Dia 4 pierna</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>5 series 8-12 repeticiones, peso necesario para sacar mismas repeticiones en todas las series, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={crunchesPiernasArriba}>▶️</a>abdomen<a className='red'></a></p>
									 <p>2.-<a onClick={extencionCuadriceps}>▶️</a>extencion cuadriceps maquina a 1 pierna<a className='red'></a></p>
									 <p>3.-<a onClick={sentadillaBarra}>▶️</a>sentadilla estricta con mancuerna *hasta abajo*<a className='red'></a></p>
									 <p>4.-<a onClick={desplantesEstaticos}>▶️</a>desplantes estaticos con barra<a className='red'></a></p>
									 <p>5.-<a onClick={prensaSumo}>▶️</a>prensa sumo para femoral<a className='red'></a></p>
									 <p>6.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral en maquina<a className='red'></a></p>
									 <p>7.-<a onClick={pantorrillaMaquina}>▶️</a>pantorrilla en maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel 2</p>
								 </div>
								 <hr />
								 <div className='justify'>
									 <h1 className='red'>Dia 5 fullbody</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>5 series 8-12 repeticiones, peso necesario para sacar mismas repeticiones en todas las series, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pressPechoMaquina}>▶️</a>Press pecho en maquina <a className='red'></a></p>
									 <p>2.-<a onClick={aperturasMaquina}>▶️</a>Aperturas en maquina <a className='red'></a></p>
									 <p>3.-<a onClick={elevacionesLateralesMancuerna}>▶️</a>Elevaciones Laterales con Mancuernas<a className='red'></a></p>
									 <p>4.-<a onClick={fondosMaquina}>▶️</a>Fondos en maquina <a className='red'></a></p>
									 <p>5.-<a onClick={copa2Manos}>▶️</a>Copa a 2 manos <a className='red'></a></p>
									 <p>6.-<a onClick={curlBicepsMartilloMancuerna}>▶️</a>Curl Biceps Martillo Sentado<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel1</p>
								 </div>
						 </Collapsible>
						 {/*Rutina Semana #3*/}
						 <Collapsible open={false} className='dia' trigger="Semana 3" triggerWhenOpen="Semana 3" triggerStyle={{fontSize:'5rem'}}>
						 <div className='justify'>
						 <h1>--Dia 1 Pierna</h1>
										<p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
										<p className='red'>5 series 8-12 repeticiones,velocidad de ejecucion controlada menos en peso muerto y hipthrust, peso necesario para sacar mismas repeticiones en todas las series, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso , velocidad de ejecucion lenta a excepcion del peso muerto</p>
										<p>*.-<a onClick={abdomenInferiorLibre}>▶️</a>abdomen para inferior<a className='red'>4 series de 15-20 reps</a></p>
										<p>1.-<a onClick={extencionCuadriceps}>▶️</a>extenciones cuadriceps en maquina a una pierna<a className='red'></a></p>
										<p>2.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral en maquina a una pierna<a className='red'></a></p>
										<p>3.-<a onClick={sentadillaMancuerna}>▶️</a>sentadilla estricta hasta abajo<a className='red'></a></p>
										<p>4.-<a onClick={desplanteBulgaro}>▶️</a>desplantes bulgaros<a className='red'></a></p>
										<p>5.-<a onClick={pesoMuertoBarra}>▶️</a>peso muerto con barra<a className='red'></a></p>
										<p>6.-<a onClick={adduccion}>▶️</a>adducciones en maquina<a className='red'></a></p>
										<p>7.-<a onClick={abduccion}>▶️</a>abducciones en maquina<a className='red'></a></p>
										<p>8.-<a onClick={hipthrusPoleaBaja}>▶️</a>hip thrust en polea baja<a className='red'></a></p>
										<p>9.-<a onClick={pantorrillaLibre}>▶️</a>pantorrilla en maquina<a className='red'></a></p>
										<p className='red'>*Termina con programa cardio S8-Principiante-Nivel 3</p>
								 </div>
								 <hr />
								 <div className='justify'>
										<h1>Dia 2 Empuje</h1>
										<p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>4 series 15 repeticiones, peso necesario para sacar las 15 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pressMilitarMaquina}>▶️</a>Press Militar en maquina agarre cerrado<a className='red'></a></p>
									 <p>2.-<a onClick={elevacionesFrontalesDisco}>▶️</a>elevaciones frontales con disco<a className='red'></a></p>
									 <p>3.-<a onClick={hombroPosteriorPoleaBaja}>▶️</a>hombro posterior en polea<a className='red'></a></p>
									 <p>4.-<a onClick={lagartijasMilitares}>▶️</a>lagartijas militares<a className='red'></a></p>
									 <p>5.-<a onClick={patadasMancuernas}>▶️</a>patadas con mancuerna<a className='red'></a></p>
									 <p>6.-<a onClick={extencionCuadriceps}>▶️</a>extenciones cuadriceps en maquina<a className='red'></a></p>
									 <p>7.-<a onClick={desplanteBulgaro}>▶️</a>desplante bulgaro sin peso<a className='red'></a></p>
									 <p>8.-<a onClick={crunchesPiernasArriba}>▶️</a>abdominales<a className='red'> 4 series de 30 segundos</a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel2</p>
								 </div>
								 <hr />
								 <div className='justify'>
									 <h1 className='red'>Dia 3 Jalon</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>4 series 15 repeticiones, peso necesario para sacar las 15 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pulldownMaquina}>▶️</a>Pulldown en Maquina<a className='red'></a></p>
									 <p>2.-<a onClick={remoMaquina}>▶️</a>Remo en Maquina<a className='red'></a></p>
									 <p>3.-<a onClick={curlBicepsMartilloMancuerna}>▶️</a>Curl Biceps de Pie con mancuernas<a className='red'></a></p>
									 <p>4.-<a onClick={curlBicepsMaquinaScott}>▶️</a>Curl biceps en maquina Scott<a className='red'></a></p>
									 <p>5.-<a onClick={prensaSumo}>▶️</a>Prensa, apertura de las piernas tipo sumo<a className='red'></a></p>
									 <p>6.-<a onClick={curlFemoralSentado}>▶️</a>Curl Femoral Maquina<a className='red'></a></p>
									 <p>7.-<a onClick={pantorrillaMaquina}>▶️</a>Pantorrilla en Maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel2</p>
								 </div>
								 <hr />
								 <div className='justify'>
								 <h1>Dia 4 Empuje</h1>
								 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
								 <p className='red'>4 series 15 repeticiones, peso necesario para sacar las 15 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pressMilitarMaquina}>▶️</a>Press Militar en maquina agarre cerrado<a className='red'></a></p>
									 <p>2.-<a onClick={elevacionesFrontalesDisco}>▶️</a>elevaciones frontales con disco<a className='red'></a></p>
									 <p>3.-<a onClick={hombroPosteriorPoleaBaja}>▶️</a>hombro posterior en polea<a className='red'></a></p>
									 <p>4.-<a onClick={lagartijasMilitares}>▶️</a>lagartijas militares<a className='red'></a></p>
									 <p>5.-<a onClick={patadasMancuernas}>▶️</a>patadas con mancuerna<a className='red'></a></p>
									 <p>6.-<a onClick={extencionCuadriceps}>▶️</a>extenciones cuadriceps en maquina<a className='red'></a></p>
									 <p>7.-<a onClick={desplanteBulgaro}>▶️</a>desplante bulgaro sin peso<a className='red'></a></p>
									 <p>8.-<a onClick={crunchesPiernasArriba}>▶️</a>abdominales<a className='red'> 4 series de 30 segundos</a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel2</p>
								 </div>
								 <hr />
								 <div className='justify'>
								 <h1 className='red'>Dia 5 pecho-espalda</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>5 series 8-12  repeticiones, peso elevado-pesado , descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>*.-<a onClick={abdomenInferiorLibre}>▶️</a>abdomen para inferior<a className='red'>4 series de 15-20 reps</a></p>
									 <p>1.-<a onClick={pressPechoMaquina}>▶️</a>press pecho en maquina<a className='red'></a></p>
									 <p>2.-<a onClick={aperturasMaquina}>▶️</a>aperturas en maquina<a className='red'></a></p>
									 <p>3.-<a onClick={pulldownMaquina}>▶️</a>pulldown en maquina<a className='red'></a></p>
									 <p>4.-<a onClick={remoMaquina}>▶️</a>remo en maquina<a className='red'></a></p>
									 <p>5.-<a onClick={pulloverPoleaAlta}>▶️</a>pullover en polea alta<a className='red'></a></p>
									 <p>6.-<a onClick={abdomenInferiorMaquina}>▶️</a>abdomen inferior en maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel 3</p>
								 </div>
						 </Collapsible>
						 {/* Rutina semana 4 */}
						 <Collapsible open={true} className='dia black1' trigger="Semana 4" triggerWhenOpen="Semana 4" triggerStyle={{fontSize:'5rem'}}>
						 <div className='justify'>
									 <h1 className='red'>Dia 1 Hombro-Bicep-tricep</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>5 series 8-12 repeticiones, peso pesado ritmo controlado, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pressMilitarMaquina}>▶️</a>Press militar en maquina<a className='red'></a></p>
									 <p>2.-<a onClick={elevacionesFrontalesDisco}>▶️</a>Elevaciones frontales con disco<a className='red'></a></p>
									 <p>3.-<a onClick={hombroPosteriorPoleaBaja}>▶️</a>Hombro posterior en polea baja<a className='red'></a></p>
									 <p>4.-<a onClick={encogimientosHombrosMancuernas}>▶️</a>encogimientos de hombros con mancuernas<a className='red'></a></p>
									 <p>5.-<a onClick={curlBicepsMaquinaScott}>▶️</a>curl biceps en maquina scott<a className='red'></a></p>
									 <p>6.-<a onClick={curlBicepsRotacionPie}>▶️</a>curl biceps con rotacion de pie<a className='red'></a></p>
									 <p>7.-<a onClick={jalonesPoleaAlta}>▶️</a>jalones en polea alta<a className='red'></a></p>
									 <p>8.-<a onClick={fondosMaquina}>▶️</a>fondos en maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel 2</p>
								 </div>
								 <hr />
								 <div className='justify'>
										<h1>Dia 2 Espalda</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>5 series 8-12 repeticiones, peso pesado ritmo controlado, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pulldownPolea}>▶️</a>pulldown en polea<a className='red'></a></p>
									 <p>2.-<a onClick={remoMaquina}>▶️</a>remo en maquina<a className='red'></a></p>
									 <p>3.-<a onClick={remoMancuerna}>▶️</a>remo con mancuerna<a className='red'></a></p>
									 <p>4.-<a onClick={pulloverPoleaAlta}>▶️</a>pullover en polea alta<a className='red'></a></p>
									 <p>5.-<a onClick={espaldaBajaMaquina}>▶️</a>espalda baja en maquina<a className='red'></a></p>
									 <p>6.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral sentado<a className='red'></a></p>
									 <p>7.-<a onClick={prensaSumo}>▶️</a>prensa tipo sumo<a className='red'></a></p>
									 <p>8.-<a onClick={pantorrillaLibre}>▶️</a>pantorrilla en maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel 2</p>
								 </div>
								 <hr />
								 <div className='justify'>
									 <h1 className='red'>Dia 3 pecho-espalda</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>4 series 15 repeticiones, peso necesario para sacar las 20 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pressPechoMaquina}>▶️</a>press pecho en maquina<a className='red'></a></p>
									 <p>2.-<a onClick={aperturasMaquina}>▶️</a>aperturas en maquina<a className='red'></a></p>
									 <p>3.-<a onClick={pulldownMaquina}>▶️</a>pulldown en maquina<a className='red'></a></p>
									 <p>4.-<a onClick={remoMaquina}>▶️</a>remo en maquina<a className='red'></a></p>
									 <p>5.-<a onClick={pulloverPoleaAlta}>▶️</a>pullover en polea alta<a className='red'></a></p>
									 <p>6.-<a onClick={abdomenInferiorMaquina}>▶️</a>abdomen inferior en maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nive3</p>
								 </div>
								 <hr />
								 <div className='justify'>
									 <h1>Dia 4 Jalon</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>4 series 15 repeticiones, peso necesario para sacar las 20 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pulldownMaquina}>▶️</a>Pulldown en Maquina<a className='red'></a></p>
									 <p>2.-<a onClick={remoMaquina}>▶️</a>Remo en Maquina<a className='red'></a></p>
									 <p>3.-<a onClick={curlBicepsMartilloMancuerna}>▶️</a>Curl Biceps de Pie con mancuernas<a className='red'></a></p>
									 <p>4.-<a onClick={curlBicepsMaquinaScott}>▶️</a>Curl biceps en maquina Scott<a className='red'></a></p>
									 <p>5.-<a onClick={prensaSumo}>▶️</a>Prensa, apertura de las piernas tipo sumo<a className='red'></a></p>
									 <p>6.-<a onClick={curlFemoralSentado}>▶️</a>Curl Femoral Maquina<a className='red'></a></p>
									 <p>7.-<a onClick={pantorrillaMaquina}>▶️</a>Pantorrilla en Maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel2</p>
								 </div>
								 <hr />
								 <div className='justify'>
									 <h1 className='red'>Dia 5 Empuje</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>4 series 15 repeticiones, peso necesario para sacar las 20 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pressMilitarMaquina}>▶️</a>Press Militar en maquina<a className='red'></a></p>
									 <p>2.-<a onClick={elevacionesLateralesMancuerna}>▶️</a>elevaciones laterales con mancuerna<a className='red'></a></p>
									 <p>3.-<a onClick={pressPechoMaquina}>▶️</a>press pecho en maquina<a className='red'></a></p>
									 <p>4.-<a onClick={aperturasMaquina}>▶️</a>aperturas en maquian<a className='red'></a></p>
									 <p>5.-<a onClick={sentadillaMancuerna}>▶️</a>Sentadilla con Mancuerna<a className='red'></a></p>
									 <p>6.-<a onClick={extencionCuadriceps}>▶️</a>extenciones cuadriceps en maquina<a className='red'></a></p>
									 <p>7.-<a onClick={crunchMaquina}>▶️</a>abdominales crunch en maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel2</p>
								 </div>
						 </Collapsible>
						 {/* Rutina semana 5 */}
						 <Collapsible open={false} className='dia' trigger="Semana 5" triggerWhenOpen="Semana 5" triggerStyle={{fontSize:'5rem'}}>
						 <div className='justify'>
									 <h1 className='red'>Dia 1 Torso</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>4 series 20 repeticiones, peso necesario para sacar las 20 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pressMilitarNeutroMancuernas}>▶️</a>press militar neutro con mancuernas de pie<a className='red'></a></p>
									 <p>2.-<a onClick={pulldownSupino}>▶️</a>pulldown agarre supino "invertido"<a className='red'></a></p>
									 <p>3.-<a onClick={cristosBancoInclinado}>▶️</a>cristos en banco inclinado<a className='red'></a></p>
									 <p>4.-<a onClick={curlBicepsPoleaBajaCuerda}>▶️</a>curl biceps en polea baja con cuerdas<a className='red'></a></p>
									 <p>5.-<a onClick={jalonTrasNucaPoleaAlta}>▶️</a>jalones tras nuca en polea alta<a className='red'></a></p>
									 <p>6.-<a onClick={sentadillaBarra}>▶️</a>sentadilla con barra<a className='red'></a></p>
									 <p>7.-<a onClick={pesoMuertoPoleaBaja}>▶️</a>peso muerto en polea baja<a className='red'></a></p>
									 <p>8.-<a onClick={pantorrillaMaquina}>▶️</a>pantorrilla en maquina<a className='red'></a></p>
									 <p>9.-<a onClick={crunchesPiernasArriba}>▶️</a>abdomen<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel 2</p>
								 </div>
								 <hr />
								 <div className='justify'>
										<h1>Dia 2 cuadriceps</h1>
										<p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>4 series 20 repeticiones, peso necesario para sacar las 20 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={extencionCuadriceps}>▶️</a>extencion cuadriceps en maquina<a className='red'></a></p>
									 <p>2.-<a onClick={prensaCerrada}>▶️</a>prensa para cuadriceps posicion cerrada<a className='red'></a></p>
									 <p>3.-<a onClick={desplantesEstaticos}>▶️</a>desplante estatico con mancuernas<a className='red'></a></p>
									 <p>4.-<a onClick={sentadillaMancuerna}>▶️</a>sentadilla<a className='red'></a></p>
									 <p>5.-<a onClick={sentadillaIsometrica}>▶️</a>sentadilla isometrica<a className='red'></a></p>
									 <p>6.-<a onClick={abduccion}>▶️</a>abducciones en maquina<a className='red'></a></p>
									 <p>7.-<a onClick={hipThrust}>▶️</a>hip thrust con mancuerna<a className='red'></a></p>
									 <p>8.-<a onClick={pantorrillaLibre}>▶️</a>pantorrilla en maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel 2</p>
								 </div>
								 <hr />
								 <div className='justify'>
									 <h1 className='red'>Dia 3 pecho-espalda</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>4 series 20 repeticiones, peso necesario para sacar las 20 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pressPechoMaquina}>▶️</a>press pecho en maquina<a className='red'></a></p>
									 <p>2.-<a onClick={aperturasMaquina}>▶️</a>aperturas en maquina<a className='red'></a></p>
									 <p>3.-<a onClick={pulldownMaquina}>▶️</a>pulldown en maquina<a className='red'></a></p>
									 <p>4.-<a onClick={remoMaquina}>▶️</a>remo en maquina<a className='red'></a></p>
									 <p>5.-<a onClick={pulloverPoleaAlta}>▶️</a>pullover en polea alta<a className='red'></a></p>
									 <p>6.-<a onClick={abdomenInferiorMaquina}>▶️</a>abdomen inferior en maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nive3</p>
								 </div>
								 <hr />
								 <div className='justify'>
									 <h1>Dia 4 Jalon</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>4 series 20 repeticiones, peso necesario para sacar las 20 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pulldownMaquina}>▶️</a>Pulldown en Maquina<a className='red'></a></p>
									 <p>2.-<a onClick={remoMaquina}>▶️</a>Remo en Maquina<a className='red'></a></p>
									 <p>3.-<a onClick={curlBicepsMartilloMancuerna}>▶️</a>Curl Biceps de Pie con mancuernas<a className='red'></a></p>
									 <p>4.-<a onClick={curlBicepsMaquinaScott}>▶️</a>Curl biceps en maquina Scott<a className='red'></a></p>
									 <p>5.-<a onClick={prensaSumo}>▶️</a>Prensa, apertura de las piernas tipo sumo<a className='red'></a></p>
									 <p>6.-<a onClick={curlFemoralSentado}>▶️</a>Curl Femoral Maquina<a className='red'></a></p>
									 <p>7.-<a onClick={pantorrillaMaquina}>▶️</a>Pantorrilla en Maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel2</p>
								 </div>
								 <hr />
								 <div className='justify'>
									 <h1 className='red'>Dia 5 Empuje</h1>
									 <p className='red'>*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
									 <p className='red'>4 series 20 repeticiones, peso necesario para sacar las 20 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso</p>
									 <p>1.-<a onClick={pressMilitarMaquina}>▶️</a>Press Militar en maquina<a className='red'></a></p>
									 <p>2.-<a onClick={elevacionesLateralesMancuerna}>▶️</a>elevaciones laterales con mancuerna<a className='red'></a></p>
									 <p>3.-<a onClick={pressPechoMaquina}>▶️</a>press pecho en maquina<a className='red'></a></p>
									 <p>4.-<a onClick={aperturasMaquina}>▶️</a>aperturas en maquian<a className='red'></a></p>
									 <p>5.-<a onClick={sentadillaMancuerna}>▶️</a>Sentadilla con Mancuerna<a className='red'></a></p>
									 <p>6.-<a onClick={extencionCuadriceps}>▶️</a>extenciones cuadriceps en maquina<a className='red'></a></p>
									 <p>7.-<a onClick={crunchMaquina}>▶️</a>abdominales crunch en maquina<a className='red'></a></p>
									 <p className='red'>*Termina con programa cardio S8-Principiante-Nivel2</p>
								 </div>
						 </Collapsible>