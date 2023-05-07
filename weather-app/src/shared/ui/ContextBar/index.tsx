import { timeFormat, timeParse } from 'd3-time-format'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Select, { MenuListProps, components } from 'react-select'
import {
  Form,
  Button,
  ButtonToolbar,
  Schema,
  Panel,
  DateRangePicker,
  ButtonGroup,
} from 'rsuite'
import FormControl from 'rsuite/esm/FormControl'

import 'twin.macro'

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

const ContextBar = ({ children }: Props) => {
  return (
    <div tw="flex p-5 items-center bg-slate-50 rounded-xl shadow-xl mb-10 gap-5">
      {children}
    </div>
  )
}

export default ContextBar
