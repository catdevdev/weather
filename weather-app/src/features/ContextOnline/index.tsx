import { timeFormat, timeParse } from 'd3-time-format'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button, ButtonGroup, DateRangePicker } from 'rsuite'

const ContextOnline = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const selectOnlineOption = ({ param }: { param?: string } = {}) => {
    if (!param) {
      return setSearchParams({})
    }
    setSearchParams({ online: param })
  }

  return (
    <div>
      <div>Online</div>
      <ButtonGroup size="md">
        <Button
          onClick={() => {
            selectOnlineOption()
          }}
        >
          5 min
        </Button>
        <Button
          onClick={() => {
            selectOnlineOption({ param: '20min' })
          }}
        >
          20 min
        </Button>
        <Button
          onClick={() => {
            selectOnlineOption({ param: '60min' })
          }}
        >
          60 min
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default ContextOnline
