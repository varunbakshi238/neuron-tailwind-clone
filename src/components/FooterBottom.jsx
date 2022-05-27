import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail} from 'react-icons/fi'


const FooterBottom = () => {
  return (
    <div className="relative bg-[#24243557] py-5 footer-bottom border-t border-[#ffffff14]">
        <div className="m-xl:max-w-[1440px] py-[2px] px-4 mx-auto">
            <div className="grid grid-cols-2">
                <div className="px-4">
                    <div className="flex">
                        <span className="text-base">©2022 Nuron, Inc. All rights reserved</span>
                        <ul className="flex pl-[18px] ml-7 border-l border-[#acacac]">
                            <li className="px-3 text-base">Terms</li>
                            <li className="px-3 text-base relative left-li">Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="px-4">
                    <div className="flex justify-end">
                        <ul className="flex">
                            <li className='mx-[5px] leading-[34px] bg-[#242435] w-10 h-10 text-center rounded-full'><FiFacebook className='inline' /></li>
                            <li className='mx-[5px] leading-[34px] bg-[#242435] w-10 h-10 text-center rounded-full'><FiTwitter className='inline' /></li>
                            <li className='mx-[5px] leading-[34px] bg-[#242435] w-10 h-10 text-center rounded-full'><FiInstagram className='inline' /></li>
                            <li className='mx-[5px] leading-[34px] bg-[#242435] w-10 h-10 text-center rounded-full'><FiLinkedin className='inline' /></li>
                            <li className='mx-[5px] leading-[34px] bg-[#242435] w-10 h-10 text-center rounded-full'><FiMail className='inline' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterBottom