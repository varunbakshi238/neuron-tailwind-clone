import { BiSearch } from 'react-icons/bi'
import { FaRegBell } from 'react-icons/fa'

import LogoWhite from '../assets/logo-white.png'
import Sun from '../assets/sun-01.svg'

const Navbar = () => {
  return (
    <div className="sticky top-0 backdrop-blur-[9px] w-full border-b border-solid border-[#ffffff14] z-10">
        <div className="max-w-[1440px] mx-auto py-0.5 px-4 flex items-center content-between">
            
            <div className="flex items-center justify-start basis-[55%]">
                
                <div className="pr-8 mr-[17px] border-r border-[#ffffff14]">
                    <a href="">
                        <img className='max-h-9' src={LogoWhite} alt="" />
                    </a>
                </div>

                <div className=''>
                    <ul className='flex justify-start'>
                        <li className='font-medium text-base block mx-2 my-0 px-1.5 py-7 color text-[#acacac]'>Home</li>
                        <li className='font-medium text-base block mx-2 my-0 px-1.5 py-7 text-[#acacac]'>About</li>
                        <li className='font-medium text-base block mx-2 my-0 px-1.5 py-7 text-[#acacac]'>Explore</li>
                        <li className='font-medium text-base block mx-2 my-0 px-1.5 py-7 text-[#acacac]'>Pages</li>
                        <li className='font-medium text-base block mx-2 my-0 px-1.5 py-7 text-[#acacac]'>Blog</li>
                        <li className='font-medium text-base block mx-2 my-0 px-1.5 py-7 text-[#acacac]'>Contact</li>
                    </ul>
                </div>

            </div>
            <div className='flex justify-end basis-[45%] items-center'>
                
                <div className='my-0 mx-1'>
                    <form className='relative'>
                        <input className="text-[15px] bg-transparent border border-[#ffffff14] rounded-xl text-[#acacac] py-0 pl-4 pr-9 w-[250px] h-10" type="search" placeholder='Search Here' />
                        <div className='absolute top-1/2 right-3.5 -translate-y-1/2 text-[17px]'>
                            <button className='p-0 border-0 cursor-pointer text-[#acacac]'>
                                <BiSearch />
                            </button>
                        </div>
                    </form>
                </div>

                <div className='my-0 mx-[5px]'>
                    <div>
                        <button className='px-2 py-[11px] text-sm bg-[#212e48] text-white cursor-pointer rounded-[10px] tracking-wide font-medium hover:bg-[#00a3ff] duration-500'>
                            <span>Wallet connect</span>
                        </button>
                    </div>
                </div>

                <div className='my-0 mx-[5px]'>
                    <div>
                        <a className='w-10 h-10 flex justify-center items-center text-[#acacac] border rounded-full border-[#ffffff14] relative' href="#">
                            <FaRegBell />
                            <span className='bg-[#00a3ff] min-w-[20px] h-5 rounded-full text-white text-center text-[.75em] absolute -top-[6px] -right-[6px]'>6</span>
                        </a>
                    </div>
                </div>

                <div className='my-0 mx-[5px] border rounded-full border-[#ffffff14]'>
                    <div className='flex justify-center items-center w-10 h-10'>
                        <button className='cursor-pointer'>
                            <span>
                                <img className='brightness-50' src={Sun} alt='/' />
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar