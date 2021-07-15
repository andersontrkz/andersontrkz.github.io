import { Box } from '@material-ui/core'
import { Map, Marker, Overlay } from "pigeon-maps"

const DEFAULT_POSITION = { latitude: -25.4110, longitude: -51.4862}

export default function ContactMap () {
  const { latitude, longitude } = DEFAULT_POSITION;

  return (
    <Box className="contact-map-container">
      <Map
      defaultCenter={[latitude, longitude]}
      defaultZoom={5}
      >
        <Marker
        color='var(--secundary-theme)'
        width={50}
        anchor={[latitude, longitude]}
        />
        <Overlay className="contact-map-overlay" anchor={[latitude, longitude]} offset={[-120, -120]}>
            <p className="contact-map-overlay-text">
              Anderson Turkiewicz
              Brasil, Paraná
              Guarapuava - Centro
              CEP 85010-010
            </p>
        </Overlay>
      </Map>
    </Box>
  )
}