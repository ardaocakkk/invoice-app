import { Button, ButtonGroup } from '@chakra-ui/react'
import {NavLink} from "react-router-dom";

export default function PendingInvoiceCard() {
    return (
        <>
            <div className={'w-[327px] md:w-full  bg-white rounded my-[16px] hover:border-extend-01 hover:border-2'}>
                <NavLink to={'/view-invoice'}>
                <div className={'ml-[24px] pt-[25px] flex flex-col md:flex-row  justify-between md:items-center md:mb-[11px] '} >
                    <div className={'flex justify-between'}>
                        <h1  className={'heading-m md:mx-2'}><span className={'text-extend-07'}>#</span>XM9141</h1>
                        <p className={"hidden md:block text-extend-07 md:mx-8"   }>Due 20 Sep 2021</p>
                        <p className={'mr-[24px] text-[#858BB2] md:mx-2'}>Alex Grim</p>
                    </div>
                    <div className={'flex justify-between items-center md:p-3'}>
                        <div className={'mt-[24px] mb-[22px] md:m-3'}>
                            <p className={'text-extend-07 md:hidden'}>Due  20 Sep 2021</p>
                            <h1 className={'heading-m'}>£556.00</h1>
                        </div>
                        <div className={'m-auto md:m-0 justify-center w-[104px] h-[40px] bg-extend-pending bg-opacity-10 ml-[83px] mr-[24px] rounded items-center '}>
                            <div className={'mt-[14px] flex w-[44px] h-[15px] justify-center items-center m-auto'}>
                                <div className={'w-[8px] h-[8px] bg-extend-pending justify-center m-auto  rounded  '}></div>
                                <p className={'heading-s text-[#FF8F00]'}>Pending</p>
                            </div>
                        </div>

                        <svg width="7" className={"ml-2"} height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                    </div>
                </div>
                </NavLink>
            </div>
        </>
    )
}