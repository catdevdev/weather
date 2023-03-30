import tw, { styled } from 'twin.macro'

const WidgetCard = styled.div(() => [
  // The common button styles
  tw`rounded-2xl
  shadow-2xl shadow-black border-2 border-black p-1`,

  // Use the variant grouping feature to add variants to multiple classes

  // The theme import can supply values from your tailwind.config.js
])

export { WidgetCard }
