import tw, { styled } from 'twin.macro'

// export const Container = styled.div(
//   ({ width1 }: { width1: number }) => `
//   color: black;
//   width: ${width1}px;
// `,
// )

export const Container = tw.div`

grow
    rounded-xl bg-white
    p-6
`

export const WindBar = tw.div`
relative
rounded-xl bg-gray-200 
text-2xl
font-bold
text-white
text-center

[height: 150px]
`

export const WindBarText = tw.span`
    absolute

    text-4xl
    font-bold
    text-white

    top-1/2
    left-1/2
    transform -translate-x-1/2 -translate-y-1/2
`

export const WindBarFilled = styled.div(
  ({ width, windSpeed }: { width: string; windSpeed: number }) => `
      width: ${width};
      border-radius: 0.75rem 0 0 0.75rem;
      background-color: rgb(${windSpeed * 25.5}, 0, ${255 - windSpeed * 25.5});
      font-size: 1.5rem;
      font-weight: bold;
      color: #FFFFFF;
      text-align: center;
      height: 100%;
      transition: all 0.3s ease-in-out;
    `,
)

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
