import React from 'react'
import { useDrag } from 'react-dnd'

export default function DraggableImage({ id, src, width, title }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'image',
    item: { id },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  }))

  const commonStyle = {
    margin: '10px',
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab',
    transition: 'transform 0.3s',
    transform: isDragging ? 'scale(1.05)' : 'scale(1)'
  }

  if (!src) {
    return (
      <span
        ref={dragRef}
        title={title}
        style={{
          ...commonStyle,
          fontSize: '1.5rem',
          fontWeight: 'bold',
          padding: '8px 16px',
          border: '2px solid currentColor',
          borderRadius: '8px',
          display: 'inline-block',
          backgroundColor: 'white'
        }}
      >
        {title}
      </span>
    )
  }

  return (
    <img
      ref={dragRef}
      src={src}
      title={title}
      alt=""
      style={{
        ...commonStyle,
        width: width || '7vw',
        height: "auto"
      }}
    />
  )
}
