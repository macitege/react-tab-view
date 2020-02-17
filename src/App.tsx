import * as React from 'react'
import './styles.css'
import { TabView } from './tab-view'
import { Content1 } from './content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHandMiddleFinger } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <div className="App">
      <TabView
        width={800}
        tabs={[
          {
            title: 'Love',
            view: <Content1 />,
            icon: <FontAwesomeIcon icon={faHeart} size="2x" />,
          },
          {
            title: 'Hate',
            view: <Content1 />,
            icon: <FontAwesomeIcon icon={faHandMiddleFinger} size="2x" />,
          },
        ]}
      />
    </div>
  )
}
