import * as React from 'react'
import './styles.css'
import { TabView } from './tab-view'
import { Content1 } from './content'

export default function App() {
  return (
    <div className="App">
      <TabView
        width={800}
        tabs={[
          { title: 'Love', view: <Content1 /> },
          { title: 'Hate', view: <Content1 /> },
        ]}
      />
    </div>
  )
}
