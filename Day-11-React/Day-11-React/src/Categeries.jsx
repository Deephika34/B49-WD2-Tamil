import React from 'react'
import 
{  BsPeopleFill, BsBullseye, BsTreeFill, BsBuilding, BsPower, BsGearFill, BsTools, BsBook, BsLaptopFill, BsFileWordFill, BsPersonAdd}
 from 'react-icons/bs'

const Categories = () => {
  return (
    <div className="main-container" style={{width:"1200px"}}>
      <div className='main-title'>
            <h3>CATEGORIES</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ANIMALS</h3>
                    <BsBullseye className='card_icon'/>
                </div>
                <h1>18</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>HUMANS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PLANTS</h3>
                    <BsTreeFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>BUILDINGS</h3>
                    <BsBuilding className='card_icon'/>
                </div>
                <h1>8</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ELECTRONICS</h3>
                    <BsPower className='card_icon'/>
                </div>
                <h1>4</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>MECHANICAL</h3>
                    <BsGearFill className='card_icon'/>
                </div>
                <h1>14</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CIVIL</h3>
                    <BsTools className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ARTS AND SCIE</h3>
                    <BsBook className='card_icon'/>
                </div>
                <h1>25</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOOL & DIE</h3>
                    <BsTools className='card_icon'/>
                </div>
                <h1>32</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COMPUTURES</h3>
                    <BsLaptopFill className='card_icon'/>
                </div>
                <h1>18</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>SOCIAL</h3>
                    <BsFileWordFill className='card_icon'/>
                </div>
                <h1>9</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>WINNERS</h3>
                    <BsPersonAdd className='card_icon'/>
                </div>
                <h1>20</h1>
            </div>
        </div>
    </div>
  )
}

export default Categories