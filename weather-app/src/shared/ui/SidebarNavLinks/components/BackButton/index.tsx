import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { NavLinkProps } from 'react-router-dom'

import { NavLink } from '../NavLink'

interface BackButtonProps extends NavLinkProps {}

const BackButton = ({ ...props }: BackButtonProps) => {
  return <NavLink {...props} icon={BsArrowLeftShort}></NavLink>
}

export { BackButton }
