import React, { createContext, ReactElement, useContext, useState } from 'react'

import WeatherstationsMap from '..'

interface ContextProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const TransactionsModalContext = createContext<ContextProps | null>(null)

interface Props {
  children: ReactElement | ReactElement[]
}

export const WeatherStationsMapModalProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <TransactionsModalContext.Provider value={{ isOpen, setIsOpen }}>
      <WeatherstationsMap />
      {children}
    </TransactionsModalContext.Provider>
  )
}

export const useWeatherStationMapModal = () => {
  const context = useContext(TransactionsModalContext)
  if (!context) {
    throw new Error(
      'useWeatherStationMapModal must be used within a WeatherStationsMapModalProvider',
    )
  }
  return context
}
