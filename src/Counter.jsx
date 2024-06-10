import React from 'react'

const Counter = ({ title, desc }) => {
  return (
    <div className='counter'>
      <span className='counter-title'>{title}</span>
      <span className='counter-desc'>{desc}</span>
      <div className="counter-wrapper">
        <svg className='sign-icon' viewBox="0 0 429.17 429.17"
          height={23} width={23}>
          <line className="sign-icon-line" x1="297.43" y1="214.59"
            x2="131.74" y2="214.59" />
        </svg>
        <span className='counter-value'>0</span>
        <svg className='sign-icon' viewBox="0 0 429.17 429.17"
          height={23} width={23}>
          <line className="sign-icon-line" x1="98.52" y1="214.59"
            x2="330.65" y2="214.59" />
          <line className="sign-icon-line" x1="214.59" y1="330.65"
            x2="214.59" y2="98.52" />
        </svg>
      </div>
    </div>
  )
}

export default Counter