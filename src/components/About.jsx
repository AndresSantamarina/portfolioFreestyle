import { Col, Container, Row } from "react-bootstrap";
import showCamioneros from "../assets/ShowCamioneros.mp4";
import showFutsal from "../assets/video9.mp4";
import showsGrales from "../assets/video4.mp4";
import CarouselComponent from "./CarouselComponent";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { useEffect, useRef } from "react";

const About = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  useEffect(() => {
    const player1 = videojs(videoRef1.current, {
      autoplay: true,
      controls: true,
      loop: true,
      muted: true,
      sources: [{ src: showCamioneros, type: "video/mp4" }],
    });

    const player2 = videojs(videoRef2.current, {
      autoplay: true,
      controls: true,
      loop: true,
      muted: true,
      sources: [{ src: showFutsal, type: "video/mp4" }],
    });

    const player3 = videojs(videoRef3.current, {
      autoplay: true,
      controls: true,
      loop: true,
      muted: true,
      sources: [{ src: showsGrales, type: "video/mp4" }],
    });

    return () => {
      if (player1) {
        player1.dispose();
      }
      if (player2) {
        player2.dispose();
      }
      if (player3) {
        player3.dispose();
      }
    };
  }, []);

  return (
    <>
      <h2 className="text-center py-5 mb-5 tituloBienvenida text-white display-4">
        ¡BIENVENIDOS!
      </h2>
      <Container>
        <p className="text-center my-3 presentacion pt-5">
          HOLA! MI NOMBRE ES{" "}
          <span className="fw-bold spanColor">ANDRÉS SANTAMARINA</span>, SOY DE
          LA PROVINCIA DE TUCUMÁN, TENGO 26 AÑOS Y LLEVO PRACTICANDO FREESTYLE
          FÚTBOL DESDE QUE TENÍA 12. <br />A LO LARGO DE MI CARRERA, PARTICIPÉ
          DE DISTINTOS CAMPEONATOS Y TAMBIÉN REALICÉ UNA GRAN CANTIDAD DE SHOWS
          EN DISTINTOS EVENTOS DEPORTIVOS, FESTIVIDADES, ETC.
        </p>
        <article className="py-5">
          <h2 className="text-center my-5 tituloAbout fw-bold">COMPETENCIAS</h2>

          <ul className="text-center m-5">
            <li className="list-group-item mt-4">
              <i className="bi bi-trophy-fill iconAbout"></i> EL{" "}
              <span className="fw-bold spanColor">
                TORNEO TUCUMANO DE FREESTYLE FÚTBOL 2018
              </span>
              , EN LA CIUDAD DE SAN MIGUEL DE TUCUMÁN, EN DONDE CONSEGUÍ SALIR{" "}
              <span className="fw-bold spanColor">CAMPEÓN</span>.
            </li>
            <li className="list-group-item mt-4">
              <i className="bi bi-trophy-fill iconAbout"></i> EL{" "}
              <span className="fw-bold spanColor">
                TORNEO TUCUMANO DE FREESTYLE FÚTBOL 2019
              </span>
              , EN LA CIUDAD DE RACO, EN DONDE PUDE{" "}
              <span className="fw-bold spanColor">DEFENDER MI TÍTULO</span>.
            </li>
            <li className="list-group-item mt-4">
              <i className="bi bi-check-lg iconAbout"></i>{" "}
              <span className="fw-bold spanColor">
                RED BULL STREET STYLE 2021
              </span>
              , EN DONDE CONSEGUÍ QUEDAR ENTRE LOS{" "}
              <span className="fw-bold spanColor">
                8 MEJORES FREESTYLERS A NIVEL NACIONAL
              </span>
              .
            </li>
          </ul>
          <CarouselComponent />
        </article>

        <article className="py-5">
          <h2 className="text-center tituloAbout fw-bold">SHOWS</h2>

          <Row className="my-5">
            <Col className="d-flex align-items-center justify-content-center m-1">
              <p className="text-center textoShow p-3">
                ⚽EN LA PRESENTACIÓN DE LA CAMISETA DEL{" "}
                <span className="fw-bold spanTexto">
                  EQUIPO DE FÚTBOL DE CAMIONEROS
                </span>
                ⚽
              </p>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <div data-vjs-player>
                <video ref={videoRef1} className="video-js" />
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="d-flex align-items-center justify-content-center mb-3">
              <div data-vjs-player>
                <video ref={videoRef2} className="video-js" />
              </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center m-1">
              <p className="text-center textoShow p-3">
                🏆EN EL PARTIDO AMISTOSO DE{" "}
                <span className="fw-bold spanTexto">
                  LA SELECCIÓN ARGENTINA DE FUTSAL
                </span>{" "}
                EN SU GIRA, LUEGO DE SALIR CAMPEONES DEL MUNDO🏆
              </p>
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="d-flex align-items-center justify-content-center m-1">
              <p className="text-center textoShow p-3">
                🎊EN DISTINTOS{" "}
                <span className="fw-bold spanTexto">CUMPLEAÑOS</span>,{" "}
                <span className="fw-bold spanTexto">FESTIVIDADES</span>,{" "}
                <span className="fw-bold spanTexto">EVENTOS ESCOLARES</span>,
                ETC🎊
              </p>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <div data-vjs-player>
                <video ref={videoRef3} className="video-js" />
              </div>
            </Col>
          </Row>
        </article>
      </Container>
    </>
  );
};

export default About;
