import { timeFormat, timeParse } from 'd3-time-format'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { DateRangePicker, InputPicker } from 'rsuite'

const data = [
  { label: 'Days', value: '24H' },
  { label: '12 hours', value: '12H' },
  { label: 'Hour', value: '1H' },
  { label: '30 min', value: '30T' },
]

const ContextGroupBy = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div>
      <div>Group by</div>
      <InputPicker
        data={data}
        onSelect={(_, option) => {
          searchParams.append('groupBy', option.value as string)

          setSearchParams(searchParams)
        }}
      />
    </div>
  )
}

export default ContextGroupBy
