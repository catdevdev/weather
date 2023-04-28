import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { Link } from 'react-router-dom'
import 'twin.macro'

import { ModalContainer } from './styles'

const WeatherstationsMap = () => {
  return (
    <ModalContainer>
      <div tw="fixed top-52 left-52 z-[500]">
        <Link to={'/'}>return</Link>
      </div>
      <MapContainer
        style={{ height: '100vh' }}
        center={[46.5325, 30.8033]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[46.4825, 30.7233]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </ModalContainer>
  )
}

export default WeatherstationsMap
