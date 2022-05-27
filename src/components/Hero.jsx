import HeroLogo from '../assets/hero-slider.webp'

const Hero = () => {
    return (
        <div className='pt-[100px]'>
            <div className='m-xl:max-w-screen-m-xl py-0.5 px-4 mx-auto'>
                <div className='flex items-center'>

                    <div className='m-lg:w-[41.6666667%] px-3'>
                        <h2 className='text-6xl font-normal mb-5 text-white leading-[1.23]'>Discover Digital Art, Collect and Sell Your Specific NFTs.</h2>
                        <p className='text-[22px] text-[#acacac] mb-10 leading-[1.6]'>Partner with one of the world's largest retailers to showcase your brand and products.</p>
                        <div>
                            <a className='my-[7px] mr-[7px] min-w-[160px] py-[15px] px-[34px] text-center text-white rounded-[10px] inline-block bg-[#00a3ff]' href="#">
                                <span>Get Started</span>
                            </a>
                            <a className='m-[7px] min-w-[160px] py-[15px] px-[34px] text-center text-white rounded-[10px] inline-block bg-[#212e48]' href="#">
                                <span>Create</span>
                            </a>
                        </div>
                    </div>

                    <div className='m-lg:w-[41.6666667%] m-lg:ml-[8.3333%] px-3'>
                        <div>
                            <img src={HeroLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero