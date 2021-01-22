import React from 'react'

export default function NotFound() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
      }}>
      <h1 style={{ color: '#5f9ea0' }}> 404: Not Found </h1>
      <p>We Are Sorry, This Page Appears To Be Missing Or Could Not Be Found</p>
    </div>
  )
}
