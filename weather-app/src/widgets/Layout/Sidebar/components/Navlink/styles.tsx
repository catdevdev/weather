import { NavLink as NavLinkRouter } from 'react-router-dom'
import tw, { styled, css } from 'twin.macro'

// export const Container = tw.header`flex items-center w-full h-[80px] pl-[400px] fixed bg-slate-50 drop-shadow-xl`

export const NavLink = styled(NavLinkRouter)`
  ${css`
    ${tw`text-neutral-500 text-base`};

    .active {
      ${tw`text-black`};
    }
  `}
`
