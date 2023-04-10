import { NavLink as NavLinkRouter } from 'react-router-dom'
import tw, { styled, css } from 'twin.macro'

export const NavLink = styled(NavLinkRouter)`
  ${css`
    ${tw`text-neutral-500 text-base`};

    .active {
      ${tw`text-black`};
    }
  `}
`
