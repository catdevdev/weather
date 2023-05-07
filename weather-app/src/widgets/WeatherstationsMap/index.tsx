import { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import 'twin.macro'
import { useAppDispatch, useAppSelector } from '@shared/hook/redux'

import {
  getWeatherstations,
  weatherStationsSlice,
} from '@entities/WeatherStation'

import { ModalContainer } from './styles'

const WeatherstationsMap = () => {
  const dispatch = useAppDispatch()
  const weatherStations = useAppSelector(
    state => state.weatherStations.weatherStations,
  )

  useEffect(() => {
    dispatch(getWeatherstations())
  }, [])

  return (
    <ModalContainer>
      <div tw="fixed top-10 right-10 z-[500] bg-white shadow-2xl p-5">
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
        {weatherStations.map(weatherStation => (
          <Marker
            position={[weatherStation.latitude, weatherStation.longitude]}
          >
            <Popup>{weatherStation.id}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </ModalContainer>
  )
}

export default WeatherstationsMap
