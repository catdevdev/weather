import { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import { Button } from 'rsuite'
import 'twin.macro'

import { useAppDispatch, useAppSelector } from '@shared/hook/redux'

import { getWeatherstations } from '@entities/WeatherStation'

import { useWeatherStationMapModal } from './context'
import Printed from './images/3d-printed.png'
import Complex from './images/complex.png'
import { ModalContainer } from './styles'

const WeatherstationsMap = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const weatherStations = useAppSelector(
    state => state.weatherStations.weatherStations,
  )

  const { isOpen, setIsOpen } = useWeatherStationMapModal()

  useEffect(() => {
    dispatch(getWeatherstations())
  }, [])

  return (
    <>
      {isOpen && (
        <ModalContainer>
          <div
            onClick={() => {
              setIsOpen(false)
            }}
            tw="fixed top-10 right-10 z-[500] bg-white shadow-2xl p-5"
          >
            return
          </div>
          <MapContainer
            style={{ height: '100vh' }}
            center={[46.5825, 30.8033]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {weatherStations.map((weatherStation, index) => (
              <Marker
                position={[weatherStation.latitude, weatherStation.longitude]}
              >
                <Popup>
                  <div tw="flex flex-col justify-center">
                    <div tw="font-extrabold text-xl mb-2">
                      Weather station{' '}
                      <b tw="text-sky-600"> {weatherStation.id.slice(0, 5)}</b>
                    </div>

                    {index === 0 && <img src={Printed} alt="" />}
                    {index === 1 && <img src={Complex} alt="" />}

                    <Button
                      onClick={() => {
                        navigate(`/overview/${weatherStation.id}`)
                        setIsOpen(false)
                      }}
                      tw="mt-3"
                      appearance="primary"
                      size="lg"
                    >
                      Proceed
                    </Button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </ModalContainer>
      )}
    </>
  )
}

export default WeatherstationsMap
