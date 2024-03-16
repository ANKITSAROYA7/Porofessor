import React from 'react'
import { Card_guide } from './CommanComponents/Helper'
import Window_logo from '../assets/images/Png/download_for_windows.png'
import Line from '../assets/images/Png/line.png'

const InstallingSteps = () => {
    return (
        // <div className='bg-[#150C30] bg_install'>

        // </div>
        <div>
            <div className='bg_install bg-no-repeat bg-center bg-cover bg-[#150C30]'>
                <div className='container lg:max-w-[1090px] px-3 mx-auto py-16  relative'>
                <img className='absolute hidden md:block lg:top-[37%] lg:left-[22%] md:top-[26%] md:left-[36%]' src={Line} alt="" />
                <img className='absolute  hidden lg:block lg:top-[37%] lg:right-[22%]' src={Line} alt="" />
                    <p className=' uppercase text-white ff_Kalavika_bold text-[28px] sm:text-[33px] md:text-[39px] lg:text-[50px] font-bold text-center'>unlock porofessor in 3 steps</p>
                    <div className=' flex flex-wrap lg:justify-between  justify-around'>
                        {Card_guide.map((value, index) => {
                            return (
                                <div className='w-[290px] text-center flex flex-col pt-9 items-center group'>
                                    <img className='group-hover:scale-[1.05] transition-all duration-300 ' src={value.image} alt="" />
                                    <p className='ff_Kalavika_bold  text-xl font-normal leading-5 text-white pb-3 '>{value.heading}</p>
                                    <p className=' text-white font-normal text-xl leading-6'>{value.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <button className='text-white bg-[#6537EB] py-[14px]  px-[41px] flex items-center font-extrabold text-[14px] sm:text-[18px] lg:text-[23px] ff_assistant mt-[35px] lg:mt-[60px] mx-auto hover:scale-[1.05]   transition-all duration-300 ' ><img className=' pe-2' src={Window_logo} alt="#" />DOWNLOAD FOR FREE</button>
                </div>
            </div>
            <div className=' bg-[#18113C] flex justify-center pt-[-1px] mt-[-1px]'>
                <p className='text-white text-center ff_assistant font-normal  text-[16px] sm:text-[18px] lg:text-xl lg:pt-[23px] lg:pb-[21px] py-4'>Already got Overwolf? Your chosen app will be added to your Overwolf client</p>
            </div>
        </div>
    )
}

export default InstallingSteps