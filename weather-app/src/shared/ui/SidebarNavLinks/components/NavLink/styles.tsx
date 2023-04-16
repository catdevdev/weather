import { NavLink as NavLinkRouter } from 'react-router-dom'
import tw, { styled, css } from 'twin.macro'

export const NavLink = styled(NavLinkRouter)`
  ${css`
    ${tw` text-gray-500 text-lg font-medium`};

    &.active {
      ${tw`text-black`};
    }
  `}
`

interface NavLinkWrapperProps {
  isActive: boolean
}

export const NavLinkWrapper = styled.div<NavLinkWrapperProps>`
  ${tw`flex items-center px-2 py-1.5 rounded-xl gap-1.5`}

  ${({ isActive }) => isActive && tw`bg-gray-200`}
`
