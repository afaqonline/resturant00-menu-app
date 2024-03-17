import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
    <h2 className='site-title'>Chef Morgan</h2>
    <h2 className='site-resturant'>Resturant</h2>
    <nav className='navbar'>
      <div className='btn-group'>
      {
        menuList.map((curElem)=> {
            return(
                <button className='btn-group__item' onClick={()=>filterItem(curElem)}>{curElem}</button>
            )
        })
      }
      </div>
    </nav>
    </>
  )
}

export default Navbar