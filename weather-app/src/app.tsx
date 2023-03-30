import React from 'react'
import tw from 'twin.macro'
import { Button, Logo } from './shared/ui'
import WidgetCard from './shared/ui/WidgetCard'
import TodoList from './widget/TodoList'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const App = () => (
  <div>
    <TodoList></TodoList>
    {/* <div tw='bg-red-500' ></div> */}
    {/* <div className="flex flex-col justify-center h-full gap-y-5"></div>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button tw="bg-red-600" variant="primary">
        Submit
      </Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo /> */}
  </div>
)

export default App
