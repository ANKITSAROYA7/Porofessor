import React from 'react'
import { Porofesson_card } from './CommanComponents/Helper'


const CardsSection = () => {
    return (
        <div className='bg_cards bg-no-repeat bg-center bg-cover my-[-2px]'>
            <div className='container lg:max-w-[1090px] px-3 mx-auto'>
                
                <div className=' flex flex-wrap pb-16 lg:pt-[70px] lg:pb-[120px] lg:justify-between  justify-around'>
                    {Porofesson_card.map((value, index) => {
                        return (
                            <div className=' text-center flex flex-col pt-10 w-[278px] group'>
                                    <img className='w-full group-hover:scale-[1.05] transition-all duration-300 ' src={value.image} alt="" />
                                    <p className='ff_Kalavika_bold text-[22px]  md:text-[25px]  lg:text-3xl font-normal leading-5 text-[#8459FF] py-5 lg:pt-14 lg:pb-[22px]'>{value.heading}</p>
                                    <p className=' text-white font-normal text-[16px] sm:text-[18px] lg:text-xl leading-6'>{value.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CardsSection