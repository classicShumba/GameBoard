import React from 'react'

const GameCircle = ({id, children, className, onCircleClicked}) => {

  return (
    <div className={`gamecircle player_0 ${className} `}
        onClick={ () => onCircleClicked(id)}>
        {children}
    </div>
  )
}

export default GameCircle