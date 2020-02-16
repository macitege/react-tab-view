import * as React from 'react'
import './styles.css'
import { TabView } from './tab-view'

export default function App() {
  return (
    <div className="App">
      <TabView
        width={800}
        tabs={[
          { title: 'Love', view: <div>No content</div> },
          { title: 'Hate', view: <div>Yes content</div> },
        ]}
      />
    </div>
  )
}
