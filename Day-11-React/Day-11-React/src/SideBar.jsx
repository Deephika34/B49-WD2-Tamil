import React, { useContext } from 'react'
import 
{ BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsBookHalf, BsPersonWorkspace}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Context_Api } from './Context-Api'

function Sidebar() {

        const {openSidebarToggle, OpenSidebar}=useContext(Context_Api)
  return (
        
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": "" }>
        

        <div className='sidebar-list '>
        <div className='sidebar-title '>
            <div className='sidebar-brand'>
                <BsPersonWorkspace className='icon_header'/> LIBRARY
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
            <Link to={'/'} className='sidebar-list-item'>
                
                    <BsGrid1X2Fill className='icon'/> Dashboard
              
            </Link>
            <Link to={'/book'} className='sidebar-list-item'>
                
                    <BsBookHalf className='icon'/> Books
              
            </Link>
            <Link to={'/categories'} className='sidebar-list-item'>
                
                    <BsFillGrid3X3GapFill className='icon'/> Categories
              
            </Link>
            <Link to={'/customers'} className='sidebar-list-item'>
                
                    <BsPeopleFill className='icon'/> Customers
              
            </Link>
            <Link to={'/inventory'} className='sidebar-list-item'>
                
                    <BsListCheck className='icon'/> Inventory
              
            </Link>
            <Link to={'/reports'} className='sidebar-list-item'>
                
                    <BsMenuButtonWideFill className='icon'/> Reports
              
            </Link>
            <Link to={'/settings'} className='sidebar-list-item'>
                
                    <BsFillGearFill className='icon'/> Settings
              
            </Link>
        </div>
    </aside>
  )
}

export default Sidebar