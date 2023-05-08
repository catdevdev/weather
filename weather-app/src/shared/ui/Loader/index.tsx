import React from 'react'
import { PulseLoader } from 'react-spinners'

import 'twin.macro'

const Loader = () => {
  return (
    <div tw="flex justify-center">
      <PulseLoader size="10px" color="#999999" />
    </div>
  )
}

export default Loader
