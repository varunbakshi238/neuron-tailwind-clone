import Logo from '../assets/logo-white.png'
import FooterIcon from '../assets/footer-icon.jpg'
import FooterIcon2 from '../assets/footer-icon2.jpg'
import FooterIcon3 from '../assets/footer-icon3.jpg'
const Footer = () => {
    return (
        <div className="mt-[100px] relative bg-[#24243557] py-[100px]">
            <div className="m-xl:max-w-[1440px] py-[2px] px-4 mx-auto">
                <div className="grid grid-cols-4">
                    <div className="px-4">
                        <div>
                            <div>
                                <div>
                                    <img className='max-h-[35px]' src={Logo} alt="...." />
                                </div>
                                <p className='text-lg mt-5 pr-[30px]'>Created with the collaboration of over 60 of the world's best Nuron Artists.</p>
                            </div>
                            <div className='mt-10 pt-10 border-t border-[#13131d]'>
                                <h6 className='mb-5 font-medium text-white leading-[1.25] text-base'>Get The Latest Nuron Updates</h6>
                                <div className='max-w-[360px] flex'>
                                    <input className='bg-[#13131d] rounded rounded-r-none px-4 grow' placeholder='Your username' type="text" />
                                    <div className=''>
                                        <button className='rounded rounded-l-none bg-[#212e48] text-white cursor-pointer text-center py-[10px] px-4 tracking-[.5px]'>Subscribe</button>
                                    </div>
                                </div>
                                <div>
                                    <p className='mt-[10px] text-sm tracking-[.2px] font-medium'>Email is safe. We don't spam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className='ml-[100px]'>
                            <h6 className='text-2xl mb-6 font-bold text-white'>Nuron</h6>
                            <ul>
                                <li className='my-[11px] text-base'>Protocol Explore</li>
                                <li className='my-[11px] text-base'>System Token</li>
                                <li className='my-[11px] text-base'>Optimize Time</li>
                                <li className='my-[11px] text-base'>Visual Checking</li>
                                <li className='my-[11px] text-base'>Fadeup System</li>
                                <li className='my-[11px] text-base'>Activity Log</li>
                                <li className='my-[11px] text-base'>System Auto Since</li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className='ml-[100px]'>
                            <h6 className='text-2xl mb-6 font-bold text-white'>Information</h6>
                            <ul>
                                <li className='my-[11px] text-base'>Market Explore</li>
                                <li className='my-[11px] text-base'>Ready Token</li>
                                <li className='my-[11px] text-base'>Optimize Time</li>
                                <li className='my-[11px] text-base'>Main Option</li>
                                <li className='my-[11px] text-base'>Blog Grid</li>
                                <li className='my-[11px] text-base'>About Us</li>
                                <li className='my-[11px] text-base'>Fix Bug</li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-4">
                        <div>
                            <h6 className='text-2xl mb-6 font-bold text-white'>Recent Sold Out</h6>
                            <ul>
                                <li className='pb-[10px] flex'>
                                    <div className='mr-3'>
                                        <img className='h-[60px] rounded-full' src={FooterIcon} alt="" />
                                    </div>
                                    <div>
                                        <h6 className='mb-1 font-bold leading-[1.25] text-[#f6f6f6]'>#21 The Wonder</h6>
                                        <p className='mb-[3px] text-[13px]'>Highest bid 1/20</p>
                                        <span className='font-bold text-[#00a3ff]'>0.244wETH</span>
                                    </div>
                                </li>
                                <li className='py-[10px] flex border-t border-[#13131d]'>
                                    <div className='mr-3'>
                                        <img className='h-[60px] rounded-full' src={FooterIcon2} alt="" />
                                    </div>
                                    <div>
                                        <h6 className='mb-1 font-bold leading-[1.25] text-[#f6f6f6]'>Diamond Dog</h6>
                                        <p className='mb-[3px] text-[13px]'>Highest bid 1/20</p>
                                        <span className='font-bold text-[#00a3ff]'>0.022wETH</span>
                                    </div>
                                </li>
                                <li className='py-[10px] flex border-t border-[#13131d]'>
                                    <div className='mr-3'>
                                        <img className='h-[60px] rounded-full' src={FooterIcon3} alt="" />
                                    </div>
                                    <div>
                                        <h6 className='mb-1 font-bold leading-[1.25] text-[#f6f6f6]'>Morgan11</h6>
                                        <p className='mb-[3px] text-[13px]'>Highest bid 1/20</p>
                                        <span className='font-bold text-[#00a3ff]'>0.892wETH</span>
                                    </div>
                                </li>
                            </ul>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer