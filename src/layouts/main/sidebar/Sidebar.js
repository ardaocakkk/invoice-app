import logo from '../../../assets/logo.svg'
import MoonLogo from '../../../assets/icon-moon.svg'
import ProfilePhoto from '../../../assets/image-avatar.jpg'
import {Divider, useColorMode} from '@chakra-ui/react'
import {useState} from "react";
export default function Sidebar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    const { colorMode, toggleColorMode } = useColorMode()




    return (
        <>
            <aside className={'sidebar text-white lg:min-h-screen dark:bg-extend-08  dark:transition dark:duration-500'}>
                <div className={'flex flex-row md:flex lg:min-h-screen lg:flex-col  bg-extend-04  justify-between lg:w-[103px] lg:rounded-tr-3xl lg:rounded-br-2xl '}>
                    <div className={'relative justify-center items-center w-[72px] h-[72px] lg:h-[103px] lg:w-[103px]  '}>
                     <svg className={'absolute w-[28px] z-10 h-[28px] inset-0 lg:inset-10 m-auto lg:m-auto '} xmlns="http://www.w3.org/2000/svg" ><path fill="#FFF" fill-rule="evenodd" d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"/></svg>
                     <div className={'h-[72px] w-[72px]  lg:w-[103px]  absolute bg-extend-01 block rounded-br-3xl rounded-tr-3xl'}></div>
                     <div className={'h-[36px] w-[72px] lg:h-[51.5px] lg:w-[103px] bottom-0   absolute bg-extend-02 block rounded-tl-2xl rounded-br-3xl '}></div>
                    </div>
                    <div className={'flex flex-row justify-evenly lg:flex-col lg:justify-end lg:items-center lg:mx-auto w-3/6  h-full items-center my-auto md:pl-32 lg:p-0 lg:m-0'}>
                        <button onClick={toggleDarkMode} className={'transition duration-500'}>
                        <div  className={'ml-8 lg:m-0 cursor-pointer'}> <svg  width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.502 11.342a.703.703 0 00-.588.128 7.499 7.499 0 01-2.275 1.33 7.123 7.123 0 01-2.581.46A7.516 7.516 0 018.74 11.06a7.516 7.516 0 01-2.198-5.316c0-.87.153-1.713.41-2.48.28-.817.69-1.559 1.226-2.197a.652.652 0 00-.102-.92.703.703 0 00-.588-.128C5.316.607 3.425 1.91 2.07 3.649A10.082 10.082 0 000 9.783C0 12.57 1.125 15.1 2.965 16.94a10.04 10.04 0 007.156 2.965c2.352 0 4.524-.818 6.262-2.173a10.078 10.078 0 003.579-5.597.62.62 0 00-.46-.793z" fill="#7E88C3" fill-rule="currentColor"/></svg> </div>
                        </button>
                            <div className="inline-block min-h-[72px] lg:min-h-[103px]  lg:rotate-90 w-[1px]   bg-[#494E6E]"></div>
                        <div className={'lg:mb-6'}>
                            <div > <img className={'w-[32px] h-[32px] rounded-full items-center lg:w-[40px] lg:h-[40px] justify-center mx-auto my-auto'} src={ProfilePhoto}/> </div>
                        </div>

                    </div>
                </div>
            </aside>
        </>
    )
}