import React from 'react'
import Logo from '../assets/images/Png/logo2.png'
import { Download_logo } from './CommanComponents/Icon'
import Window_logo from '../assets/images/Png/download_for_windows.png'
import Bottom_layer from '../assets/images/Png/hero_bottom_layer.png'


const HeaderSection = () => {
    return (
        <div className='bg_hero bg-no-repeat bg-center bg-cover lg:min-h-screen relative'>
            <div className=' absolute bottom-[-1px] w-full pointer-events-none '><img src={Bottom_layer} alt="" /></div>
            <div className=' flex justify-between items-center  pt-4 max-w-[1440px] mx-auto'>
                <img className='w-[45%] sm:w-[192px] sm:h-[47px] ps-3 xl:ps-5' src={Logo} alt="#" />
                <a className='pe-3 xl:pe-[46px] group ' href="#"> <p className=' flex items-center text-white group-hover:text-[#6537EB] transition-all duration-300 ff_assistant font-bold text-[10px] sm:text-sm md:text-base  lg:text-[19px]'>DOWNLOAD POROFESSOR<span className=' ps-1 lg:ps-2'><Download_logo /></span></p></a>
            </div>
            <div className='container lg:max-w-[1090px] px-3 mx-auto py-8 sm:pt-10 sm:pb-20 md:pt-14   lg:pt-[99px] lg:pb-[114px] text-center justify-center items-center flex flex-col md:text-start md:items-start md:justify-start'>
                <p className='text-white ff_Kalavika_bold text-[24px] sm:text-[28px] md:text-[34px] lg:text-[42px] uppercase pb-1 md:pb-2'>Check Stats, Respect The Winrate</p>
                <p className='text-white text-[19px]  sm:text-[24px] md:text-[29px]  lg:text-4xl  ff_Kalavika_regular font-normal' >Know Your Enemies With Porofessor</p>
                <p className='text-white  font-semibold text-[16px] sm:text-[18px] lg:text-xl ff_assistant max-w-[504px] pt-5 lg:pt-[46px] '>Use the in-game analytics to crush your opponents:Detailed statistics, build recommendations, and player tags that improve your game!</p>
                <button className='text-white bg-[#6537EB] py-[14px]  px-[41px] flex items-center font-extrabold text-[14px] sm:text-[18px] lg:text-[23px] ff_assistant mt-[35px] lg:mt-[60px] hover:shadow-2xl shadow-[#6537EB]  transition-all duration-300' ><img className=' pe-2' src={Window_logo} alt="#" />DOWNLOAD FOR FREE</button>
                <div className='flex pt-[13px] flex-col sm:flex-row'>
                    <p className=' ff_assistant font-bold  text-[15px] text-white me-[10px]'> 11.5+ DOWNLOADS</p>
                    <p className=' text-white font-normal text-[15px] ff_assistant flex items-center'> <div className=' h-1 w-1 rounded-full bg-white me-2'></div>Complient with RIOT's ToS</p>
                </div>
            </div>
        </div>

    )
}

export default HeaderSection