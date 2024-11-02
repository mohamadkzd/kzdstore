import React from 'react'

interface IContainer {
children:React.ReactNode;
}

const Container = ({children}:IContainer) => {
  return (
    <div className='max-w-[1400px] mx-auto'>
        {children}
    </div>
  )
}

export default Container