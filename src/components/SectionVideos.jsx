import { Col, Container, Row } from "react-bootstrap";
import video2 from "../assets/video7.mp4";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { useEffect, useRef } from "react";


const SectionVideos = () => {
  const videoRef = useRef(null);
  let player = null;

  useEffect(() => {
    // Configuración del reproductor de video
    player = videojs(videoRef.current, {
      autoplay: true,
      controls: true,
      loop: true,
      muted: true,
      sources: [
        {
          src: video2,
          type: "video/mp4",
        },
      ],
    });

    return () => {
      // Limpieza al desmontar el componente
      if (player !== null) {
        player.dispose(); // Liberar recursos del reproductor
      }
    };
  }, []);

  return (
    <Container>
      <h2 className="text-center mb-5 bt-3 tituloAbout fw-bold">CONTRATACIONES</h2>
      <p className="text-center">
        POR CONTRATACIONES PARA   <span className="fw-bold spanColor">SHOWS</span>,   <span className="fw-bold spanColor">EVENTOS PROMOCIONALES</span> O PARA   <span className="fw-bold spanColor">APRENDER A
        HACER FREESTYLE FÚTBOL</span>, ME PUEDEN CONTACTAR A TRAVÉS DE MIS REDES
        SOCIALES, O POR MEDIO DE WHATSAPP.
      </p>
      <Row>
        <Col xs={12} className="d-flex justify-content-center my-5">
          {" "}
          {/* <video width="300" controls>
            <source src={video2} type="video/mp4" />
          </video> */}
          <div data-vjs-player>
            <video ref={videoRef} className="video-js" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionVideos;
