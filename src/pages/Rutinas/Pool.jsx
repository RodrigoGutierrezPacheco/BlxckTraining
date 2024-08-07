import React from 'react'
import Ejercicios from '../Ejercicios'
import Swal from 'sweetalert2'
import Collapsible from 'react-collapsible'

const Pool = () => {
  function whatsapp() {
    window.location.href = 'https://api.whatsapp.com/send?phone=525638686467'
  }

  function pressPechoMaquina() {
    Swal.fire({
      title: 'Press Pecho en Maquina',
      imageUrl: 'images/pressPechoMaquina.jpeg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pressMilitarMaquina() {
    Swal.fire({
      title: 'Press Militar en Maquina',
      imageUrl: 'images/pressMilitarMaquina.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pulldownMaquina() {
    Swal.fire({
      title: 'Pulldown en Maquina',
      imageUrl: 'images/ppm.webp',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlBicepsZ() {
    Swal.fire({
      title: 'Curl Biceps con barra Z',
      imageUrl: 'images/curlBicepsZDePie.jpeg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function copa2Manos() {
    Swal.fire({
      title: 'Copa a 2 Manos',
      imageUrl: 'images/copa2Manos.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function sentadillaMancuerna() {
    Swal.fire({
      title: 'Sentadilla con Mancuerna',
      imageUrl: 'images/sentadillaMancuerna.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function sentadillaIsometrica() {
    Swal.fire({
      title: 'Sentadilla estatica sin peso',
      imageUrl: 'images/sentadillaIsometrica.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pesoMuertoMancuerna() {
    Swal.fire({
      title: 'Peso Muerto con Mancuerna',
      imageUrl: 'images/pesoMuertoMancuerna.webp',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function elevacionesLateralesMancuerna() {
    Swal.fire({
      title: 'Elevaciones Laterales con Mancuernas',
      imageUrl: 'images/elevacionesLateralesMancuerna.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function elevacionesFrontalesMartillo() {
    Swal.fire({
      title: 'Elevaciones Frontales Martillo con Mancuernas',
      imageUrl: 'images/elevacionesFrontalesMartillo.webp',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlBicepsMaquina() {
    Swal.fire({
      title: 'Curl Biceps en Maquina',
      imageUrl: 'images/curlBicepsMaquina.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlBicepsMancuernas() {
    Swal.fire({
      title: 'Curl Biceps con mancuernas',
      imageUrl: 'images/curlBicepsMancuernasSupino.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlBicepsMartilloMancuerna() {
    Swal.fire({
      title: 'Curl Biceps Martillo con Mancuernas',
      imageUrl: 'images/curlBicepsMartillo.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function copaUnaMano() {
    Swal.fire({
      title: 'copa a una mano con mancuerna sentado o de pie',
      imageUrl: 'images/copaUnaMano.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function fondosMaquina() {
    Swal.fire({
      title: 'Fondos en Maquina',
      imageUrl: 'images/fondosMaquina.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function extencionCuadriceps() {
    Swal.fire({
      title: 'Extencion de Cuadriceps en Maquina',
      imageUrl: 'images/extencionCuadriceps.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlFemoralSentado() {
    Swal.fire({
      title: 'Curl Femoral Sentado',
      imageUrl: 'images/curlFemoralSentado.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function abduccion() {
    Swal.fire({
      title: 'Abduccion en Maquina',
      imageUrl: 'images/abduccionMaquina.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function adduccion() {
    Swal.fire({
      title: 'Aduccion en Maquina',
      imageUrl: 'images/adduccionMaquina.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pantorrillaLibre() {
    Swal.fire({
      title: 'pantorrilla en step sin peso',
      imageUrl: 'images/pantorrillaLibre.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function hipThrust() {
    Swal.fire({
      title: 'Hip thrust con mancuerna en banco',
      imageUrl: 'images/hipThrust.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function remoMaquina() {
    Swal.fire({
      title: 'Remo en Maquina',
      imageUrl: 'images/remoMaquina.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pulloverPoleaAlta() {
    Swal.fire({
      title: 'Pullover en Polea Alta',
      imageUrl: 'images/pulloverPoleaAlta.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function hiperextencionesMaquina() {
    Swal.fire({
      title: 'Hiperextenciones en Maquina',
      imageUrl: 'images/hiperextencionMaquina.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function aperturasMaquina() {
    Swal.fire({
      title: 'Aperturas en Maquina',
      imageUrl: 'images/aperturasMaquina.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlBicepsMaquinaScott() {
    Swal.fire({
      title: 'Curl Biceps Maquina Scott',
      imageUrl: 'images/curlBicepsMaquinaScott.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function prensaCerrada() {
    Swal.fire({
      title: 'prensa, apertura de las piernas a la anchura de los hombros',
      imageUrl: 'images/prensaCerrada.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function desplantesEstaticos() {
    Swal.fire({
      title: 'desplantes estáticos con mancuerna o mancuernas',
      imageUrl: 'images/desplanteConMancuerna.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function prensaSumo() {
    Swal.fire({
      title: 'prensa sumo, apertura de los pies a la anchura de los hombros',
      imageUrl: 'images/prensaSumo.jpg',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pantorrillaMaquina() {
    Swal.fire({
      title: 'pantorrilla en maquina',
      imageUrl: 'images/pantorrillaMaquina.jpg',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function crunchMaquina() {
    Swal.fire({
      title: 'Abdominal Crunch en maquina',
      imageUrl: 'images/crunchMaquina.jpg',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pressMilitarBarraSentado() {
    Swal.fire({
      title: 'press militar barra sentado',
      imageUrl: 'images/pressMilitarBarraSentado.png',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pressMilitarNeutroMancuernas() {
    Swal.fire({
      title: 'press agarre neutro con mancuernas',
      imageUrl: 'images/pressMilitarNeutroMancuernas.jpg',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function elevacionesFrontalesProno() {
    Swal.fire({
      title: 'elevaciones frontales prono con mancuernas',
      imageUrl: 'images/elevacionesFrontalesProno.jpeg',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function remoMentonBarra() {
    Swal.fire({
      title: 'remo al menton con barra',
      imageUrl: 'images/remoMentonBarra.jpeg',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function encogimientosHombrosMancuernas() {
    Swal.fire({
      title: 'encogimientos laterales con mancuernas',
      imageUrl: 'images/encogimientosLateralesMancuernas.jpeg',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlBicepsRotacionPie() {
    Swal.fire({
      title: 'curl de biceps con rotacion de pie',
      imageUrl: 'images/curlBicepsRotacionMancuernas.jpeg',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlMartilloSentado() {
    Swal.fire({
      title: 'Abdominal Crunch en maquina',
      imageUrl: 'images/curlMartilloSentado.jpeg',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function patadasMancuernas() {
    Swal.fire({
      title: 'patadas con mancuerna',
      imageUrl: 'images/patadasMancuerna.png',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function jalonesPoleaAlta() {
    Swal.fire({
      title: 'jalones en polea alta con cuerdas',
      imageUrl: 'images/jalonesPoleaAltaCuerdaTriceps.jpeg',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlConcentrado() {
    Swal.fire({
      title: 'curl concentrado con mancuerna',
      imageUrl: 'images/curlConcentrado.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function elevacionesFrontalesDisco() {
    Swal.fire({
      title: 'elevaciones frontales con disco',
      imageUrl: 'images/elevacionFrontalDisco.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function abdomenInferiorMaquina() {
    Swal.fire({
      title: 'abdomen inferior en maquina',
      imageUrl: 'images/abdomenInferiorMaquina.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function sentadillaBarra() {
    Swal.fire({
      title: 'Sentadilla con barra',
      imageUrl: 'images/sentadillaBarra.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function fondosBanco() {
    Swal.fire({
      title: 'fondos en banco',
      imageUrl: 'images/fondosBanco.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function crunchSuelo() {
    Swal.fire({
      title: 'crunches en suelo',
      imageUrl: 'images/crunchSuelo.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function sentadillaBancoSinPeso() {
    Swal.fire({
      title: 'sentadilla en cualquier banco sin peso',
      imageUrl: 'images/sentadillaBancoSinPeso.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function facepull() {
    Swal.fire({
      title: 'Facepull en polea',
      imageUrl: 'images/facepull.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function elevacionesLateralesPoleaBaja() {
    Swal.fire({
      title: 'elevaciones laterales en polea baja',
      imageUrl: 'images/elevacionesLateralesPoleaBaja.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pressFrancesMancuernas() {
    Swal.fire({
      title: 'press frances neutro con mancuernas en banco plano',
      imageUrl: 'images/pressFrancesMancuernas.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function lagartijasMilitares() {
    Swal.fire({
      title: 'lagartijas militares, completas o medias',
      imageUrl: 'images/lagartijasMilitares.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pulldownPolea() {
    Swal.fire({
      title: 'pulldown en polea agarre prono',
      imageUrl: 'images/pulldownPolea.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function remoMancuerna() {
    Swal.fire({
      title: 'remo con mancuerna en banco',
      imageUrl: 'images/remoMancuerna.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlMancuernaRotacion() {
    Swal.fire({
      title: 'curl rotacion con mancuernas',
      imageUrl: 'images/curlMancuernaRotacion.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pesoMuertoPoleaBaja() {
    Swal.fire({
      title: 'peso muerto en polea baja',
      imageUrl: 'images/pesoMuertoPoleaBaja.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function abdomenInferiorLibre() {
    Swal.fire({
      title: 'tijeras para abdomen inferior en suelo',
      imageUrl: 'images/abdomenInferiorLibre.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function crunchesSuelo() {
    Swal.fire({
      title: 'crunches para abdomen en suelo',
      imageUrl: 'images/crunchesSuelo.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function hombroPosteriorPoleaBaja() {
    Swal.fire({
      title: 'aperturas para hombro posterior en polea baja',
      imageUrl: 'images/hombroPosteriorPoleaBaja.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function desplanteBulgaro() {
    Swal.fire({
      title: 'desplante bulgaro en banco',
      imageUrl: 'images/desplanteBulgaro.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function crunchesPiernasArriba() {
    Swal.fire({
      title: 'crunches con piernas arriba en suelo',
      imageUrl: 'images/crunchPiernasArriba.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pressMilitarBarraPie() {
    Swal.fire({
      title: 'press militar con barra de pie',
      imageUrl: 'images/pressMilitarBarraPie.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pulldownSupino() {
    Swal.fire({
      title: 'pulldown agarre supino/invertido en maquina',
      imageUrl: 'images/pulldownSupino.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function cristosBancoInclinado() {
    Swal.fire({
      title: 'cristos con mancuernas en banco inclinado',
      imageUrl: 'images/cristosBancoInclinado.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function jalonTrasNucaPoleaAlta() {
    Swal.fire({
      title: 'jalon tras nuca en polea alta para triceps',
      imageUrl: 'images/jalonTrasNucaPoleaAlta.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlBicepsPoleaBajaCuerda() {
    Swal.fire({
      title: 'curl de biceps en polea baja con cuerda',
      imageUrl: 'images/curlBicepsPoleaBajaCuerda.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }
  function pressPechoMancuernasBancoPlano() {
    Swal.fire({
      title: 'press pecho con mancuernas en banco plano',
      imageUrl: 'images/pressPechoMancuernasBanco.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function aperturasMancuernasBancoInclinado() {
    Swal.fire({
      title: 'aperturas con mancuernas en banco inclinado',
      imageUrl: 'images/aperturasMancuernasBancoInclinado.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pesoMuertoBarra() {
    Swal.fire({
      title: 'peso muerto con barra',
      imageUrl: 'images/pesoMuertoBarra.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function hipthrusPoleaBaja() {
    Swal.fire({
      title: 'hip thrust en polea baja',
      imageUrl: 'images/hipthrusPoleaBaja.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function espaldaBajaMaquina() {
    Swal.fire({
      title: 'espalda baja en maquina',
      imageUrl: 'images/espaldaBajaMaquina.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function buenosDiasBarra() {
    Swal.fire({
      title: 'Buenos dias con barra',
      imageUrl: 'images/buenosDiasBarra.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pressPechoBarraInclinado() {
    Swal.fire({
      title: 'Press pecho con barra en banco inclinado',
      imageUrl: 'images/pressPechoBarraInclinado.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function elevacionesLateralesMancuernasSentado() {
    Swal.fire({
      title: 'elevaciones laterales en banco con mancuernas',
      imageUrl: 'images/elevacionesLateralesMancuernasSentado.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pressArnoldSentado() {
    Swal.fire({
      title: 'press arnold con mancuernas sentado',
      imageUrl: 'images/pressArnoldSentado.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function fondosAsistidos() {
    Swal.fire({
      title: 'fondos asistidos en maquina',
      imageUrl: 'images/fondosMaquinaAsistida.jpg',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function elevacionesLateralesInclinado() {
    Swal.fire({
      title: 'elevaciones laterales inclinado con mancuernas',
      imageUrl: 'images/elevacionesLateralesInclinado.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlBicepsInclinado() {
    Swal.fire({
      title: 'curl de biceps con mancuernas en banco inclinado',
      imageUrl: 'images/curlBicepsInclinado.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlInvertidoBarra() {
    Swal.fire({
      title: 'curl de biceps invetrido con barra',
      imageUrl: 'images/curlInvertidoBarra.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function remoBarra() {
    Swal.fire({
      title: 'remo con barra',
      imageUrl: 'images/remoBarra.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }
  function pressPechoInclinadoMancuernas() {
    Swal.fire({
      title: 'press pecho inclinado con mancuernas',
      imageUrl: 'images/pressPechoInclinadoMancuernas.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function crossOverPoleaAlta() {
    Swal.fire({
      title: 'crossover en polea alta',
      imageUrl: 'images/crossoverPoleaAlta.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function desplantesCaminando() {
    Swal.fire({
      title: 'desplantes caminando con mancuernas o barra',
      imageUrl: 'images/desplantesCaminando.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function patadasGluteo() {
    Swal.fire({
      title: 'patadas para gluteo en polea baja',
      imageUrl: 'images/patadaGluteo.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function curlAlternado() {
    Swal.fire({
      title: 'curl alternado con mancuernas',
      imageUrl: 'images/curlAlternado.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }
  function pajaros() {
    Swal.fire({
      title: 'pajaros con mancuernas',
      imageUrl: 'images/pajaros.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }
  function sentadillaFrontalBarra() {
    Swal.fire({
      title: 'sentadilla frontal con barra',
      imageUrl: 'images/sentadillaFrontalBarra.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }
  function remoNeutroPolea() {
    Swal.fire({
      title: 'remo neutro en polea',
      imageUrl: 'images/remoNeutroPolea.webp',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }
  function dominadasAsistidas() {
    Swal.fire({
      title: 'dominadas asistidas',
      imageUrl: 'images/dominadasAsistidas.png',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }
  function espaldaBajaLibre() {
    Swal.fire({
      title: 'sentadilla frontal con barra',
      imageUrl: 'images/espaldaBajaLibre.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function encogimientosBarra() {
    Swal.fire({
      title: 'encogimientos frontales con barra para trapecios',
      imageUrl: 'images/encogimientosBarra.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function abdomenInferiorPiernasCompletas() {
    Swal.fire({
      title: 'elevaciones de piernas completas en suelo o banco',
      imageUrl: 'images/abdomenInferiorSueloPiernasCompletas.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function planchaIsometrica() {
    Swal.fire({
      title: 'Planchas isometricas en suelo',
      imageUrl: 'images/planchasIsometricas.webp',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pantorrillaSentadoMancuernas() {
    Swal.fire({
      title: 'Pantorrilla sentado con mancuernas o barra',
      imageUrl: 'images/pantorrilaSentadoMancuernas.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function sentadillaTRX() {
    Swal.fire({
      title: 'sentadilla en trx',
      imageUrl: 'images/sentadillaTRX.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function desplantexTRX() {
    Swal.fire({
      title: 'desplantes en trx',
      imageUrl: 'images/desplantesTRX.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function remoTRX() {
    Swal.fire({
      title: 'remo en trx',
      imageUrl: 'images/remoTRX.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  function pressPechoTRX() {
    Swal.fire({
      title: 'press pecho en trx',
      imageUrl: 'images/pressPechoTRX.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

	function skippings() {
    Swal.fire({
      title: 'saltos skippings',
      imageUrl: 'images/skipping.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

	function crunchesCruzados() {
    Swal.fire({
      title: 'crunches cruzados para abdomen',
      imageUrl: 'images/crunchesCruzados.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

	function jumpingJacks() {
    Swal.fire({
      title: 'saltos jumping Jacks',
      imageUrl: 'images/jumpingJacks.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Entendido',
      confirmButtonColor: 'black'
    })
  }

  return (
    <div>
      {/* <h1 className='title red'>Estás en la ultima semana de tu entrenamiento</h1> */}
      {/* -----------------RUTINA NIVEL 1 SIN LESIONES PRINCIPIANTE ------ */}
      {/* Rutina Semana #1  */}
      {/* <h1>Intensidad a 80%-85% 4 series 12 reps, ejecucion de movimiento controlado</h1> */}
      <Collapsible
        open={true}
        trigger="Semana 1"
        className="dia "
        triggerWhenOpen="Semana 1"
        triggerStyle={{ fontSize: '5rem' }}
      >
        <div className="justify">
          <h1 className="red">Dia 1 hombro, pecho, femoral</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p>
            1.-<a onClick={pressMilitarMaquina}>▶️</a>press militar en maquina<a className="red"></a>
          </p>
          <p>
            2.-<a onClick={pressPechoMaquina}>▶️</a>press pecho en maquina
            <a className="red"></a>
          </p>
          <p>
            3.-<a onClick={fondosMaquina}>▶️</a>Fondos en maquina
            <a className="red"></a>
          </p>
          <p>
            4.-<a onClick={sentadillaMancuerna}>▶️</a>sentadilla con mancuerna
            <a className="red"></a>
          </p>
          <p>
            5.-<a onClick={abduccion}>▶️</a>abducciones en maquina
            <a className="red"></a>
          </p>
          <p>
            6.-<a onClick={abdomenInferiorPiernasCompletas}>▶️</a>elevaciones de piernas para abdomen inferior en suelo
            <a className="red"></a>
          </p>
          <p className="red">*Termina con programa cardio con bicicleta 15 min ritmo ligero</p>
        </div>
        <hr />
        <div className="justify">
          <h1>Dia 2 Pierna</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p>
            1.-<a onClick={extencionCuadriceps}>▶️</a>extenciones cuadriceps-
            <a className="red">pausa 2 segundos concentricos</a>
          </p>
          <p>
            2.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral maquina-
            <a className="red"> pausa 2 segundos concentricos</a>
          </p>
          <p>
            3.-<a onClick={abduccion}>▶️</a>abduccion-
            <a className="red">movimientos fluidos</a>
          </p>
          <p>
            4.-<a onClick={adduccion}>▶️</a>adduccion-<a className="red">movimientos fluidos</a>
          </p>
          <p>
            5.-<a onClick={pantorrillaSentadoMancuernas}>▶️</a>pantorrila en maquina-
            <a className="red">movimientos controlados</a>
          </p>
          <p>
            6.-<a onClick={hipThrust}>▶️</a>Hip Thrust-<a className="red">movimientos explosivos</a>
          </p>
          <p>
            7.-<a onClick={abduccion}>▶️</a>Abducciones en maquina-
            <a className="red">movimiento fluidos</a>
          </p>
          <p>
            8.-<a onClick={patadasGluteo}>▶️</a>patadas gluteo-
            <a className="red">movimiento fluidos</a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 3</p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 3 HIIT sin peso</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min* - todos los ejercicios 30-40 segundos, con descanso de 10 segundos entre ejercicios y 5 min entre circuito.</p>
          <p>
            1.-
            <a onClick={sentadillaBancoSinPeso} className="pointer">
              ▶️
            </a>
            sentadilla sin peso<a className="red"></a>
          </p>
          <p>
            2.-
            <a onClick={lagartijasMilitares} className="pointer">
              ▶️
            </a>
            lagartijas<a className="red"></a>
          </p>
          <p>
            3.-
            <a onClick={skippings} className="pointer">
              ▶️
            </a>
            skippings<a className="red"></a>
          </p>
          <p>
            4.-
            <a onClick={crunchesCruzados} className="pointer">
              ▶️
            </a>
            crunches cruzados abdomen<a className="red"></a>
          </p>
          <p>
            5.-
            <a onClick={fondosBanco} className="pointer">
              ▶️
            </a>
            fondo en banco<a className="red"></a>
          </p>
					<p>
            6.-
            <a onClick={jumpingJacks} className="pointer">
              ▶️
            </a>
            jumping jacks<a className="red"></a>
          </p>
					<p>
            7.-
            <a onClick={sentadillaIsometrica} className="pointer">
              ▶️
            </a>
            sentadilla isometrica<a className="red"></a>
          </p>
        </div>
        <hr />
        <div className="justify">
          <h1>Dia 4 Pierna</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p>
            1.-<a onClick={extencionCuadriceps}>▶️</a>extencinoes cuadriceps
            <a className="red"></a>
          </p>
          <p>
            2.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral maquina
            <a className="red"> </a>
          </p>
          <p>
            3.-<a onClick={abduccion}>▶️</a>abduccion
            <a className="red"></a>
          </p>
          <p>
            4.-<a onClick={adduccion}>▶️</a>adduccion<a className="red"></a>
          </p>
          <p>
            5.-<a onClick={pantorrillaSentadoMancuernas}>▶️</a>pantorrila en maquina
            <a className="red"></a>
          </p>
          {/* <p>
            6.-<a onClick={hipThrust}>▶️</a>Hip Thrust<a className="red"></a>
          </p>
          <p>
            7.-<a onClick={abduccion}>▶️</a>Abducciones en maquina
            <a className="red"></a>
          </p>
          <p>
            8.-<a onClick={patadasGluteo}>▶️</a>patadas gluteo
            <a className="red"></a>
          </p>
          <p>
            9.-<a onClick={pantorrillaMaquina}>▶️</a>Pantorrilla en máquina
            <a className="red"></a>
          </p> */}
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 3</p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 5 espalda-biceps</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p>
            1.-
            <a onClick={pulldownMaquina} className="pointer">
              ▶️
            </a>
            pulldown en maquina<a className="red"></a>
          </p>
          <p>
            2.-
            <a onClick={pulldownPolea} className="pointer">
              ▶️
            </a>
            pulldown en polea<a className="red"></a>
          </p>
          <p>
            3.-
            <a onClick={remoMancuerna} className="pointer">
              ▶️
            </a>
            remo con mancuerna<a className="red"></a>
          </p>
          <p>
            4.-
            <a onClick={pulloverPoleaAlta} className="pointer">
              ▶️
            </a>
            pullover<a className="red"></a>
          </p>
          <p>
            5.-
            <a onClick={curlBicepsMancuernas} className="pointer">
              ▶️
            </a>
            curl de biceps con mancuernas<a className="red"></a>
          </p>
          {/* <p>
            6.-
            <a onClick={curlConcentrado} className="pointer">
              ▶️
            </a>
            curl de biceps concentrado<a className="red"></a>
          </p>
          <p>
            7.-
            <a onClick={hiperextencionesMaquina} className="pointer">
              ▶️
            </a> */}
          hiperextenciones en maquina<a className="red"></a>
        </div>
      </Collapsible>
      {/* Rutina Semana #2  */}
      <Collapsible
        open={false}
        className="dia black1"
        trigger="Semana 2"
        triggerWhenOpen="Semana 2"
        triggerStyle={{ fontSize: '5rem' }}
      >
        <div className="justify">
          <h1>Dia 1 Pierna</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p>
            1.-<a onClick={extencionCuadriceps}>▶️</a>extenciones cuadriceps en maquina a 1 pierna
            <a className="red"></a>
          </p>
          <p>
            2.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral en maquina a 1 pierna<a className="red"></a>
          </p>
          <p>
            3.-<a onClick={sentadillaBarra}>▶️</a>sentadilla con barra
            <a className="red"></a>
          </p>
          <p>
            4.-<a onClick={desplanteBulgaro}>▶️</a> medios desplantes bulgaros con mancuerns<a className="red"></a>
          </p>
          <p>
            5.-<a onClick={buenosDiasBarra}>▶️</a>buenos dias, barra
            <a className="red"></a>
          </p>
          <p>
            6.-<a onClick={hipThrust}>▶️</a>abducciones en maquina
            <a className="red"></a>
          </p>
          <p>
            7.-<a onClick={abduccion}>▶️</a>adducciones en maquina
            <a className="red"></a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 1</p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 2 funcional</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p className="red">5 series 30s cada ejercicio</p>
          <p>
            1.-<a onClick={sentadillaTRX}>▶️</a>sentadilla en TRX
            <a className="red"></a>
          </p>
          <p>
            2.-<a onClick={desplantexTRX}>▶️</a>desplantes en TRX
            <a className="red"></a>
          </p>
          <p>
            3.-<a onClick={remoTRX}>▶️</a>Remo para espalda en TRX
            <a className="red"></a>
          </p>
          <p>
            4.-<a onClick={pressPechoTRX}>▶️</a>press pecho en trx
            <a className="red"></a>
          </p>
          <p>
            5.-<a onClick={elevacionesLateralesMancuerna}>▶️</a>Elevaciones laterales con mancuernas
            <a className="red"></a>
          </p>
          <p>
            6.-<a onClick={elevacionesFrontalesMartillo}>▶️</a>elevaciones frontales martillo con mancuernas
            <a className="red"></a>
          </p>
          <p>
            7.-<a onClick={curlBicepsInclinado}>▶️</a>curl biceps banco inclinado<a className="red">-pesado</a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 3</p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 3 HIIT sin peso</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min* - todos los ejercicios 30-40 segundos, con descanso de 10 segundos entre ejercicios y 5 min entre circuito.</p>
          <p>
            1.-
            <a onClick={sentadillaBancoSinPeso} className="pointer">
              ▶️
            </a>
            sentadilla sin peso<a className="red"></a>
          </p>
          <p>
            2.-
            <a onClick={lagartijasMilitares} className="pointer">
              ▶️
            </a>
            lagartijas<a className="red"></a>
          </p>
          <p>
            3.-
            <a onClick={skippings} className="pointer">
              ▶️
            </a>
            skippings<a className="red"></a>
          </p>
          <p>
            4.-
            <a onClick={crunchesCruzados} className="pointer">
              ▶️
            </a>
            crunches cruzados abdomen<a className="red"></a>
          </p>
          <p>
            5.-
            <a onClick={fondosBanco} className="pointer">
              ▶️
            </a>
            fondo en banco<a className="red"></a>
          </p>
					<p>
            6.-
            <a onClick={jumpingJacks} className="pointer">
              ▶️
            </a>
            jumping jacks<a className="red"></a>
          </p>
					<p>
            7.-
            <a onClick={sentadillaIsometrica} className="pointer">
              ▶️
            </a>
            sentadilla isometrica<a className="red"></a>
          </p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 4 pierna</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p>
            1.-<a onClick={crunchesPiernasArriba}>▶️</a>abdomen
            <a className="red">-ligero</a>
          </p>
          <p>
            2.-<a onClick={extencionCuadriceps}>▶️</a>extencion cuadriceps maquina a 1 pierna
            <a className="red">-pesado</a>
          </p>
          <p>
            3.-<a onClick={sentadillaBarra}>▶️</a>sentadilla estricta con mancuerna *hasta abajo*
            <a className="red">-pesado</a>
          </p>
          <p>
            4.-<a onClick={desplantesEstaticos}>▶️</a>desplantes estaticos con barra<a className="red">-ligero</a>
          </p>
          <p>
            5.-<a onClick={prensaSumo}>▶️</a>prensa sumo para femoral
            <a className="red">-pesado</a>
          </p>
          <p>
            6.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral en maquina
            <a className="red">-pesado</a>
          </p>
          <p>
            7.-<a onClick={pantorrillaMaquina}>▶️</a>pantorrilla en maquina
            <a className="red">-pesado</a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 2</p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="">Dia 5 Espalda-Biceps</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p>
            1.-<a onClick={pulldownSupino}>▶️</a>Pulldown en maquina agarre supino
            <a className="red"></a>
          </p>
          <p>
            2.-<a onClick={remoMaquina}>▶️</a>remo en maquina
            <a className="red"></a>
          </p>
          <p>
            3.-<a onClick={dominadasAsistidas}>▶️</a>dominadas asistidas
            <a className="red"></a>
          </p>
          <p>
            4.-<a onClick={curlBicepsRotacionPie}>▶️</a>curl biceps con rotacion
            <a className="red"></a>
          </p>
          <p>
            5.-<a onClick={curlConcentrado}>▶️</a>curl concentrado
            <a className="red"></a>
          </p>
          <p>
            6.-<a onClick={curlBicepsPoleaBajaCuerda}>▶️</a>curl biceps en polea baja con cuerda
            <a className="red"></a>
          </p>
          <p>
            7.-<a onClick={encogimientosHombrosMancuernas}>▶️</a>Encogimientos con mancuernas
            <a className="red"></a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 2</p>
        </div>
      </Collapsible>  
      {/*Rutina Semana #3*/}
       <Collapsible
        open={false}
        className="dia"
        trigger="Semana 3"
        triggerWhenOpen="Semana 3"
        triggerStyle={{ fontSize: '5rem' }}
      >
        <div className="justify">
          <h1 className="red">Dia 1 Pierna y gluteos</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p className="red">
            Ejecucion de los ejercicios en 3-4 segundos, descanso de 1-2 minutos maximo entre series{' '}
          </p>
          <p>
            1.-<a onClick={sentadillaFrontalBarra}>▶️</a>sentadilla frontal con barra
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            2.-<a onClick={prensaCerrada}>▶️</a>prensa para cuadriceps
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            3.-<a onClick={hipThrust}>▶️</a>hip trhust con barra
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            4.-<a onClick={desplantesEstaticos}>▶️</a>desplantes estaticos con mancuernas
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            5.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral en maquina
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            6.-<a onClick={pantorrillaMaquina}>▶️</a>pantorrilla en maquina
            <a className="red"> 4 series al fallo al 50%-60%</a>
          </p>
          <p>
            6.-<a onClick={abdomenInferiorLibre}>▶️</a>abdomen inferior{' '}
            <a className="red"> 4 series al fallo al 50%-60%</a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 3</p>
        </div>
        <hr />
        <div className="justify">
          <h1>Dia 2 espalda y biceps</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p className="red">
            Ejecucion de los ejercicios en 3-4 segundos, descanso de 1-2 minutos maximo entre series{' '}
          </p>
          <p>
            1.-<a onClick={remoNeutroPolea}>▶️</a>remo neutro en polea
            <a className="red"> 4 series de 10-12 reps al 70%-80%</a>
          </p>
          <p>
            2.-<a onClick={pulldownPolea}>▶️</a>pulldown en polea
            <a className="red"> 4 series de 10-12 reps al 70%-80%</a>
          </p>
          <p>
            3.-<a onClick={dominadasAsistidas}>▶️</a>dominadas asistidas
            <a className="red"> 4 series al fallo</a>
          </p>
          <p>
            4.-<a onClick={curlBicepsZ}>▶️</a>curl biceps con barra
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            5.-<a onClick={curlBicepsMartilloMancuerna}>▶️</a>martillos biceps
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            6.-<a onClick={espaldaBajaLibre}>▶️</a>espalda baja libre
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 2</p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 3 Full</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p className="red">Todos los ejercicios 4 series de 8-10 repeticiones al 80%</p>
          <p>
            1.-<a onClick={pressPechoMaquina}>▶️</a>Press pecho en maquina{' '}
            <a className="red">4 series de 8-10 repeticiones al 80%</a>
          </p>
          <p>
            2.-<a onClick={aperturasMaquina}>▶️</a>Aperturas en maquina{' '}
            <a className="red">4 series de 8-10 repeticiones al 80%</a>
          </p>
          <p>
            3.-<a onClick={elevacionesLateralesMancuerna}>▶️</a>Elevaciones Laterales con Mancuernas
            <a className="red">-ligero</a>
          </p>
          <p>
            4.-<a onClick={fondosMaquina}>▶️</a>Fondos en maquina{' '}
            <a className="red">4 series de 8-10 repeticiones al 80%</a>
          </p>
          <p>
            5.-<a onClick={copa2Manos}>▶️</a>Copa a 2 manos <a className="red">4 series de 8-10 repeticiones al 80%</a>
          </p>
          <p>
            6.-<a onClick={curlBicepsMartilloMancuerna}>▶️</a>Curl Biceps Martillo Sentado
            <a className="red">4 series de 8-10 repeticiones al 80%</a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 3</p>
        </div>
        <hr />
        <div className="justify">
          <h1>Día 4 Empuje</h1>
          <p className="red">*Inicia con calentamiento en caminadora/elíptica/bicicleta 10min*</p>
          <p className="red">
            Ejecución de los ejercicios en 3-4 segundos, descanso de 1-2 minutos máximo entre series. Percepción de
            esfuerzo: 7-8/10
          </p>
          <p>
            1.-<a onClick={pressMilitarMaquina}>▶️</a> Press Militar en máquina agarre cerrado
            <a className="red"> 4 series de 8-10 repeticiones al 80%</a>
          </p>
          <p>
            2.-<a onClick={elevacionesLateralesMancuerna}>▶️</a> Elevaciones laterales con mancuernas
            <a className="red"> 3 series de 12 repeticiones al 70%</a>
          </p>
          <p>
            3.-<a onClick={facepull}>▶️</a> Face Pull en polea
            <a className="red"> 3 series de 12 repeticiones al 70%</a>
          </p>
          <p>
            4.-<a onClick={lagartijasMilitares}>▶️</a> Push-ups o lagartijas regulares
            <a className="red"> 3 series de 12-15 repeticiones al 70%</a>
          </p>
          <p>
            5.-<a onClick={fondosBanco}>▶️</a> Fondos para tríceps en máquina/banco
            <a className="red"> 3 series de 10-12 repeticiones al 80%</a>
          </p>
          <p>
            6.-<a onClick={desplantesEstaticos}>▶️</a> desplantes con mancuernas
            <a className="red"> 3 series de 10 repeticiones por pierna al 75%</a>
          </p>
          <p>
            7.-<a onClick={prensaCerrada}>▶️</a> Prensa de piernas en máquina
            <a className="red"> 4 series de 8-10 repeticiones al 80%</a>
          </p>
          <p>
            8.-<a onClick={crunchMaquina}>▶️</a> Crunches abdominales
            <a className="red"> 4 series de 20 repeticiones al 70%</a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel2*</p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 5 Jalon</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p className="red">
            Ejecucion de los ejercicios en 3-4 segundos, descanso de 1-2 minutos maximo entre series{' '}
          </p>
          <p>
            1.-<a onClick={pulldownMaquina}>▶️</a>Pulldown en Maquina
            <a className="red">-pesado</a>
          </p>
          <p>
            2.-<a onClick={remoMaquina}>▶️</a>Remo en Maquina
            <a className="red">-pesado</a>
          </p>
          <p>
            3.-<a onClick={curlBicepsMartilloMancuerna}>▶️</a>Curl Biceps de Pie con mancuernas
            <a className="red">-pesado</a>
          </p>
          <p>
            4.-<a onClick={curlBicepsMaquinaScott}>▶️</a>Curl biceps en maquina Scott<a className="red">-pesado</a>
          </p>
          <p>
            5.-<a onClick={prensaSumo}>▶️</a>Prensa, apertura de las piernas tipo sumo<a className="red">-pesado</a>
          </p>
          <p>
            6.-<a onClick={curlFemoralSentado}>▶️</a>Curl Femoral Maquina
            <a className="red">-pesado</a>
          </p>
          <p>
            7.-<a onClick={pantorrillaMaquina}>▶️</a>Pantorrilla en Maquina
            <a className="red">-pesado</a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel2</p>
        </div>
      </Collapsible> 
      {/* Rutina semana 4 */}
      <Collapsible
        open={false}
        className="dia black1"
        trigger="Semana 4"
        triggerWhenOpen="Semana 4"
        triggerStyle={{ fontSize: '5rem' }}
      >
        <div className="justify">
          <h1 className="red">Dia 1 pecho-hombro-triceps</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p className="red">Ejecucion de los ejercicios en 3-4 segundos, descanso de 1 minuto maximo entre series </p>
          <p>
            1.-<a onClick={pressPechoMancuernasBancoPlano}>▶️</a>press de pecho con mancuernas en banco plano
            <a className="red"> 4 series de 8-10 reps al 75%-85%</a>
          </p>
          <p>
            2.-<a onClick={aperturasMancuernasBancoInclinado}>▶️</a>
            aperturas de mancuernas en banco inclinado
            <a className="red"> 3 series de 12-15 reps al 65%-75%</a>
          </p>
          <p>
            3.-<a onClick={pressMilitarNeutroMancuernas}>▶️</a>press militar neutro con mancuernas
            <a className="red"> 4 series de 8-10 reps al 75%-85%</a>
          </p>
          <p>
            4.-<a onClick={elevacionesFrontalesDisco}>▶️</a>elevaciones frontales de hombro con disco
            <a className="red"> 3 series de 12-15 reps al 65%-75%</a>
          </p>
          <p>
            5.-<a onClick={fondosAsistidos}>▶️</a>fondos asistidos en maquina
            <a className="red"> 3 series de 12-15 reps al 65%-75%</a>
          </p>
          <p>
            6.-<a onClick={patadasMancuernas}>▶️</a>patadas de triceps con mancuerna
            <a className="red"> 4 series de 8-10 reps al 75%-85%</a>
          </p>
          <p>
            7.-<a onClick={planchaIsometrica}>▶️</a>planchas isometricas en suelo
            <a className="red"> 4 series de 8-10 reps al 75%-85%</a>
          </p>
          <p>
            8.-<a onClick={crunchesPiernasArriba}>▶️</a>abdomen
            <a className="red"> 4 series al fallo</a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 2</p>
        </div>
        <hr />
        <div className="justify">
          <h1>Dia 2 espalda-trapecio-biceps</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p className="red">
            Ejecucion de los ejercicios en 3-4 segundos, descanso de 1-2 minutos maximo entre series{' '}
          </p>
          <p>
            1.-<a onClick={pulldownMaquina}>▶️</a>pulldown en maquina
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            2.-<a onClick={pulldownPolea}>▶️</a>pulldown agarre abierto en polea
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            3.-<a onClick={remoBarra}>▶️</a>remo con barra
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            4.-<a onClick={remoMancuerna}>▶️</a>remo con mancuerna
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            5.-<a onClick={encogimientosHombrosMancuernas}>▶️</a>encogimientos con mancuernas<a className="red"></a>
          </p>
          <p>
            6.-<a onClick={elevacionesLateralesInclinado}>▶️</a>elevaciones laterales para trapecio
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            7.-<a onClick={curlBicepsInclinado}>▶️</a>curl biceps en banco inclinado
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            8.-<a onClick={curlInvertidoBarra}>▶️</a>curl invertido con barra{' '}
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 2</p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 3 pecho</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p className="red">
            Ejecucion de los ejercicios en 3-4 segundos, descanso de 1-2 minutos maximo entre series{' '}
          </p>
          <p>
            1.-<a onClick={pressPechoMaquina}>▶️</a>press pecho en maquina
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            2.-<a onClick={pressPechoMancuernasBancoPlano}>▶️</a>press pecho banco plano con mancuernas
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            3.-<a onClick={pressPechoInclinadoMancuernas}>▶️</a>press pecho inclinado con mancuernas
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            4.-<a onClick={aperturasMancuernasBancoInclinado}>▶️</a>aperturas en banco inclinado
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            5.-<a onClick={crossOverPoleaAlta}>▶️</a>cross over polea alta en polea
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            6.-<a onClick={abdomenInferiorMaquina}>▶️</a>abdomen inferior en maquina
            <a className="red">4 series al fallo</a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nive3</p>
        </div>
        <hr />
        <div className="justify">
          <h1>Dia 4 Jalon</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p className="red">
            Ejecucion de los ejercicios en 3-4 segundos, descanso de 1-2 minutos maximo entre series{' '}
          </p>
          <p>
            1.-<a onClick={pulldownMaquina}>▶️</a>Pulldown en Maquina
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            2.-<a onClick={remoMaquina}>▶️</a>Remo en Maquina
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            3.-<a onClick={curlBicepsMartilloMancuerna}>▶️</a>Curl Biceps de Pie con mancuernas
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            4.-<a onClick={curlBicepsMaquinaScott}>▶️</a>Curl biceps en maquina Scott
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            5.-<a onClick={prensaSumo}>▶️</a>Prensa, apertura de las piernas tipo sumo
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            6.-<a onClick={curlFemoralSentado}>▶️</a>Curl Femoral Maquina
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            7.-<a onClick={pantorrillaMaquina}>▶️</a>Pantorrilla en Maquina
            <a className="red"> 4 series al fallo</a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel2</p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 5 Empuje</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p className="red">
            Ejecucion de los ejercicios en 3-4 segundos, descanso de 1-2 minutos maximo entre series{' '}
          </p>
          <p>
            1.-<a onClick={pressMilitarMaquina}>▶️</a>Press Militar en maquina
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            2.-<a onClick={elevacionesLateralesMancuerna}>▶️</a>elevaciones laterales con mancuerna
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            3.-<a onClick={pressPechoMaquina}>▶️</a>press pecho en maquina
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            4.-<a onClick={aperturasMaquina}>▶️</a>aperturas en maquina
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            5.-<a onClick={sentadillaMancuerna}>▶️</a>Sentadilla con Mancuerna
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            6.-<a onClick={extencionCuadriceps}>▶️</a>extenciones cuadriceps en maquina
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            7.-<a onClick={crunchMaquina}>▶️</a>abdominales crunch en maquina
            <a className="red"> 4 series al fallo</a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel2</p>
        </div>
      </Collapsible>
      {/* Rutina semana 5 */}
      <Collapsible
        open={false}
        className="dia"
        trigger="Semana 5"
        triggerWhenOpen="Semana 5"
        triggerStyle={{ fontSize: '5rem' }}
      >
        <div className="justify">
          <h1 className="red">Dia 1 Torso</h1>
          <p className="red">*Inicia con calentamiento en bicicleta 10min*</p>
          <p className="red">3 series 8-15 repeticiones, descanso de 1-2 min, peso alto 85%-90%</p>
          <p>
            1.-<a onClick={pressMilitarNeutroMancuernas}>▶️</a>press militar neutro con mancuernas sentado
            <a className="red"></a>
          </p>
          <p>
            2.-<a onClick={elevacionesLateralesMancuernasSentado}>▶️</a>elevaciones laterales sentado
            <a className="red"></a>
          </p>
          <p>
            3.-<a onClick={curlBicepsMancuernas}>▶️</a>curl de biceps con mancuerna sentado<a className="red"></a>
          </p>
          <p>
            4.-<a onClick={copaUnaMano}>▶️</a>copa a 1 mano sentado<a className="red"></a>
          </p>
          <p>
            5.-<a onClick={pressPechoInclinadoMancuernas}>▶️</a>press pecho bando inclinado con mancuernas
            <a className="red"></a>
          </p>
          <p>
            6.-<a onClick={sentadillaBarra}>▶️</a>sentadilla con barra<a className="red"></a>
          </p>
          <p>
            7.-<a onClick={pesoMuertoPoleaBaja}>▶️</a>peso muerto en polea baja<a className="red"></a>
          </p>
          <p>
            8.-<a onClick={pantorrillaMaquina}>▶️</a>pantorrilla en maquina<a className="red"></a>
          </p>
          <p>
            9.-<a onClick={crunchesPiernasArriba}>▶️</a>abdomen<a className="red"></a>
          </p>
          <p className="red">*Termina con programa con bicicleta, 10 min ritmo bajo</p>
        </div>
        <hr />
        <div className="justify">
          <h1>Dia 2 cuadriceps</h1>
          <p className="red">*Inicia con calentamiento en bicicleta 10min*</p>
          <p className="red">3 series 8-15 repeticiones, descando de 1-2 min, peso alto</p>
          <p>
            1.-<a onClick={extencionCuadriceps}>▶️</a>extencion cuadriceps en maquina<a className="red"></a>
          </p>
          <p>
            2.-<a onClick={curlFemoralSentado}>▶️</a>Curl femoral<a className="red"></a>
          </p>
          <p>
            3.-<a onClick={abduccion}>▶️</a>abducciones maquina<a className="red"></a>
          </p>
          <p>
            4.-<a onClick={adduccion}>▶️</a>adduciones en maquina<a className="red"></a>
          </p>
          <p>
            5.-<a onClick={pantorrillaSentadoMancuernas}>▶️</a>pantorrilla sentado con mancuernas<a className="red"></a>
          </p>
          <p>
            6.-<a onClick={abduccion}>▶️</a>abducciones en maquina<a className="red"></a>
          </p>
          <p>
            7.-<a onClick={hipThrust}>▶️</a>hip thrust con mancuerna<a className="red"></a>
          </p>
          <p>
            8.-<a onClick={pantorrillaLibre}>▶️</a>pantorrilla en maquina<a className="red"></a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 2</p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 3 Espalda</h1>
          <p className="red">*Inicia con calentamiento en bicicleta 10min*</p>
          <p className="red">3 series 8-15 repeticiones, descanso de 1-2 min, peso alto</p>
          <p>
            1.-<a onClick={pulldownMaquina}>▶️</a>Pulldown en maquina
            <a className="red"></a>
          </p>
          <p>
            2.-<a onClick={remoNeutroPolea}>▶️</a>remo en polea
            <a className="red"></a>
          </p>
          <p>
            3.-<a onClick={remoMancuerna}>▶️</a>remo con mancuernas<a className="red"></a>
          </p>
          <p>
            4.-<a onClick={encogimientosBarra}>▶️</a>encogimientos con barra frontal<a className="red"></a>
          </p>
          <p>
            5.-<a onClick={pajaros}>▶️</a>pajaros
            <a className="red"></a>
          </p>
          <p>
            6.-<a onClick={dominadasAsistidas}>▶️</a>dominadas asistidas<a className="red"></a>
          </p>
          <p>
            7.-<a onClick={curlBicepsZ}>▶️</a>curl biceps con barra<a className="red"></a>
          </p>
          <p>
            8.-<a onClick={curlBicepsRotacionPie}>▶️</a>curl rotacion mancuernas<a className="red"></a>
          </p>
          <p>
            9.-<a onClick={abdomenInferiorMaquina}>▶️</a>abdomen<a className="red"></a>
          </p>
          <p className="red">*Termina con programa con bicicleta, 10 min ritmo bajo</p>
        </div>
        <hr />
				<div className="justify">
          <h1 className="red">Dia 4 Full</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p className="red">
            3 series 8-15 repeticiones, descanso lo que sea necesario para volver a sacar las mismas reps con mismo peso
          </p>
          <p>
            1.-<a onClick={pressMilitarNeutroMancuernas}>▶️</a>Press Militar con mancuernas sentado
            <a className="red"></a>
          </p>
          <p>
            2.-<a onClick={elevacionesLateralesMancuerna}>▶️</a>curl biceps con mancuernas sentado
            <a className="red"></a>
          </p>
          <p>
            3.-<a onClick={copaUnaMano}>▶️</a>copa a 1 mano sentado<a className="red"></a>
          </p>
          <p>
            4.-<a onClick={extencionCuadriceps}>▶️</a>extencion de cuadriceps en maquina<a className="red"></a>
          </p>
          <p>
            5.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral en maquina<a className="red"></a>
          </p>
          <p>
            6.-<a onClick={extencionCuadriceps}>▶️</a>extenciones cuadriceps en maquina<a className="red"></a>
          </p>
          <p>
            7.-<a onClick={crunchMaquina}>▶️</a>abdominales crunch en maquina<a className="red"></a>
          </p>
          <p className="red">*Termina con programa bicicleta 10min ritmo ligero</p>
        </div>
				<hr />
        <div className="justify">
          <h1>Dia 5 inferior</h1>
          <p className="red">*Inicia con calentamiento en bicicleta 10min*</p>
          <p className="red">3 series 8-15 repeticiones, descando de 1-2 min, peso alto</p>
          <p>
            1.-<a onClick={desplantesEstaticos}>▶️</a>desplantes estaticos<a className="red"></a>
          </p>
          <p>
            2.-<a onClick={pesoMuertoBarra}>▶️</a>Peso Muerto con barra<a className="red"></a>
          </p>
          <p>
            3.-<a onClick={abduccion}>▶️</a>abducciones maquina<a className="red"></a>
          </p>
          <p>
            4.-<a onClick={adduccion}>▶️</a>adduciones en maquina<a className="red"></a>
          </p>
          <p>
            5.-<a onClick={pantorrillaSentadoMancuernas}>▶️</a>pantorrilla sentado con mancuernas<a className="red"></a>
          </p>
          <p>
            6.-<a onClick={sentadillaIsometrica}>▶️</a>sentadilla isometrica<a className="red"> 40s - 50s</a>
          </p>
          <p>
            7.-<a onClick={hipThrust}>▶️</a>hip thrust con mancuerna<a className="red"></a>
          </p>
          <p>
            8.-<a onClick={abdomenInferiorPiernasCompletas}>▶️</a>abdomen<a className="red"></a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 2</p>
        </div>


      </Collapsible> 
      <button onClick={whatsapp} className="button2">
        ¿Tienes alguna duda o problema con tu rutina?
      </button>
      <footer className="footer">
        <h1 className="lFooter">Blxck Training</h1>
        <img className="iFooter" src="images/blxckLogo.png" alt="" />
      </footer>
    </div>
  )
}

export default Pool
