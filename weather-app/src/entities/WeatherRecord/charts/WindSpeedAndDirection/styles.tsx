import tw, { styled } from 'twin.macro'

// export const Container = styled.div(
//   ({ width1 }: { width1: number }) => `
//   color: black;
//   width: ${width1}px;
// `,
// )

export const Container = tw.div`
    rounded-xl bg-white
    p-10
`

export const Label = tw.div`
    text-2xl
    mb-4
`

export const Circle = tw.div`
    flex
    rounded-full
    w-[300px]
    h-[300px]
    bg-neutral-200
    relative
`

export const WindSpeedContainer = tw.div`
    // flex
    absolute
    z-20
    h-fit
    top-1/2
    left-1/2
    transform -translate-x-1/2 -translate-y-1/2

`

export const WindSpeedLabel = tw.div`
    text-center
    text-base
`

export const WindSpeedValue = tw.div`
    text-center
    font-bold
    text-4xl
`
export const ArrowContainer = styled.div(
  ({ angle }: { angle: number }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 10
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-100%) rotate(${angle}deg);
    transition: transform 0.3s ease-in-out;
    transform-origin: bottom;
    `,
)

export const Arrow = tw.div`
    w-0
    h-0
    border-l-[20px]
    border-l-transparent
    border-r-[20px]
    border-r-transparent
    
    border-b-[32px]
    border-b-red-500
`

export const Tail = tw.div`
    w-[8px]
    h-[46px]
    bg-red-500
    mb-8
`

export const N = tw.div`
    absolute
    w-fit
    h-fit
    top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-2xl
    font-bold
`

export const NE = tw.div`
    absolute
    w-fit
    h-fit
    top-[15%] left-[85%] transform -translate-x-1/2 -translate-y-1/2
    text-2xl
    font-bold
`

export const E = tw.div`
    absolute
    w-fit
    h-fit
    top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2
    text-2xl
    font-bold
`

export const SE = tw.div`
    absolute
    w-fit
    h-fit
    top-[85%] left-[85%] transform -translate-x-1/2 -translate-y-1/2
    text-2xl
    font-bold
`

export const S = tw.div`
    absolute
    w-fit
    h-fit
    top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-2xl
    font-bold
`

export const SW = tw.div`
    absolute
    w-fit
    h-fit
    top-[85%] left-[15%] transform -translate-x-1/2 -translate-y-1/2
    text-2xl
    font-bold    
`

export const W = tw.div`
    absolute
    w-fit
    h-fit
    top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2
    text-2xl
    font-bold
`

export const NW = tw.div`
    absolute
    w-fit
    h-fit
    top-[15%] left-[15%] transform -translate-x-1/2 -translate-y-1/2
    text-2xl
    font-bold
`
