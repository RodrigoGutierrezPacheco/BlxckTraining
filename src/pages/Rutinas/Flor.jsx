import React from "react";
import Ejercicios from "../Ejercicios";
import Swal from "sweetalert2";
import Collapsible from "react-collapsible";

const Floridalma = () => {
  function whatsapp() {
    window.location.href = "https://api.whatsapp.com/send?phone=525638686467";
  }

  function pressPechoMaquina() {
    Swal.fire({
      title: "Press Pecho en Maquina",
      imageUrl: "images/pressPechoMaquina.jpeg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pressMilitarMaquina() {
    Swal.fire({
      title: "Press Militar en Maquina",
      imageUrl: "images/pressMilitarMaquina.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pulldownMaquina() {
    Swal.fire({
      title: "Pulldown en Maquina",
      imageUrl: "images/ppm.webp",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlBicepsZ() {
    Swal.fire({
      title: "Curl Biceps con barra Z",
      imageUrl: "images/curlBicepsZDePie.jpeg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function copa2Manos() {
    Swal.fire({
      title: "Copa a 2 Manos",
      imageUrl: "images/copa2Manos.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function sentadillaMancuerna() {
    Swal.fire({
      title: "Sentadilla con Mancuerna",
      imageUrl: "images/sentadillaMancuerna.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function sentadillaIsometrica() {
    Swal.fire({
      title: "Sentadilla estatica sin peso",
      imageUrl: "images/sentadillaIsometrica.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pesoMuertoMancuerna() {
    Swal.fire({
      title: "Peso Muerto con Mancuerna",
      imageUrl: "images/pesoMuertoMancuerna.webp",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function elevacionesLateralesMancuerna() {
    Swal.fire({
      title: "Elevaciones Laterales con Mancuernas",
      imageUrl: "images/elevacionesLateralesMancuerna.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function elevacionesFrontalesMartillo() {
    Swal.fire({
      title: "Elevaciones Frontales Martillo con Mancuernas",
      imageUrl: "images/elevacionesFrontalesMartillo.webp",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlBicepsMaquina() {
    Swal.fire({
      title: "Curl Biceps en Maquina",
      imageUrl: "images/curlBicepsMaquina.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlBicepsMancuernas() {
    Swal.fire({
      title: "Curl Biceps con mancuernas",
      imageUrl: "images/curlBicepsMancuernasSupino.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlBicepsMartilloMancuerna() {
    Swal.fire({
      title: "Curl Biceps Martillo con Mancuernas",
      imageUrl: "images/curlBicepsMartillo.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function copaUnaMano() {
    Swal.fire({
      title: "copa a una mano con mancuerna sentado o de pie",
      imageUrl: "images/copaUnaMano.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function fondosMaquina() {
    Swal.fire({
      title: "Fondos en Maquina",
      imageUrl: "images/fondosMaquina.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function extencionCuadriceps() {
    Swal.fire({
      title: "Extencion de Cuadriceps en Maquina",
      imageUrl: "images/extencionCuadriceps.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlFemoralSentado() {
    Swal.fire({
      title: "Curl Femoral Sentado",
      imageUrl: "images/curlFemoralSentado.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function abduccion() {
    Swal.fire({
      title: "Abduccion en Maquina",
      imageUrl: "images/abduccionMaquina.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function adduccion() {
    Swal.fire({
      title: "Aduccion en Maquina",
      imageUrl: "images/adduccionMaquina.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pantorrillaLibre() {
    Swal.fire({
      title: "pantorrilla en step sin peso",
      imageUrl: "images/pantorrillaLibre.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function hipThrust() {
    Swal.fire({
      title: "Hip thrust en banco",
      imageUrl: "images/hipThrust.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function remoMaquina() {
    Swal.fire({
      title: "Remo en Maquina",
      imageUrl: "images/remoMaquina.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pulloverPoleaAlta() {
    Swal.fire({
      title: "Pullover en Polea Alta",
      imageUrl: "images/pulloverPoleaAlta.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function hiperextencionesMaquina() {
    Swal.fire({
      title: "Hiperextenciones en Maquina",
      imageUrl: "images/hiperextencionMaquina.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function aperturasMaquina() {
    Swal.fire({
      title: "Aperturas en Maquina",
      imageUrl: "images/aperturasMaquina.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlBicepsMaquinaScott() {
    Swal.fire({
      title: "Curl Biceps Maquina Scott",
      imageUrl: "images/curlBicepsMaquinaScott.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function prensaCerrada() {
    Swal.fire({
      title: "prensa, apertura de las piernas a la anchura de los hombros",
      imageUrl: "images/prensaCerrada.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function desplantesEstaticos() {
    Swal.fire({
      title: "desplantes estáticos con mancuerna o mancuernas",
      imageUrl: "images/desplanteConMancuerna.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function prensaSumo() {
    Swal.fire({
      title: "prensa sumo, apertura de los pies a la anchura de los hombros",
      imageUrl: "images/prensaSumo.jpg",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pantorrillaMaquina() {
    Swal.fire({
      title: "pantorrilla en maquina",
      imageUrl: "images/pantorrillaMaquina.jpg",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function crunchMaquina() {
    Swal.fire({
      title: "Abdominal Crunch en maquina",
      imageUrl: "images/crunchMaquina.jpg",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pressMilitarBarraSentado() {
    Swal.fire({
      title: "press militar barra sentado",
      imageUrl: "images/pressMilitarBarraSentado.png",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pressMilitarNeutroMancuernas() {
    Swal.fire({
      title: "press agarre neutro con mancuernas",
      imageUrl: "images/pressMilitarNeutroMancuernas.jpg",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function elevacionesFrontalesProno() {
    Swal.fire({
      title: "elevaciones frontales prono con mancuernas",
      imageUrl: "images/elevacionesFrontalesProno.jpeg",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function remoMentonBarra() {
    Swal.fire({
      title: "remo al menton con barra",
      imageUrl: "images/remoMentonBarra.jpeg",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function encogimientosHombrosMancuernas() {
    Swal.fire({
      title: "encogimientos laterales con mancuernas",
      imageUrl: "images/encogimientosLateralesMancuernas.jpeg",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlBicepsRotacionPie() {
    Swal.fire({
      title: "curl de biceps con rotacion de pie",
      imageUrl: "images/curlBicepsRotacionMancuernas.jpeg",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlMartilloSentado() {
    Swal.fire({
      title: "Abdominal Crunch en maquina",
      imageUrl: "images/curlMartilloSentado.jpeg",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function patadasMancuernas() {
    Swal.fire({
      title: "patadas con mancuerna",
      imageUrl: "images/patadasMancuerna.png",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function jalonesPoleaAlta() {
    Swal.fire({
      title: "jalones en polea alta con cuerdas",
      imageUrl: "images/jalonesPoleaAltaCuerdaTriceps.jpeg",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlConcentrado() {
    Swal.fire({
      title: "curl concentrado con mancuerna",
      imageUrl: "images/curlConcentrado.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function elevacionesFrontalesDisco() {
    Swal.fire({
      title: "elevaciones frontales con disco",
      imageUrl: "images/elevacionFrontalDisco.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function abdomenInferiorMaquina() {
    Swal.fire({
      title: "abdomen inferior en maquina",
      imageUrl: "images/abdomenInferiorMaquina.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function sentadillaBarra() {
    Swal.fire({
      title: "Sentadilla con barra",
      imageUrl: "images/sentadillaBarra.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function fondosBanco() {
    Swal.fire({
      title: "fondos en banco",
      imageUrl: "images/fondosBanco.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function crunchSuelo() {
    Swal.fire({
      title: "crunches en suelo",
      imageUrl: "images/crunchSuelo.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function sentadillaBancoSinPeso() {
    Swal.fire({
      title: "sentadilla en cualquier banco sin peso",
      imageUrl: "images/sentadillaBancoSinPeso.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function facepull() {
    Swal.fire({
      title: "Facepull en polea",
      imageUrl: "images/facepull.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function elevacionesLateralesPoleaBaja() {
    Swal.fire({
      title: "elevaciones laterales en polea baja",
      imageUrl: "images/elevacionesLateralesPoleaBaja.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pressFrancesMancuernas() {
    Swal.fire({
      title: "press frances neutro con mancuernas en banco plano",
      imageUrl: "images/pressFrancesMancuernas.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function lagartijasMilitares() {
    Swal.fire({
      title: "lagartijas militares, completas o medias",
      imageUrl: "images/lagartijasMilitares.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pulldownPolea() {
    Swal.fire({
      title: "pulldown en polea agarre prono",
      imageUrl: "images/pulldownPolea.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function remoMancuerna() {
    Swal.fire({
      title: "remo con mancuerna en banco",
      imageUrl: "images/remoMancuerna.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlMancuernaRotacion() {
    Swal.fire({
      title: "curl rotacion con mancuernas",
      imageUrl: "images/curlMancuernaRotacion.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pesoMuertoPoleaBaja() {
    Swal.fire({
      title: "peso muerto en polea baja",
      imageUrl: "images/pesoMuertoPoleaBaja.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function abdomenInferiorLibre() {
    Swal.fire({
      title: "tijeras para abdomen inferior en suelo",
      imageUrl: "images/abdomenInferiorLibre.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function crunchesSuelo() {
    Swal.fire({
      title: "crunches para abdomen en suelo",
      imageUrl: "images/crunchesSuelo.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function hombroPosteriorPoleaBaja() {
    Swal.fire({
      title: "aperturas para hombro posterior en polea baja",
      imageUrl: "images/hombroPosteriorPoleaBaja.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function desplanteBulgaro() {
    Swal.fire({
      title: "desplante bulgaro en banco",
      imageUrl: "images/desplanteBulgaro.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function crunchesPiernasArriba() {
    Swal.fire({
      title: "crunches con piernas arriba en suelo",
      imageUrl: "images/crunchPiernasArriba.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pressMilitarBarraPie() {
    Swal.fire({
      title: "press militar con barra de pie",
      imageUrl: "images/pressMilitarBarraPie.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pulldownSupino() {
    Swal.fire({
      title: "pulldown agarre supino/invertido en maquina",
      imageUrl: "images/pulldownSupino.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function cristosBancoInclinado() {
    Swal.fire({
      title: "cristos con mancuernas en banco inclinado",
      imageUrl: "images/cristosBancoInclinado.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function jalonTrasNucaPoleaAlta() {
    Swal.fire({
      title: "jalon tras nuca en polea alta para triceps",
      imageUrl: "images/jalonTrasNucaPoleaAlta.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlBicepsPoleaBajaCuerda() {
    Swal.fire({
      title: "curl de biceps en polea baja con cuerda",
      imageUrl: "images/curlBicepsPoleaBajaCuerda.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }
  function pressPechoMancuernasBancoPlano() {
    Swal.fire({
      title: "press pecho con mancuernas en banco plano",
      imageUrl: "images/pressPechoMancuernasBanco.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function aperturasMancuernasBancoInclinado() {
    Swal.fire({
      title: "aperturas con mancuernas en banco inclinado",
      imageUrl: "images/aperturasMancuernasBancoInclinado.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pesoMuertoBarra() {
    Swal.fire({
      title: "peso muerto con barra",
      imageUrl: "images/pesoMuertoBarra.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function hipthrusPoleaBaja() {
    Swal.fire({
      title: "hip thrust en polea baja",
      imageUrl: "images/hipthrusPoleaBaja.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function espaldaBajaMaquina() {
    Swal.fire({
      title: "espalda baja en maquina",
      imageUrl: "images/espaldaBajaMaquina.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function buenosDiasBarra() {
    Swal.fire({
      title: "Buenos dias con barra",
      imageUrl: "images/buenosDiasBarra.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pressPechoBarraInclinado() {
    Swal.fire({
      title: "Press pecho con barra en banco inclinado",
      imageUrl: "images/pressPechoBarraInclinado.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function elevacionesLateralesMancuernasSentado() {
    Swal.fire({
      title: "elevaciones laterales en banco con mancuernas",
      imageUrl: "images/elevacionesLateralesMancuernasSentado.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pressArnoldSentado() {
    Swal.fire({
      title: "press arnold con mancuernas sentado",
      imageUrl: "images/pressArnoldSentado.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function fondosAsistidos() {
    Swal.fire({
      title: "fondos asistidos en maquina",
      imageUrl: "images/fondosMaquinaAsistida.jpg",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function elevacionesLateralesInclinado() {
    Swal.fire({
      title: "elevaciones laterales inclinado con mancuernas",
      imageUrl: "images/elevacionesLateralesInclinado.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlBicepsInclinado() {
    Swal.fire({
      title: "curl de biceps con mancuernas en banco inclinado",
      imageUrl: "images/curlBicepsInclinado.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlInvertidoBarra() {
    Swal.fire({
      title: "curl de biceps invetrido con barra",
      imageUrl: "images/curlInvertidoBarra.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function remoBarra() {
    Swal.fire({
      title: "remo con barra",
      imageUrl: "images/remoBarra.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }
  function pressPechoInclinadoMancuernas() {
    Swal.fire({
      title: "press pecho inclinado con mancuernas",
      imageUrl: "images/pressPechoInclinadoMancuernas.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function crossOverPoleaAlta() {
    Swal.fire({
      title: "crossover en polea alta",
      imageUrl: "images/crossoverPoleaAlta.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function desplantesCaminando() {
    Swal.fire({
      title: "desplantes caminando con mancuernas o barra",
      imageUrl: "images/desplantesCaminando.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function patadasGluteo() {
    Swal.fire({
      title: "patadas para gluteo en polea baja",
      imageUrl: "images/patadaGluteo.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlAlternado() {
    Swal.fire({
      title: "curl alternado con mancuernas",
      imageUrl: "images/curlAlternado.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }
  function pajaros() {
    Swal.fire({
      title: "pajaros con mancuernas",
      imageUrl: "images/pajaros.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }
  function sentadillaFrontalBarra() {
    Swal.fire({
      title: "sentadilla frontal con barra",
      imageUrl: "images/sentadillaFrontalBarra.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }
  function remoNeutroPolea() {
    Swal.fire({
      title: "remo neutro en polea",
      imageUrl: "images/remoNeutroPolea.webp",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }
  function dominadasAsistidas() {
    Swal.fire({
      title: "dominadas asistidas",
      imageUrl: "images/dominadasAsistidas.png",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }
  function espaldaBajaLibre() {
    Swal.fire({
      title: "sentadilla frontal con barra",
      imageUrl: "images/espaldaBajaLibre.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function encogimientosBarra() {
    Swal.fire({
      title: "encogimientos frontales con barra para trapecios",
      imageUrl: "images/encogimientosBarra.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function abdomenInferiorPiernasCompletas() {
    Swal.fire({
      title: "elevaciones de piernas completas en suelo o banco",
      imageUrl: "images/abdomenInferiorSueloPiernasCompletas.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function planchaIsometrica() {
    Swal.fire({
      title: "Planchas isometricas en suelo",
      imageUrl: "images/planchasIsometricas.webp",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pantorrillaSentadoMancuernas() {
    Swal.fire({
      title: "Pantorrilla sentado con mancuernas o barra",
      imageUrl: "images/pantorrilaSentadoMancuernas.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function sentadillaTRX() {
    Swal.fire({
      title: "sentadilla en trx",
      imageUrl: "images/sentadillaTRX.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function desplantexTRX() {
    Swal.fire({
      title: "desplantes en trx",
      imageUrl: "images/desplantesTRX.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function remoTRX() {
    Swal.fire({
      title: "remo en trx",
      imageUrl: "images/remoTRX.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pressPechoTRX() {
    Swal.fire({
      title: "press pecho en trx",
      imageUrl: "images/pressPechoTRX.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function skippings() {
    Swal.fire({
      title: "saltos skippings",
      imageUrl: "images/skipping.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function crunchesCruzados() {
    Swal.fire({
      title: "crunches cruzados para abdomen",
      imageUrl: "images/crunchesCruzados.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function jumpingJacks() {
    Swal.fire({
      title: "saltos jumping Jacks",
      imageUrl: "images/jumpingJacks.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function pressPechoPlanoBarra() {
    Swal.fire({
      title: "press de pecho en banco blano con barra",
      imageUrl: "images/pressPechoPlanoBarra.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function curlBicepsBarra() {
    Swal.fire({
      title: "Curl de biceps con barra plana",
      imageUrl: "images/curlBicepsBarra.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function sentadillaExplosiva() {
    Swal.fire({
      title: "sentadilla explosiva sin peso",
      imageUrl: "images/sentadillaExplosiva.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function sentadillaSmith() {
    Swal.fire({
      title: "sentadilla en maquina smith",
      imageUrl: "images/sentdillaSmith.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function extencionTricepsPoleaAlta() {
    Swal.fire({
      title: "extencion de triceps en polea alta",
      imageUrl: "images/extencionTricepsPoleaAlta.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function burpees() {
    Swal.fire({
      title: "burpees",
      imageUrl: "images/burpees.webp",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function mountainClimbers() {
    Swal.fire({
      title: "mountain climbers",
      imageUrl: "images/burpees.webp",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

  function planchaLateral() {
    Swal.fire({
      title: "plancha lateral",
      imageUrl: "images/planchaLateral.webp",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "Entendido",
      confirmButtonColor: "black",
    });
  }

    function sentadillaGoblet() {
      Swal.fire({
        title: "Sentadilla goblet con pesa rusa",
        imageUrl: "images/sentadillaGoblet.gif",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
        confirmButtonText: "Entendido",
        confirmButtonColor: "black",
      });
    }

  return (
    <div>
      {/* <h1 className='title red'>Estás en la ultima semana de tu entrenamiento</h1> */}
      {/* -----------------RUTINA NIVEL 1 SIN LESIONES PRINCIPIANTE ------ */}

      {/* Rutina Semana #1  */}
      <Collapsible
        open={true}
        trigger="Semana 1"
        className="dia"
        triggerWhenOpen="Semana 1"
        triggerStyle={{ fontSize: "5rem" }}
      >
        <div className="justify">
          <h1 className="red">Día 1 Full Body: Fuerza y Resistencia</h1>
          <p className="red">
            *Inicia con calentamiento: 10 minutos de skipping o jumping jacks*
          </p>
          <p>
            1.-<a onClick={sentadillaGoblet}>▶️</a>Sentadilla goblet con
            mancuerna <a className="red">4 series de 10-12 reps</a>
          </p>
          <p>
            2.-<a onClick={pesoMuertoMancuerna}>▶️</a>Peso muerto con
            mancuernas <a className="red">4 series de 8-10 reps</a>
          </p>
          <p>
            3.-<a onClick={pressArnoldSentado}>▶️</a>Press Arnold con mancuernas{" "}
            <a className="red">4 series de 10-12 reps</a>
          </p>
          <p>
            4.-<a onClick={remoMancuerna}>▶️</a>Remo inclinado con
            mancuernas <a className="red">4 series de 10-12 reps</a>
          </p>
          <p>
            5.-<a onClick={planchaIsometrica}>▶️</a>Plancha isométrica{" "}
            <a className="red">3 series de 30-60 segundos</a>
          </p>
          <p className="red">
            *Termina con enfriamiento: 5 minutos de estiramientos dinámicos*
          </p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Día 2 Full Body: Resistencia y Core</h1>
          <p className="red">
            *Inicia con calentamiento: 10 minutos de marcha en el lugar con
            rodillas altas*
          </p>
          <p>
            1.-<a onClick={desplantesEstaticos}>▶️</a>Desplantes 
            <a className="red">4 series de 10-12 reps por pierna</a>
          </p>
          <p>
            2.-<a onClick={curlMartilloSentado}>▶️</a>Curl martillo con mancuernas{" "}
            <a className="red">4 series de 10-12 reps</a>
          </p>
          <p>
            3.-<a onClick={pressMilitarNeutroMancuernas}>▶️</a>Press militar con
            mancuernas <a className="red">4 series de 10-12 reps</a>
          </p>
          <p>
            4.-<a onClick={crunchesSuelo}>▶️</a>Crunches{" "}
            <a className="red">3 series de 20-30 reps</a>
          </p>
          <p className="red">
            *Termina con enfriamiento: 5 minutos de estiramientos de piernas y
            espalda*
          </p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Día 3 Full Body: Potencia y Cardio</h1>
          <p className="red">
            *Inicia con calentamiento: 5 minutos de burpees o saltos con cuerda*
          </p>
          <p>
            1.-<a onClick={sentadillaExplosiva}>▶️</a>Sentadilla con salto y
            mancuerna <a className="red">3 series de 15 reps</a>
          </p>
          <p>
            2.-<a onClick={remoMancuerna}>▶️</a>Remo con mancuerna a una
            mano <a className="red">4 series de 8-10 reps por lado</a>
          </p>
          <p>
            3.-<a onClick={skippings}>▶️</a>Skippings (rodillas altas con
            mancuernas ligeras){" "}
            <a className="red">3 series de 30-40 segundos</a>
          </p>
          <p>
            4.-<a onClick={planchaIsometrica}>▶️</a>Plancha{" "}
            <a className="red">3 series de 20 reps</a>
          </p>
          <p className="red">
            *Termina con 10 minutos de cardio ligero y estiramientos*
          </p>
        </div>
      </Collapsible>

      {/* Rutina Semana #2  */}
      {/* <Collapsible
        open={true}
        className="dia black1"
        trigger="Semana 2"
        triggerWhenOpen="Semana 2"
        triggerStyle={{ fontSize: "5rem" }}
      >
        <div className="justify">
          <h1>Dia 1 Empuje</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*
          </p>
          <p>
            1.-<a onClick={pressMilitarMaquina}>▶️</a>-Press militar máquina
            <a className="red"> 4 series 8-12reps</a>
          </p>
          <p>
            2.-<a onClick={elevacionesLateralesInclinado}>▶️</a>Elevaciones
            laterales con mancuernas ambas manos
            <a className="red"> 4 series 15 reps</a>
          </p>
          <p>
            3.-<a onClick={hombroPosteriorPoleaBaja}>▶️</a>Aperturas para
            deltoides posterior en polea baja
            <a className="red"> 4 series 10-12 reps</a>
          </p>
          <p>
            4.-<a onClick={pressPechoMaquina}>▶️</a>press pecho en maquina
            <a className="red"> 4 series de 15 reps</a>
          </p>
          <p>
            5.-<a onClick={aperturasMaquina}>▶️</a>aperturas para pecho en
            maquina
            <a className="red"> 4 series 15 reps</a>
          </p>
          <p>
            6.-<a onClick={copa2Manos}>▶️</a>copa a 2 manos sentado
            <a className="red"> 4 series 12 reps</a>
          </p>
          <p>
            7.-<a onClick={jalonesPoleaAlta}>▶️</a>jalones en polea alta con
            cuerdas
            <a className="red"> 4 series 15 reps</a>
          </p>
          <p className="red">
            *Termina con programa cardio S8-Principiante-Nivel 1
          </p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 2 jalon</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*
          </p>
          <p>
            1.-<a onClick={pulldownPolea}>▶️</a>pulldown prono en maquina
            <a className="red"> 4 series 10-15-reps</a>
          </p>
          <p>
            2.-<a onClick={remoMaquina}>▶️</a>remo en maquina
            <a className="red"> 4 series 12 reps</a>
          </p>
          <p>
            3.-<a onClick={remoMancuerna}>▶️</a>remo con mancuerna
            <a className="red"> 4 srries 10 reps c/u</a>
          </p>
          <p>
            4.-<a onClick={encogimientosHombrosMancuernas}>▶️</a>encogimientos
            lateraleres con mancuernas
            <a className="red"> 4 series al fallo</a>
          </p>
          <p>
            5.-<a onClick={curlBicepsRotacionPie}>▶️</a>Curl biceps rotacion con
            mancuernas de pie
            <a className="red"> 4 series 10-15 reps</a>
          </p>
          <p>
            6.-<a onClick={curlConcentrado}>▶️</a>curl concentrado con
            mancuernas
            <a className="red"> 4 series 10 reps</a>
          </p>
          <p>
            7.-<a onClick={curlBicepsMaquinaScott}>▶️</a>curl de biceps en
            maquina scott<a className="red">4 series 12 reps</a>
          </p>
          <p className="red">
            *Termina con programa cardio S8-Principiante-Nivel 3
          </p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="">Dia 3 pierna</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/eliptica/bicicleta 10min* -
            todos los ejercicios 30-40 segundos, con descanso de 10 segundos
            entre ejercicios y 5 min entre circuito.
          </p>
          <p>
            1.-
            <a onClick={sentadillaMancuerna} className="pointer">
              ▶️
            </a>
            sentadilla con mancuernas<a className="red"> 4 series 12-15 reps</a>
          </p>
          <p>
            2.-
            <a onClick={prensaCerrada} className="pointer">
              ▶️
            </a>
            prensa cerrada en maquina o con barra libre
            <a className="red"> 4 series 12 reps</a>
          </p>
          <p>
            3.-
            <a onClick={desplanteBulgaro} className="pointer">
              ▶️
            </a>
            desplantes bulgaros<a className="red"> 4 series 10 reps c/u</a>
          </p>
          <p>
            4.-
            <a onClick={extencionCuadriceps} className="pointer">
              ▶️
            </a>
            extencion de cuadriceps en maquina
            <a className="red"> 4 series al fallo</a>
          </p>
          <p>
            5.-
            <a onClick={abduccion} className="pointer">
              ▶️
            </a>
            abducciones en maquina<a className="red"> 4 series 15 reps</a>
          </p>
          <p>
            6.-
            <a onClick={hipThrust} className="pointer">
              ▶️
            </a>
            hip thrust con barra<a className="red"> 4 saeries 10-12 reps</a>
          </p>
          <p>
            7.-
            <a onClick={pantorrillaLibre} className="pointer">
              ▶️
            </a>
            pantorrilla de pie con mancuernas
            <a className="red"> 4 series al fallo</a>
          </p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 4 Empuje</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*
          </p>
          <p>
            1.-<a onClick={pressMilitarMaquina}>▶️</a>-Press militar máquina
            <a className="red">4 series 8-12reps</a>
          </p>
          <p>
            2.-<a onClick={elevacionesLateralesInclinado}>▶️</a>Elevaciones
            laterales con mancuernas ambas manos
            <a className="red"> 4 series 15 reps</a>
          </p>
          <p>
            3.-<a onClick={hombroPosteriorPoleaBaja}>▶️</a>Aperturas para
            deltoides posterior en polea baja
            <a className="red"> 4 series 10-12 reps</a>
          </p>
          <p>
            4.-<a onClick={pressPechoMaquina}>▶️</a>press pecho en maquina
            <a className="red"> 4 series de 15 reps</a>
          </p>
          <p>
            5.-<a onClick={aperturasMaquina}>▶️</a>aperturas para pecho en
            maquina
            <a className="red"> 4 series 15 reps</a>
          </p>
          <p>
            6.-<a onClick={copa2Manos}>▶️</a>copa a 2 manos sentado
            <a className="red"> 4 series 12 reps</a>
          </p>
          <p>
            7.-<a onClick={jalonesPoleaAlta}>▶️</a>jalones en polea alta con
            cuerdas
            <a className="red"> 4 series 15 reps</a>
          </p>
          <p className="red">
            *Termina con programa cardio S8-Principiante-Nivel 1
          </p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="">Dia 5 pierna</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/eliptica/bicicleta 10min* -
            todos los ejercicios 30-40 segundos, con descanso de 10 segundos
            entre ejercicios y 5 min entre circuito.
          </p>
          <p>
            1.-
            <a onClick={sentadillaMancuerna} className="pointer">
              ▶️
            </a>
            sentadilla con mancuernas<a className="red"> 4 series 12-15 reps</a>
          </p>
          <p>
            2.-
            <a onClick={prensaCerrada} className="pointer">
              ▶️
            </a>
            prensa cerrada en maquina o con barra libre
            <a className="red"> 4 series 12 reps</a>
          </p>
          <p>
            3.-
            <a onClick={desplanteBulgaro} className="pointer">
              ▶️
            </a>
            desplantes bulgaros<a className="red"> 4 series 10 reps c/u</a>
          </p>
          <p>
            4.-
            <a onClick={extencionCuadriceps} className="pointer">
              ▶️
            </a>
            extencion de cuadriceps en maquina
            <a className="red"> 4 series al fallo</a>
          </p>
          <p>
            5.-
            <a onClick={abduccion} className="pointer">
              ▶️
            </a>
            abducciones en maquina<a className="red"> 4 series 15 reps</a>
          </p>
          <p>
            6.-
            <a onClick={hipThrust} className="pointer">
              ▶️
            </a>
            hip thrust con barra<a className="red"> 4 saeries 10-12 reps</a>
          </p>
          <p>
            7.-
            <a onClick={pantorrillaLibre} className="pointer">
              ▶️
            </a>
            pantorrilla de pie con mancuernas
            <a className="red"> 4 series al fallo</a>
          </p>
        </div>
      </Collapsible> */}

      {/*Rutina Semana #3*/}
      {/* <Collapsible
        open={true}
        className="dia"
        trigger="Semana 3"
        triggerWhenOpen="Semana 3"
        triggerStyle={{ fontSize: "5rem" }}
      >
        <div className="justify">
          <h1 className="red">Dia 1 Pierna y gluteos</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*
          </p>
          <p className="red">
            Ejecucion de los ejercicios en 3-4 segundos, descanso de 1-2 minutos
            maximo entre series{" "}
          </p>
          <p>
            1.-<a onClick={sentadillaSmith}>▶️</a>sentadilla en smith
            <a className="red"> 4 series de 8-10 reps</a>
          </p>

          <p>
            2.-<a onClick={prensaCerrada}>▶️</a>prensa
            <a className="red"> 4 series de 10-12 reps</a>
          </p>
          <p>
            3.-<a onClick={desplantesCaminando}>▶️</a>Desplantes caminando
            <a className="red"> 3 series de 12-15 reps</a>
          </p>
          <p>
            4.-<a onClick={pantorrillaMaquina}>▶️</a>pantorrilla en maquina
            maquina
            <a className="red"> 4 series al fallo</a>
          </p>
          <p>
            5.-<a onClick={hipThrust}>▶️</a>hip thrust
            <a className="red"> 4 series de 10-12 reps</a>
          </p>
          <p>
            6.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral sentada
            <a className="red"> 3 series de 10-12 reps</a>
          </p>
          <p>
            7.-<a onClick={pesoMuertoBarra}>▶️</a>peso muerto con barra{" "}
            <a className="red"> 4 series al fallo</a>
          </p>
          <p className="red">
            *Termina con programa cardio S8-Principiante-Nivel 3
          </p>
        </div>
        <hr />

        <div className="justify">
          <h1>Dia 2 espalda y biceps</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*
          </p>
          <p className="red">
            Ejecucion de los ejercicios en 3-4 segundos, descanso de 1-2 minutos
            maximo entre series{" "}
          </p>
          <p>
            1.-<a onClick={pressPechoMancuernasBancoPlano}>▶️</a>press pecho en
            banco plano
            <a className="red"> 4 series de 8-10 reps el</a>
          </p>
          <p>
            2.-<a onClick={remoBarra}>▶️</a>remo con barra
            <a className="red"> 4 series de 8-10 reps</a>
          </p>
          <p>
            3.-<a onClick={pressPechoInclinadoMancuernas}>▶️</a>press pecho
            inclinado con mancuernas
            <a className="red"> 4 series de 10-12 reps</a>
          </p>
          <p>
            4.-<a onClick={dominadasAsistidas}>▶️</a>dominadas asistidas
            <a className="red"> 4 series de 6-10 reps</a>
          </p>
          <p>
            5.-<a onClick={cristosBancoInclinado}>▶️</a>aperturas en banco
            inclinado
            <a className="red"> 3 series de 12-15 reps</a>
          </p>
          <p>
            6.-<a onClick={remoMancuerna}>▶️</a>remo con mancuernas
            <a className="red"> 3 series de 10-12 reps</a>
          </p>
          <p className="red">
            *Termina con programa cardio S8-Principiante-Nivel 2
          </p>
        </div>
        <hr />

        <div className="justify">
          <h1 className="red">Día 3: Hombro, Bíceps y Tríceps</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/elíptica/bicicleta 10min*
          </p>
          <p>
            1.-<a onClick={pressMilitarNeutroMancuernas}>▶️</a>Press Militar con
            Mancuernas <a className="red">4 series de 8-10 reps</a>
          </p>

          <p>
            2.-<a onClick={elevacionesFrontalesDisco}>▶️</a>Elevaciones
            Frontales con disco <a className="red">4 series de 8-10 reps</a>
          </p>

          <p>
            3.-<a onClick={elevacionesLateralesMancuerna}>▶️</a>Elevaciones
            Laterales con Mancuernas{" "}
            <a className="red">4 series de 10-15reps</a>
          </p>

          <p>
            4.-<a onClick={curlBicepsBarra}>▶️</a>Curl de Bíceps con Barra{" "}
            <a className="red">4 series de 8-10 reps</a>
          </p>

          <p>
            5.-<a onClick={curlConcentrado}>▶️</a>Curl Concentrado con Mancuerna{" "}
            <a className="red">4 series de 8-10 reps</a>
          </p>

          <p>
            6.-<a onClick={pressFrancesMancuernas}>▶️</a>Press Francés con
            mancuernas <a className="red">4 series de 8-10 reps</a>
          </p>

          <p>
            7.-<a onClick={extencionTricepsPoleaAlta}>▶️</a>Extensión de Tríceps
            en Polea <a className="red">4 series de 8-10 reps</a>
          </p>

          <p className="red">
            *Termina con programa cardio S8-Principiante-Nivel 3*
          </p>
        </div>

        <hr />

        <div className="justify">
          <h1 className="">Día 4: Fullbody</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/elíptica/bicicleta 10min*
          </p>
          <p>
            1.-<a onClick={sentadillaMancuerna}>▶️</a>Sentadillas con mancuerna{" "}
            <a className="red">4 series de 8-10 reps</a>
          </p>

          <p>
            2.-<a onClick={pesoMuertoMancuerna}>▶️</a>Peso Muerto Convencional{" "}
            <a className="red">4 series de 8-10 reps</a>
          </p>

          <p>
            3.-<a onClick={pressPechoMaquina}>▶️</a>Press de Banca con Barra{" "}
            <a className="red">4 series de 8-10 reps</a>
          </p>

          <p>
            4.-<a onClick={remoMaquina}>▶️</a>Remo con Barra{" "}
            <a className="red">4 series de 8-10 reps</a>
          </p>

          <p>
            5.-<a onClick={pressMilitarBarraSentado}>▶️</a>Press Militar con
            Mancuernas <a className="red">4 series de 8-10 reps</a>
          </p>

          <p>
            6.-<a onClick={curlBicepsInclinado}>▶️</a>Curl de Bíceps con Barra{" "}
            <a className="red">4 series de 8-10 reps</a>
          </p>

          <p>
            7.-<a onClick={fondosMaquina}>▶️</a>fondos en maquina Polea{" "}
            <a className="red">4 series de 8-10 reps</a>
          </p>

          <p className="red">
            *Termina con programa cardio S8-Principiante-Nivel 3*
          </p>
        </div>

        <hr />

        <div className="justify">
          <h1 className="red">Día 5: Jalón</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/elíptica/bicicleta 10min*
          </p>
          <p className="red">
            Ejecución de los ejercicios en 3-4 segundos, descanso de 1-2 minutos
            máximo entre series
          </p>
          <p>
            1.-<a onClick={pulldownMaquina}>▶️</a>Pulldown en Máquina{" "}
            <a className="red">4 series de 8-12 reps</a>
          </p>

          <p>
            2.-<a onClick={remoMaquina}>▶️</a>Remo en Máquina{" "}
            <a className="red">4 series de 8-12 reps</a>
          </p>

          <p>
            3.-<a onClick={jalonesPoleaAlta}>▶️</a>Jalón en Polea con Agarre
            Ancho <a className="red">4 series de 8-12 reps</a>
          </p>

          <p>
            4.-<a onClick={jalonTrasNucaPoleaAlta}>▶️</a>Jalón en Polea con
            Agarre Estrecho <a className="red">4 series de 8-12 reps</a>
          </p>

          <p>
            5.-<a onClick={pulloverPoleaAlta}>▶️</a>Pullovers con Mancuerna{" "}
            <a className="red">4 series de 10-15 reps</a>
          </p>

          <p>
            6.-<a onClick={remoTRX}>▶️</a>Remo con TRX{" "}
            <a className="red">4 series de 8-12 reps</a>
          </p>

          <p>
            7.-<a onClick={curlMartilloSentado}>▶️</a>Curl de Bíceps en Martillo{" "}
            <a className="red">4 series de 10-12 reps</a>
          </p>

          <p className="red">
            *Termina con programa cardio S8-Principiante-Nivel 2*
          </p>
        </div>
      </Collapsible>  */}

      {/* Rutina semana 4 */}
      {/* <Collapsible
        open={true}
        className="dia black1"
        trigger="Semana 3"
        triggerWhenOpen="Semana 3"
        triggerStyle={{ fontSize: "5rem" }}
      >
        <div className="justify">
          <h1 className="red">Dia 1 pecho-hombro-triceps</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*
          </p>
          <p className="red">
            Ejecucion de los ejercicios en 3-4 segundos, descanso de 1 minuto
            maximo entre series{" "}
          </p>
          <p>
            1.-<a onClick={pressPechoMancuernasBancoPlano}>▶️</a>press de pecho
            con mancuernas en banco plano
            <a className="red"> 4 series de 8-10 reps al 75%-85%</a>
          </p>
          <p>
            2.-<a onClick={aperturasMancuernasBancoInclinado}>▶️</a>
            aperturas de mancuernas en banco inclinado
            <a className="red"> 3 series de 12-15 reps al 65%-75%</a>
          </p>
          <p>
            3.-<a onClick={pressMilitarNeutroMancuernas}>▶️</a>press militar
            neutro con mancuernas
            <a className="red"> 4 series de 8-10 reps al 75%-85%</a>
          </p>
          <p>
            4.-<a onClick={elevacionesFrontalesDisco}>▶️</a>elevaciones
            frontales de hombro con disco
            <a className="red"> 3 series de 12-15 reps al 65%-75%</a>
          </p>
          <p>
            5.-<a onClick={fondosAsistidos}>▶️</a>fondos asistidos en maquina
            <a className="red"> 3 series de 12-15 reps al 65%-75%</a>
          </p>
          <p>
            6.-<a onClick={patadasMancuernas}>▶️</a>patadas de triceps con
            mancuerna
            <a className="red"> 4 series de 8-10 reps al 75%-85%</a>
          </p>
          <p>
            7.-<a onClick={planchaIsometrica}>▶️</a>planchas isometricas en
            suelo
            <a className="red"> 4 series de 8-10 reps al 75%-85%</a>
          </p>
          <p>
            8.-<a onClick={crunchesPiernasArriba}>▶️</a>abdomen
            <a className="red"> 4 series al fallo</a>
          </p>
          <p className="red">
            *Termina con programa cardio S8-Principiante-Nivel 2
          </p>
        </div>
        <hr />
        <div className="justify">
          <h1>Dia 2 espalda-trapecio-biceps</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*
          </p>
          <p className="red">
            Ejecucion de los ejercicios en 3-4 segundos, descanso de 1-2 minutos
            maximo entre series{" "}
          </p>
          <p>
            1.-<a onClick={dominadasAsistidas}>▶️</a>Dominas asistidas{" "}
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            2.-<a onClick={pulldownMaquina}>▶️</a>pulldown en maquina
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            3.-<a onClick={remoMancuerna}>▶️</a>remo con mancuernas
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            4.-<a onClick={remoMaquina}>▶️</a>remo en maquina
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            5.-<a onClick={remoMentonBarra}>▶️</a>remo al menton con barra<a className="red"></a>
          </p>
          <p>
            6.-<a onClick={elevacionesLateralesInclinado}>▶️</a>elevaciones
            laterales para trapecio
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            7.-<a onClick={curlBicepsBarra}>▶️</a>curl biceps con barra
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            8.-<a onClick={curlInvertidoBarra}>▶️</a>curl invertido con barra{" "}
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p className="red">
            *Termina con programa cardio S8-Principiante-Nivel 2
          </p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 3 pecho</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*
          </p>
          <p className="red">
            Ejecucion de los ejercicios en 3-4 segundos, descanso de 1-2 minutos
            maximo entre series{" "}
          </p>
          <p>
            1.-<a onClick={pressPechoMaquina}>▶️</a>press pecho en maquina
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            2.-<a onClick={pressPechoMancuernasBancoPlano}>▶️</a>press pecho
            banco plano con mancuernas
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            3.-<a onClick={pressPechoInclinadoMancuernas}>▶️</a>press pecho
            inclinado con mancuernas
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            4.-<a onClick={aperturasMancuernasBancoInclinado}>▶️</a>aperturas en
            banco inclinado
            <a className="red"> 3 series de 12-15 reps al 60%-70%</a>
          </p>
          <p>
            5.-<a onClick={crossOverPoleaAlta}>▶️</a>cross over polea alta en
            polea
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            6.-<a onClick={abdomenInferiorMaquina}>▶️</a>abdomen inferior en
            maquina
            <a className="red">4 series al fallo</a>
          </p>
          <p className="red">
            *Termina con programa cardio S8-Principiante-Nive3
          </p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 4 Full-AMRAP</h1>
          <p className="">
            As Many Rounds o Reps As Possible - Todas las repticiones que puedas
            realizar en 20-30 segundos
          </p>
          <p className="red">
            *Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*
          </p>
          <p className="red">
            Cada ejercicio 5-6 series de 20-30 segundos, movimientos explosivos
            maxima velocidad, peso 20%-40%
          </p>
          <p>
            1.-<a onClick={pressMilitarNeutroMancuernas}>▶️</a>Press Militar con
            mancuernas sentado
            <a className="red"></a>
          </p>
          <p>
            2.-<a onClick={elevacionesLateralesMancuerna}>▶️</a>curl biceps con
            mancuernas sentado
            <a className="red"></a>
          </p>
          <p>
            3.-<a onClick={copaUnaMano}>▶️</a>copa a 1 mano sentado
            <a className="red"></a>
          </p>
          <p>
            4.-<a onClick={extencionCuadriceps}>▶️</a>extencion de cuadriceps en
            maquina<a className="red"></a>
          </p>
          <p>
            5.-<a onClick={curlFemoralSentado}>▶️</a>curl femoral en maquina
            <a className="red"></a>
          </p>
          <p>
            6.-<a onClick={extencionCuadriceps}>▶️</a>extenciones cuadriceps en
            maquina<a className="red"></a>
          </p>
          <p>
            7.-<a onClick={crunchMaquina}>▶️</a>abdominales crunch en maquina
            <a className="red"></a>
          </p>
          <p className="red">
            *Termina con programa bicicleta 10min ritmo ligero
          </p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 5 Empuje</h1>
          <p className="red">
            *Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*
          </p>
          <p className="red">
            Ejecucion de los ejercicios en 3-4 segundos, descanso de 1-2 minutos
            maximo entre series{" "}
          </p>
          <p>
            1.-<a onClick={pressMilitarMaquina}>▶️</a>Press Militar en maquina
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            2.-<a onClick={elevacionesLateralesMancuerna}>▶️</a>elevaciones
            laterales con mancuerna
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
            6.-<a onClick={extencionCuadriceps}>▶️</a>extenciones cuadriceps en
            maquina
            <a className="red"> 4 series de 8-10 reps al 70%-80%</a>
          </p>
          <p>
            7.-<a onClick={crunchMaquina}>▶️</a>abdominales crunch en maquina
            <a className="red"> 4 series al fallo</a>
          </p>
          <p className="red">
            *Termina con programa cardio S8-Principiante-Nivel2
          </p>
        </div>
      </Collapsible>  */}
      {/* Rutina semana 5 */}
      {/* <Collapsible
        open={true}
        className="dia"
        trigger="Semana 4"
        triggerWhenOpen="Semana 4"
        triggerStyle={{ fontSize: '5rem' }}
      >
        <div className="justify">
          <h1 className="red">Dia 1 Full</h1>
          <p className="red">*Inicia con calentamiento en caminadora/eliptica/bicicleta 10min*</p>
          <p className="red">
            4 series 8-15 repeticiones, descanso de 1-2 min, peso bajo 40%-50%
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
          <h1>Dia 2 cuadriceps</h1>
          <p className="red">*Inicia con calentamiento en bicicleta, caminadora o eliptic 10min*</p>
          <p className="red">4 series 8-15 repeticiones, descanso de 1-2 min, peso alto 85%-90%</p>
          <p>
            1.-<a onClick={extencionCuadriceps}>▶️</a>extencion cuadriceps en maquina a 1 pierna<a className="red"></a>
          </p>
          <p>
            2.-<a onClick={curlFemoralSentado}>▶️</a>Curl femoral sentado a 1 pierna <a className="red"></a>
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
            6.-<a onClick={sentadillaExplosiva}>▶️</a>sentadillas explosivas sin peso<a className="red">-4 series de 45 segundos</a>
          </p>
          <p>
            7.-<a onClick={hipThrust}>▶️</a>hip thrust con barra<a className="red"></a>
          </p>
          <p>
            8.-<a onClick={pantorrillaMaquina}>▶️</a>pantorrilla en maquina<a className="red"></a>
          </p>
          <p className="red">*Termina con programa cardio S8-Principiante-Nivel 2</p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 3 Espalda</h1>
          <p className="red">*Inicia con calentamiento en bicicleta, caminadora o eliptica 10min*</p>
          <p className="red">4 series 8-15 repeticiones, descanso de 1-2 min, peso alto 85%-90%</p>
          <p>
            1.-<a onClick={pulldownMaquina}>▶️</a>Pulldown en maquina
            <a className="red"></a>
          </p>
          <p>
            2.-<a onClick={remoNeutroPolea}>▶️</a>remo neutro en polea
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
          <h1 className="">Dia 4 Torso</h1>
          <p className="red">*Inicia con calentamiento en bicicleta, caminadora o eliptica 10min*</p>
          <p className="red">4 series 8-15 repeticiones, descanso de 1-2 min, peso alto 85%-90%</p>
          <p>
            1.-<a onClick={pressMilitarBarraPie}>▶️</a>press militar con barra de pie
            <a className="red"></a>
          </p>
          <p>
            2.-<a onClick={elevacionesLateralesPoleaBaja}>▶️</a>elevaciones laterales en polea baja
            <a className="red"></a>
          </p>
          <p>
            3.-<a onClick={curlBicepsBarra}>▶️</a>curl de biceps con barra de pie<a className="red"></a>
          </p>
          <p>
            4.-<a onClick={copa2Manos}>▶️</a>copa a 2 manos sentado<a className="red"></a>
          </p>
          <p>
            5.-<a onClick={pressPechoBarraInclinado}>▶️</a>press pecho banco inclinado con barra o mancuernas
            <a className="red"></a>
          </p>
          <p>
            6.-<a onClick={pulldownMaquina}>▶️</a>pulldown en maquina<a className="red"></a>
          </p>
          <p>
            7.-<a onClick={remoMaquina}>▶️</a>remo en maquina<a className="red"></a>
          </p>
          <p>
            8.-<a onClick={encogimientosHombrosMancuernas}>▶️</a>encogimientos de hombros con mancuernas<a className="red"></a>
          </p>
          <p>
            9.-<a onClick={abdomenInferiorLibre}>▶️</a>abdomen<a className="red">-4 series de 45 segundos</a>
          </p>
          <p className="red">*Termina con programa con bicicleta, 10 min ritmo bajo</p>
        </div>
        <hr />
        <div className="justify">
          <h1 className="red">Dia 5 AMRAP Fullbody</h1>
          <p className="red">*Inicia con calentamiento en caminadora/elíptica/bicicleta 10min*</p>
          <p className="red">
            Realiza todas las repeticiones y series que puedas de cada ejercicios durante 1 minuto, seran 5-6 vueltas por cada ejercicio descansando 1 minuto, con 20%-30% de peso
          </p>
          <p>
            1.- <a onClick={sentadillaBarra}>▶️</a> Sentadilla con barra
            <a className="red"></a>
          </p>
          <p>
            2.- <a onClick={pressPechoPlanoBarra}>▶️</a> Press de banca con barra
            <a className="red"></a>
          </p>
          <p>
            3.- <a onClick={dominadasAsistidas}>▶️</a> Dominadas asistidas
            <a className="red"></a>
          </p>
          <p>
            4.- <a onClick={fondosMaquina}>▶️</a> Fondos en maquina
            <a className="red"></a>
          </p>
          <p>
            5.- <a onClick={pesoMuertoBarra}>▶️</a> Peso muerto con barra
            <a className="red"></a>
          </p>
          <p>
            6.- <a onClick={remoBarra}>▶️</a> Remo con barra
            <a className="red"></a>
          </p>
          <p>
            7.- <a onClick={pressMilitarNeutroMancuernas}>▶️</a> Press de hombros con mancuernas
            <a className="red"></a>
          </p>
          <p>
            8.- <a onClick={curlBicepsBarra}>▶️</a> Curl de bíceps con barra recta
            <a className="red"></a>
          </p>
          <p className="red">*Termina con programa bicicleta 10min ritmo ligero*</p>
        </div>

      </Collapsible>  */}
      <button onClick={whatsapp} className="button2">
        ¿Tienes alguna duda o problema con tu rutina?
      </button>
      <footer className="footer">
        <h1 className="lFooter">Blxck Training</h1>
        <img className="iFooter" src="images/blxckLogo.png" alt="" />
      </footer>
    </div>
  );
};

export default Floridalma;
