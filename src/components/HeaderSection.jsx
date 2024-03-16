import React from 'react'
import Logo from '../assets/images/Png/logo.png'
import { Download_logo } from './Comman Components/Icon'
import Window_logo from '../assets/images/Png/download_for_windows.png'


const HeaderSection = () => {
    return (
        <div className='bg_hero bg-no-repeat bg-center bg-cover min-h-screen'>
            <nav >
                <div className=' flex justify-between items-center'>
                    <div className=' flex '>
                        <img src={Logo} alt="#" />
                        <div>
                            <p className='text-white'>porofessor.gg</p>
                            <p className='text-white'>on Overwolf</p>
                        </div>
                    </div>
                    <div>
                       <a href="#"> <p className=' flex items-center text-white'><Download_logo/> DOWNLOAD POROFESSOR<span className=' ps-2'><Download_logo/></span></p></a>
                    </div>
                </div>
            </nav>
            <div className='custom_container px-3 mx-auto pt-[99px]'>
                     <p className='text-white  ff_kal'>Check Stats, Respect The Winrate</p>
                     <p className='text-white'>Know Your Enemies With Porofessor</p>
                     <p className='text-white'>Use the in-game analytics to crush your opponents:Detailed statistics, build recommendations, and player tags that improve your game!</p>
                     <button className='text-white bg-[#6537EB] py-4 px-9 flex items-center' ><img src={Window_logo} alt="#" />DOWNLOAD FOR FREE</button>
            </div>
        </div>
    )
}

export default HeaderSection