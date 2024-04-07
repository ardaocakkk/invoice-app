import InvoiceMenu from "../layouts/main/InvoiceMenu";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {NavLink} from "react-router-dom";

export default function ViewInvoice() {
    return (
        <>
            <div className={'w-[327px] h-[44px] md:min-w-[672px] md:h-[55px] md:mx-auto  mt-[32px] mx-[24px] lg:w-[730px]   '}>
                <NavLink to={'/'}>
                <div className={'flex items-center'}>

                    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                    <h1 className={'heading-s ml-[28px]'}>Go back</h1>
                </div>
                    </NavLink>
                {/*Status Div*/}
                <div className={'w-[327px] h-[91px] bg-white flex items-center justify-between rounded-xl pb-2 md:w-full'}>
                    <p className={'ml-[24px] '}>Status</p>
                    <div className={'m-auto md:m-0 md:mr-8 justify-center w-[104px] h-[40px] bg-extend-pending bg-opacity-10 ml-[83px] mr-[24px] rounded items-center '}>
                        <div className={'mt-[14px] flex w-[44px] h-[15px] justify-center items-center m-auto'}>
                            <div className={'w-[8px] h-[8px] bg-extend-pending justify-center m-auto  rounded  '}></div>
                            <p className={'heading-s text-extend-pending'}>Paid</p>
                        </div>
                    </div>
                </div>
                {/*Invoice Info Div*/}
                <div className={'mt-4 pl-6 text-extend-06 bg-white rounded-xl'}>
                    {/*Invoice Location*/}
                    <div className={'pt-[25px]'}>
                        <div className={'mb-3'}>
                            <h1 className={'heading-s text-black' }><span className={'text-extend-06'}>#</span> XM9141 </h1>
                            <p className={'text-extend-06'}>Graphic Design</p>
                        </div>
                        <div className={''}>
                            <p>19 Union Terrace</p>
                            <p>19 Union Terrace</p>
                            <p>19 Union Terrace</p>
                            <p>19 Union Terrace</p>

                        </div>
                    </div>
                {/*  Invoice short Info  */}
                    <div className={'grid mt-[31px]'}>
                        <div className={'grid grid-cols-2'}>
                            <div>
                                <div>
                                    <p>Invoice Date</p>
                                    <h1 className={'heading-s text-black mt-[13px]'}>21 Aug 2021</h1>
                                </div>
                                <div className={'mt-[31px]'}>
                                    <p>Payment Due</p>
                                    <h1 className={'heading-s text-black mt-[13px]'}>20 Sep 2021</h1>
                                </div>
                            </div>
                            <div>
                                <p>Bill To</p>
                                <h1 className={'heading-s text-black mt-[13px]'}>Alex Grim</h1>
                                <div className={'mt-[7px]'}>
                                    <p>84 Church Way</p>
                                    <p>Bradford</p>
                                    <p>BD1 9PB</p>
                                    <p>United Kingdom</p>
                                </div>

                            </div>
                        </div>
                        <div className={'pt-[32px]'}>
                            <p>Sent To</p>
                            <h1 className={'heading-s text-black mt-[13px]'}>alexgrim@gmail.com</h1>
                        </div>

                    </div>
                {/*  Invoice bill  */}
                    <div className={'pb-[12px]'}>
                    <div className={'mt-[38px] w-[279px] h-[228px]  '}>
                        <div className={'w-[279px] bg-extend-05 rounded-tl-xl rounded-tr-xl pt-4 pl-4 pr-4 pb-4'}>
                        <div className={'flex items-center justify-between pb-3 '}>
                        <div>
                        <h1 className={'heading-s text-black'}>Banner Design</h1>
                        <p className={'heading-s'} >1 x £ 156.00</p>
                        </div>
                        <h1 className={'heading-s text-black'}>£ 156.00</h1>
                        </div>
                            <div className={'flex items-center justify-between pt-3'}>
                                <div>
                                    <h1 className={'heading-s text-black'}>Email Design</h1>
                                    <p className={'heading-s'} >1 x £ 156.00</p>
                                </div>
                                <h1 className={'heading-s text-black'}>£ 156.00</h1>
                            </div>
                        </div>
                        <div className={'w-[279px] h-[80px] bg-[#373B53] text-white flex justify-between items-center rounded-bl-xl rounded-br-xl'}>
                            <p className={'ml-[24px]'}>Grand Total</p>
                            <h1 className={'heading-m mr-[24px] '}>£ 556.00</h1>
                        </div>
                    </div>
                    </div>

                </div>
                <div className={'flex  h-[71px] justify-center items-center bg-white min-w-full'}>
                    <div className={'mr-3'}>
                        <Button colorScheme={'gray'} rounded={'xl'}> <p className={'text-extend-07'}>Edit</p> </Button>
                    </div>
                    <div className={'mr-3'}>
                        <Button colorScheme={'red'} rounded={'xl'}>Delete</Button>
                    </div>
                    <div>
                        <Button colorScheme={'purple'} rounded={'xl'}>Mark As Paid</Button>
                    </div>
                </div>

            </div>
        </>
    )
}