import { timeFormat, timeParse } from 'd3-time-format'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { DateRangePicker } from 'rsuite'

const ContextTimeFrame = () => {
  const [_, setSearchParams] = useSearchParams()

  return (
    <div>
      <div>Time frame</div>
      <DateRangePicker
        onChange={e => {
          if (!e) return null

          const from = timeFormat('%Y-%m-%dT%H:%M:%S%Z')(e[0])
          const to = timeFormat('%Y-%m-%dT%H:%M:%S%Z')(e[1])

          if (!from || !to) return null

          setSearchParams({ from, to })
        }}
        format="yyyy-MM-dd HH:mm:ss"
      />
    </div>
  )
}

export default ContextTimeFrame
