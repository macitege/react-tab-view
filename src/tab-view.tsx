import React, { useState, useRef, useEffect } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { Colors } from './colors'

type TabType = {
  title: string
  view: React.ReactNode
  icon?: React.ReactNode
}

type Props = {
  tabs: Array<TabType>
  initialIndex?: number
  width: number
}

export const TabView: React.FC = ({ tabs, initialIndex, width }: Props) => {
  const tabViewRef = useRef()
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [clientWidth, setClientWidth] = useState(0)
  const [buttonWidth, setButtonWidth] = useState(0)
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (tabViewRef.current) {
        setClientWidth(tabViewRef.current.clientWidth)
      }
    })
  }, [])
  useEffect(() => {
    if (tabViewRef.current) {
      setClientWidth(tabViewRef.current.clientWidth)
    }
  }, [tabViewRef])

  useEffect(() => {
    setSelectedTabIndex(initialIndex || 0)
    setButtonWidth(clientWidth / tabs.length)
  }, [clientWidth])

  const tabContents = tabs.map((tab: TabType, i: number) => (
    <CSSTransition
      key={`${tab.title}-tab-view`}
      classNames={`${i === 0 ? 'slideInOutLeft' : 'slideInOutRight'}`}
      timeout={150}>
      {tab.view}
    </CSSTransition>
  ))

  return (
    <div className="tab-view" style={{ width }} ref={tabViewRef}>
      <nav className="tab-bar">
        {clientWidth &&
          tabs.map((t: TabType, i: number) => {
            const isSelected = selectedTabIndex === i
            return (
              <div key={`${t.title}-tab`} className="button-wrapper">
                <button
                  type="button"
                  className={`tab-bar-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedTabIndex(i)}
                  style={{ width: buttonWidth }}>
                  <span
                    className={`tab-bar-icon ${isSelected ? 'active' : ''}`}>
                    {t.icon && t.icon}
                  </span>
                  <span className="tab-bar-txt">{t.title}</span>
                </button>
              </div>
            )
          })}
        {clientWidth && (
          <div
            className="btn-indicator"
            style={{
              left: selectedTabIndex * buttonWidth,
              width: buttonWidth,
            }}
          />
        )}
      </nav>

      <div className="tab-content">
        <SwitchTransition mode="out-in">
          {tabContents[selectedTabIndex]}
        </SwitchTransition>
      </div>
    </div>
  )
}
