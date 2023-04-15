import { NavLink as NavLinkRouter } from 'react-router-dom'
import tw, { styled, css } from 'twin.macro'

export const NavLink = styled(NavLinkRouter)`
  ${css`
    ${tw` text-black text-base`};

    &.active {
      ${tw`text-fuchsia-700 `};
    }
  `}
`

export const NavLinkWrapper = tw.div`
  flex
`
