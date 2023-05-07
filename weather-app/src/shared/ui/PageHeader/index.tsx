import React from 'react'
import 'twin.macro'

interface Props {
  children: string
}

const PageHeader = ({ children }: Props) => {
  return <h1 tw="text-3xl font-medium mb-5">{children}</h1>
}

export default PageHeader
