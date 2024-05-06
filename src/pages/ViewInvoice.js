import InvoiceMenu from "../layouts/main/InvoiceMenu";
import {Button, ButtonGroup, Input, useDisclosure} from '@chakra-ui/react'
import {NavLink, useParams} from "react-router-dom";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import {useRef, useState} from "react";
import MobileDrawerEdit from "../components/Drawer/Mobile/MobileDrawerEdit";
import MobileDrawerAdd from "../components/Drawer/Mobile/MobileDrawerAdd";
import data from "../data";
import {useMediaQuery} from "react-responsive";
export default function ViewInvoice(props) {

    const {id} = useParams();
    var InvoiceData = data.find((data) => data.id === id);
    const [invoice, setInvoice] = useState(InvoiceData);
    const isMobile = useMediaQuery({maxWidth: 767})
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });




    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();



    return (
        <>
            <div className={'w-[327px] h-[44px] md:min-w-[688px] md:h-[55px] md:mx-auto  mt-[32px] mx-[24px] lg:w-[730px]   '}>
                <NavLink to={'/'}>
                <div className={'flex items-center'}>

                    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                    <h1 className={'heading-s ml-[28px]'}>Go back</h1>
                </div>
                    </NavLink>
                {/*Status Div*/}
                <div className={'w-[327px] md:hidden h-[91px] bg-white flex items-center justify-between md:justify-normal rounded-xl pb-2 md:w-full'}>
                    <p className={'ml-[24px] '}>Status</p>
                    <div className={'m-auto md:m-0 md:mr-8 justify-center w-[104px] h-[40px] bg-extend-pending bg-opacity-10 ml-[83px] mr-[24px] rounded items-center '}>
                        <div className={'mt-[14px] flex w-[44px] h-[15px] justify-center items-center m-auto'}>
                            <div className={'w-[8px] h-[8px] bg-extend-pending justify-center m-auto  rounded  '}></div>
                            <p className={'heading-s text-extend-pending'}>{invoice.status}</p>
                        </div>
                    </div>
                </div>
                <div className={'w-[327px] hidden md:w-[688px] md:h-[88px] lg:w-[730px]  md:flex h-[91px] bg-white  items-center justify-between md:justify-between rounded-xl pb-2 '}>
                    <div className={'flex items-center md:w-[159px] md:h-[40px]'}>
                        <div>
                    <p className={'ml-[24px] mr-3'}>Status</p>
                        </div>
                    <div className={'m-auto justify-center items-center w-[104px] h-[40px] bg-extend-pending bg-opacity-10 my-auto rounded  '}>
                        <div className={' flex m-auto w-full h-full justify-center items-center  '}>
                            <div className={'w-[8px] h-[8px] bg-extend-pending justify-center   rounded  items-center '}></div>
                            <p className={'heading-s text-extend-pending ml-3'}>{invoice.status}</p>
                        </div>
                    </div>
                    </div>
                    <div className={' hidden md:flex w-[309px] bg-white '}>
                        <div className={'mr-3'}>
                            <Button ref={btnRef} onClick={onOpen}  colorScheme={'gray'} rounded={'full'}> <p className={'text-extend-07'}>Edit</p> </Button>
                        </div>
                        <div>
                            {isMobile ? (
                                <MobileDrawerEdit
                                    size={"full"}
                                    _invoice={InvoiceData}
                                    isOpen={isOpen}
                                    onClose={onClose}
                                    finalFocusRef={btnRef}
                                />
                            ) : isTablet ? (
                                <MobileDrawerEdit
                                    size={"lg"}
                                    _invoice={InvoiceData}
                                    isOpen={isOpen}
                                    onClose={onClose}
                                    finalFocusRef={btnRef}
                                />
                            ) : (
                                <MobileDrawerEdit
                                    _invoice={InvoiceData}
                                    isOpen={isOpen}
                                    onClose={onClose}
                                    finalFocusRef={btnRef}
                                />
                            )}
                        </div>
                        <div className={'mr-3'}>
                            <Button colorScheme={'red'} rounded={'full'}>Delete</Button>
                        </div>
                        <div>
                            <Button colorScheme={'purple'} rounded={'full'}>Mark As Paid</Button>
                        </div>
                    </div>

                </div>
                {/*Invoice Info Div*/}
                <div className={'mt-4 pl-6 text-extend-06 bg-white rounded-xl  '}>
                    {/*Invoice Location*/}
                    <div className={'pt-[25px] md:flex md:justify-between '}>
                        <div className={'mb-3'}>
                            <h1 className={'heading-s text-black' }><span className={'text-extend-06'}>#</span> {invoice.id} </h1>
                            <p className={'text-extend-06'}>{invoice.description}</p>
                        </div>
                        <div className={'md:mr-[32px] md:text-end'}>
                            <p>{invoice.senderAddress.street}</p>
                            <p>{invoice.senderAddress.city}</p>
                            <p>{invoice.senderAddress.postCode}</p>
                            <p>{invoice.senderAddress.country}</p>

                        </div>
                    </div>
                {/*  Invoice short Info  */}
                    <div className={'grid mt-[31px] md:grid-cols-2 md:w-full gap-x-[115px]'}>
                        <div className={'grid grid-cols-2 md:grid-cols gap-x-[115px]'}>
                            <div className={''}>
                                <div className={""}>
                                    <p>Invoice Date</p>
                                    <h1 className={'heading-s text-black mt-[13px]'}>{invoice.createdAt}</h1>
                                </div>
                                <div className={'mt-[31px]'}>
                                    <p>Payment Due</p>
                                    <h1 className={'heading-s text-black mt-[13px]'}>{invoice.paymentDue}</h1>
                                </div>
                            </div>
                            <div>
                                <p>Bill To</p>
                                <h1 className={'heading-s text-black mt-[13px]'}>{invoice.clientName}</h1>
                                <div className={'mt-[7px]'}>
                                    <p>{invoice.clientAddress.street}</p>
                                    <p>{invoice.clientAddress.city}</p>
                                    <p>{invoice.clientAddress.postCode}</p>
                                    <p>{invoice.clientAddress.country}</p>
                                </div>

                            </div>
                        </div>
                        <div className={'pt-[32px] gap-[115px]'}>
                            <p>Sent To</p>
                            <h1 className={'heading-s text-black mt-[13px]'}>{invoice.clientEmail}</h1>
                        </div>

                    </div>
                {/*  Invoice bill  */}
                    <div className={'pb-[12px] '}>
                    <div className={'mt-[38px] w-[279px] h-[228px]  md:w-[624px] md:h-[264px]'}>
                        <div className={'w-[279px] md:w-[624px] md:h-[184px]  bg-[#F9FAFE] rounded-tl-xl rounded-tr-xl pt-4 pl-4 pr-4 pb-4'}>
                        <div className={'hidden  md:flex md:justify-between text-extend-07 '}>
                            <div>
                                <p>Item Name</p>
                            </div>
                            <div className={'flex justify-between w-1/2'}>
                            <div>
                                <p>QTY.</p>
                            </div>
                            <div>
                                <p>Price</p>
                            </div>
                            <div>
                                <p>Total</p>
                            </div>
                            </div>
                        </div>


                            {invoice.items.map((item) => {
                                return <div className={'flex items-center justify-between pb-3 '}>
                                    <div className={'md:flex justify-between md:w-full md:m-auto pt-4 '}>

                                        <h1 className={'heading-s text-black md:w-1/3'}>{item.name}</h1>
                                        <p className={'heading-s md:hidden'} >{item.quantity} x £ {item.price}</p>
                                        <div className={'md:flex justify-between hidden w-[300px] ml-[110px] '}>
                                            <div>
                                                <p className={'heading-s'}>{item.quantity}</p>
                                            </div>
                                            <div>
                                                <p className={'heading-s'}>£ {item.price}</p>
                                            </div>
                                            <div>
                                                <p className={'heading-s text-black'}>£ {item.total}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className={'heading-s text-black md:hidden'}>£ {item.total}</h1>

                                </div>
                            })}
                        </div>
                        <div className={'w-[279px] h-[80px] md:w-[624px] md:h-[80px] bg-[#373B53] text-white flex justify-between items-center rounded-bl-xl rounded-br-xl'}>
                            <p className={'ml-[24px]'}><span className={'md:hidden'}>Grand Total</span> <span className={'hidden md:block'}>Amount Due</span></p>
                            <h1 className={'heading-m mr-[24px] '}>£ {invoice.total}</h1>
                        </div>
                    </div>
                    </div>

                </div>
                <div className={'flex  h-[71px] justify-center items-center md:hidden bg-white min-w-full'}>
                    <div className={'mr-3'}>
                        <Button ref={btnRef} onClick={onOpen} colorScheme={'gray'} rounded={'full'}> <p className={'text-extend-07'}>Edit</p> </Button>
                    </div>
                    <div className={''}>
                        {isMobile ? (
                            <MobileDrawerEdit
                                size={"full"}
                                _invoice={InvoiceData}
                                isOpen={isOpen}
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            />
                        ) : isTablet ? (
                            <MobileDrawerEdit
                                size={"md"}
                                _invoice={InvoiceData}
                                isOpen={isOpen}
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            />
                        ) : (
                            <MobileDrawerEdit
                                _invoice={InvoiceData}
                                isOpen={isOpen}
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            />
                        )}

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