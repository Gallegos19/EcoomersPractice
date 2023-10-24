import React from 'react'

export default function Button(props) {
  return (
    <div>
        <button type="button">
            {props.nombre}
        </button>
    </div>
  )
}
