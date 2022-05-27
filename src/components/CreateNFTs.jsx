import { FaArrowRight } from 'react-icons/fa'

import CardIcon from '../assets/card-icon.png'
import CardIcon2 from '../assets/card-icon2.png'
import CardIcon3 from '../assets/card-icon3.png'
import CardIcon4 from '../assets/card-icon4.png'

const CreateNFTs = () => {
    return (
        <div className='pt-[100px]'>
            <div className='m-xl:max-w-[1440px] py-[2px] px-4 mx-auto'>
                <div className='flex flex-wrap'>
                    <div className='mb-[50px] w-full px-3'>
                        <h3 className='font-bold text-[32px] leading-[1.14] text-white mb-5'>Create and sell your NFTs</h3>
                    </div>
                </div>

                <div className='flex flex-wrap'>
                    <div className='px-3 w-1/4'>
                        <div className='rounded-[10px] relative bg-[#24243557] pt-[70px] pb-10 px-[30px]'>
                            <div>

                                <div className='absolute z-10 top-[-30px] right-[-15px]'>
                                    <img className='max-h-[85px]' src={CardIcon} alt="..." />
                                </div>

                                <div className='absolute top-5 left-[30px] uppercase text-[15px] font-normal tracking-[.5px]'>Step-01</div>
                                
                                <div className='pt-5'>
                                    <h4 className='font-normal text-2xl leading-8 mb-[10px] text-white'>Set up your wallet</h4>
                                    <p className='leading-7 mt-5 mb-[30px]'>Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.</p>
                                    <a className='text-2xl' href="#">
                                        <FaArrowRight />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='px-3 w-1/4'>
                        <div className='rounded-[10px] relative bg-[#24243557] pt-[70px] pb-10 px-[30px]'>
                            <div>

                                <div className='absolute z-10 top-[-30px] right-[-15px]'>
                                    <img className='max-h-[85px]' src={CardIcon2} alt="..." />
                                </div>

                                <div className='absolute top-5 left-[30px] uppercase text-[15px] font-normal tracking-[.5px]'>Step-02</div>
                                
                                <div className='pt-5'>
                                    <h4 className='font-normal text-2xl leading-8 mb-[10px] text-white'>Create your collection </h4>
                                    <p className='leading-7 mt-5 mb-[30px]'>A great collection of beautiful website templates for your need. Choose the best suitable template.</p>
                                    <a className='text-2xl' href="#">
                                        <FaArrowRight />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='px-3 w-1/4'>
                        <div className='rounded-[10px] relative bg-[#24243557] pt-[70px] pb-10 px-[30px]'>
                            <div>

                                <div className='absolute z-10 top-[-30px] right-[-15px]'>
                                    <img className='max-h-[85px]' src={CardIcon3} alt="..." />
                                </div>

                                <div className='absolute top-5 left-[30px] uppercase text-[15px] font-normal tracking-[.5px]'>Step-03</div>
                                
                                <div className='pt-5'>
                                    <h4 className='font-normal text-2xl leading-8 mb-[10px] text-white'>Add your NFT's</h4>
                                    <p className='leading-7 mt-5 mb-[30px]'>We've made the template fully responsive, so it looks great on all devices: desktop, tablets and.</p>
                                    <a className='text-2xl' href="#">
                                        <FaArrowRight />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='px-3 w-1/4'>
                        <div className='rounded-[10px] relative bg-[#24243557] pt-[70px] pb-10 px-[30px]'>
                            <div>

                                <div className='absolute z-10 top-[-30px] right-[-15px]'>
                                    <img className='max-h-[85px]' src={CardIcon4} alt="..." />
                                </div>

                                <div className='absolute top-5 left-[30px] uppercase text-[15px] font-normal tracking-[.5px]'>Step-04</div>
                                
                                <div className='pt-5'>
                                    <h4 className='font-normal text-2xl leading-8 mb-[10px] text-white'>Sell your NFT's</h4>
                                    <p className='leading-7 mt-5 mb-[30px]'>I throw myself down among the tall grass by the stream as I lie close to the earth NFT's.</p>
                                    <a className='text-2xl' href="#">
                                        <FaArrowRight />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default CreateNFTs