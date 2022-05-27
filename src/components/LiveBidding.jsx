import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css"; 

import Card1 from '../assets/port1/card-1.png'
import Card2 from '../assets/port2/portfolio.webp'
import Card3 from '../assets/port3/portfolio.webp'
import Card4 from '../assets/port4/portfolio.jpg'
import Card5 from '../assets/port5/portfolio.jpg'
import Card6 from '../assets/portfolio.jpg'
import Card7 from '../assets/portfolio1.jpg'
import Client1 from '../assets/port1/client1.png'
import Client2 from '../assets/port1/client2.png'
import Client3 from '../assets/port1/client3.png'
import Client4 from '../assets/port2/client1.png'
import Client5 from '../assets/port2/client2.png'
import Client6 from '../assets/port2/client3.png'
import Client7 from '../assets/port3/client-1.png'
import Client8 from '../assets/port3/client-2.png'
import Client9 from '../assets/port3/client-3.png'
import Client10 from '../assets/port4/client-1.png'
import Client11 from '../assets/port4/client-2.png'
import Client12 from '../assets/port4/client-3.png'
import Client13 from '../assets/port5/client-1.png'
import Client14 from '../assets/port5/client-2.png'
import Client15 from '../assets/port5/client-3.png'




const LiveBidding = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '100px',
        autoplay: true,
        autoplaySpeed: 1500,
    };
    


  return (
    <div className="pt-[100px] liveBidding relative">
        <div className="m-xl:max-w-[1440px] py-0.5 px-4 mx-auto">
            <div className="mb-[50px] flex flex-wrap">
                <div>
                    <h3 className="relative ml-5 pl-4 font-bold leading-[1.14] text-white text-[32px] title">Live Bidding</h3>
                </div>
            </div>

            <div className='flex flex-wrap'>
                <div className='px-3 w-full'>
                    <Slider {...settings}>
                        
                        <div className='p-5 rounded-[10px] bg-[#242435] relative'>
                            <div className='relative overflow-hidden rounded-[5px] m-[-15px]'>
                                <a className='relative block' href='#'>
                                    <img src={Card1} alt="/" />
                                </a>

                            </div>

                            <div className='flex items-center justify-between mt-[30px]'>
                                <div className='flex items-center'>
                                    <a className='leading-[.5] block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client1} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client2} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client3} alt="/" /></a>
                                    <a className='text-[#acacac] pl-[7px] leading-[.5]' href="#">30 + Place Bit</a>
                                </div>

                                <div className='cursor-pointer flex items-center h-9'>
                                    <button className='text-white'>
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                            </div>
                            
                            <a className='text-white' href="#">
                                <span className='block mt-[10px] font-medium text-lg'>OrBid6</span>
                            </a>
                            
                            <span className='mt-[10px] font-normal'>
                                Highest bid 6/30 
                            </span>

                            <div className='flex justify-between mt-[10px]'>
                                <div className='font-medium text-[#00a3ff]'>
                                    0.244wETH
                                </div>
                                <div className='cursor-pointer flex items-center py-0.5 px-2'>
                                    <svg className='text-[14px] mr-[3px] w-[14px]' viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path></svg>
                                    <span className='text-[14px]'>322</span>
                                </div>
                            </div>
                        </div>
                        <div className='p-5 rounded-[10px] bg-[#242435] relative'>
                            <div className='relative overflow-hidden rounded-[5px] m-[-15px]'>
                                <a className='relative block' href='#'>
                                    <img src={Card2} alt="/" />
                                </a>

                            </div>

                            <div className='flex items-center justify-between mt-[30px]'>
                                <div className='flex items-center'>
                                    <a className='leading-[.5] block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client4} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client5} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client6} alt="/" /></a>
                                    <a className='text-[#acacac] pl-[7px] leading-[.5]' href="#">30 + Place Bit</a>
                                </div>

                                <div className='cursor-pointer flex items-center h-9'>
                                    <button className='text-white'>
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                            </div>
                            
                            <a className='text-white' href="#">
                                <span className='block mt-[10px] font-medium text-lg'>OrBid6</span>
                            </a>
                            
                            <span className='mt-[10px] font-normal'>
                                Highest bid 6/30 
                            </span>

                            <div className='flex justify-between mt-[10px]'>
                                <div className='font-medium text-[#00a3ff]'>
                                    0.244wETH
                                </div>
                                <div className='cursor-pointer flex items-center py-0.5 px-2'>
                                    <svg className='text-[14px] mr-[3px] w-[14px]' viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path></svg>
                                    <span className='text-[14px]'>322</span>
                                </div>
                            </div>
                        </div>
                        <div className='p-5 rounded-[10px] bg-[#242435] relative'>
                            <div className='relative overflow-hidden rounded-[5px] m-[-15px]'>
                                <a className='relative block' href='#'>
                                    <img src={Card3} alt="/" />
                                </a>

                            </div>

                            <div className='flex items-center justify-between mt-[30px]'>
                                <div className='flex items-center'>
                                    <a className='leading-[.5] block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client7} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client8} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client9} alt="/" /></a>
                                    <a className='text-[#acacac] pl-[7px] leading-[.5]' href="#">30 + Place Bit</a>
                                </div>

                                <div className='cursor-pointer flex items-center h-9'>
                                    <button className='text-white'>
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                            </div>
                            
                            <a className='text-white' href="#">
                                <span className='block mt-[10px] font-medium text-lg'>OrBid6</span>
                            </a>
                            
                            <span className='mt-[10px] font-normal'>
                                Highest bid 6/30 
                            </span>

                            <div className='flex justify-between mt-[10px]'>
                                <div className='font-medium text-[#00a3ff]'>
                                    0.244wETH
                                </div>
                                <div className='cursor-pointer flex items-center py-0.5 px-2'>
                                    <svg className='text-[14px] mr-[3px] w-[14px]' viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path></svg>
                                    <span className='text-[14px]'>322</span>
                                </div>
                            </div>
                        </div>
                        <div className='p-5 rounded-[10px] bg-[#242435] relative'>
                            <div className='relative overflow-hidden rounded-[5px] m-[-15px]'>
                                <a className='relative block' href='#'>
                                    <img src={Card4} alt="/" />
                                </a>

                            </div>

                            <div className='flex items-center justify-between mt-[30px]'>
                                <div className='flex items-center'>
                                    <a className='leading-[.5] block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client10} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client11} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client12} alt="/" /></a>
                                    <a className='text-[#acacac] pl-[7px] leading-[.5]' href="#">30 + Place Bit</a>
                                </div>

                                <div className='cursor-pointer flex items-center h-9'>
                                    <button className='text-white'>
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                            </div>
                            
                            <a className='text-white' href="#">
                                <span className='block mt-[10px] font-medium text-lg'>OrBid6</span>
                            </a>
                            
                            <span className='mt-[10px] font-normal'>
                                Highest bid 6/30 
                            </span>

                            <div className='flex justify-between mt-[10px]'>
                                <div className='font-medium text-[#00a3ff]'>
                                    0.244wETH
                                </div>
                                <div className='cursor-pointer flex items-center py-0.5 px-2'>
                                    <svg className='text-[14px] mr-[3px] w-[14px]' viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path></svg>
                                    <span className='text-[14px]'>322</span>
                                </div>
                            </div>
                        </div>
                        <div className='p-5 rounded-[10px] bg-[#242435] relative'>
                            <div className='relative overflow-hidden rounded-[5px] m-[-15px]'>
                                <a className='relative block' href='#'>
                                    <img src={Card5} alt="/" />
                                </a>

                            </div>

                            <div className='flex items-center justify-between mt-[30px]'>
                                <div className='flex items-center'>
                                    <a className='leading-[.5] block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client13} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client14} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client15} alt="/" /></a>
                                    <a className='text-[#acacac] pl-[7px] leading-[.5]' href="#">30 + Place Bit</a>
                                </div>

                                <div className='cursor-pointer flex items-center h-9'>
                                    <button className='text-white'>
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                            </div>
                            
                            <a className='text-white' href="#">
                                <span className='block mt-[10px] font-medium text-lg'>OrBid6</span>
                            </a>
                            
                            <span className='mt-[10px] font-normal'>
                                Highest bid 6/30 
                            </span>

                            <div className='flex justify-between mt-[10px]'>
                                <div className='font-medium text-[#00a3ff]'>
                                    0.244wETH
                                </div>
                                <div className='cursor-pointer flex items-center py-0.5 px-2'>
                                    <svg className='text-[14px] mr-[3px] w-[14px]' viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path></svg>
                                    <span className='text-[14px]'>322</span>
                                </div>
                            </div>
                        </div>
                        <div className='p-5 rounded-[10px] bg-[#242435] relative'>
                            <div className='relative overflow-hidden rounded-[5px] m-[-15px]'>
                                <a className='relative block' href='#'>
                                    <img src={Card6} alt="/" />
                                </a>

                            </div>

                            <div className='flex items-center justify-between mt-[30px]'>
                                <div className='flex items-center'>
                                    <a className='leading-[.5] block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client1} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client2} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client3} alt="/" /></a>
                                    <a className='text-[#acacac] pl-[7px] leading-[.5]' href="#">30 + Place Bit</a>
                                </div>

                                <div className='cursor-pointer flex items-center h-9'>
                                    <button className='text-white'>
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                            </div>
                            
                            <a className='text-white' href="#">
                                <span className='block mt-[10px] font-medium text-lg'>OrBid6</span>
                            </a>
                            
                            <span className='mt-[10px] font-normal'>
                                Highest bid 6/30 
                            </span>

                            <div className='flex justify-between mt-[10px]'>
                                <div className='font-medium text-[#00a3ff]'>
                                    0.244wETH
                                </div>
                                <div className='cursor-pointer flex items-center py-0.5 px-2'>
                                    <svg className='text-[14px] mr-[3px] w-[14px]' viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path></svg>
                                    <span className='text-[14px]'>322</span>
                                </div>
                            </div>
                        </div>
                        <div className='p-5 rounded-[10px] bg-[#242435] relative'>
                            <div className='relative overflow-hidden rounded-[5px] m-[-15px]'>
                                <a className='relative block' href='#'>
                                    <img src={Card7} alt="/" />
                                </a>

                            </div>

                            <div className='flex items-center justify-between mt-[30px]'>
                                <div className='flex items-center'>
                                    <a className='leading-[.5] block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client11} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client8} alt="/" /></a>
                                    <a className='leading-[.5] -ml-3 block w-[30px] h-[30px]' href="#"><img className='rounded-full' src={Client15} alt="/" /></a>
                                    <a className='text-[#acacac] pl-[7px] leading-[.5]' href="#">30 + Place Bit</a>
                                </div>

                                <div className='cursor-pointer flex items-center h-9'>
                                    <button className='text-white'>
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                            </div>
                            
                            <a className='text-white' href="#">
                                <span className='block mt-[10px] font-medium text-lg'>OrBid6</span>
                            </a>
                            
                            <span className='mt-[10px] font-normal'>
                                Highest bid 6/30 
                            </span>

                            <div className='flex justify-between mt-[10px]'>
                                <div className='font-medium text-[#00a3ff]'>
                                    0.244wETH
                                </div>
                                <div className='cursor-pointer flex items-center py-0.5 px-2'>
                                    <svg className='text-[14px] mr-[3px] w-[14px]' viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path></svg>
                                    <span className='text-[14px]'>322</span>
                                </div>
                            </div>
                        </div>
                        
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiveBidding