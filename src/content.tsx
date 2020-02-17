import React from 'react'

export const Content1: React.FC = () => {
  return (
    <div
      style={{
        height: '288px',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 20,
        padding: 20,
      }}>
      {['', '', ''].map(i => (
        <div
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.4)',
            height: 20,
            margin: '5px 0',
          }}
        />
      ))}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <div style={{ width: '48%' }}>
          {['', '', '', ''].map(i => (
            <div
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.4)',
                height: 20,
                margin: '5px 0',
              }}
            />
          ))}
        </div>
        <div style={{ width: '48%' }}>
          {['', '', '', ''].map(i => (
            <div
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.4)',
                height: 20,
                margin: '5px 0',
              }}
            />
          ))}
        </div>
      </div>
      {['', '', '', ''].map(i => (
        <div
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.4)',
            height: 20,
            margin: '5px 0',
          }}
        />
      ))}
    </div>
  )
}
