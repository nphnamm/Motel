import React, { memo } from 'react'
import icons from '../utils/icons';


const Button = ({text,textColor,bgColor,Icons, onClick, fullWidth}) => {
  console.log('login');
  return (
    <button
    type='button'
    className={`p-2  ${textColor} ${bgColor} ${fullWidth && 'w-full'} outline-none rounded-md font-bond hover:underline flex items-center justify-center gap-1`}
    onClick={onClick}
    >
        <span>
          {text}
          </span>
          
          <span>{Icons && <Icons/>}</span>
    </button>
  )
}

export default memo(Button)
