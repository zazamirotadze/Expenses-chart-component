import React from 'react'

const Rectangle = ({day, amount, height, isHighest}) => {
  return (
    <div className='chart-part'>
      <div className={isHighest?"chart-part-highest":"chart-part-rectangle"}style={{height: `${height}%`}}>
      <div className='chart-part-amount' >${amount}</div>
      </div>
      <div className='chart-part-day'>{day}</div>
    </div>
  )
}

export default Rectangle
