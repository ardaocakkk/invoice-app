import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, Button, useDisclosure,
} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {useRef} from "react";
import MobileDrawerEdit from "../../components/Drawer/Mobile/MobileDrawerEdit";
import MobileDrawerAdd from "../../components/Drawer/Mobile/MobileDrawerAdd";
import {useLocation, useParams} from "react-router-dom";
import {useMediaQuery} from "react-responsive";


export default function InvoiceMenu(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const isMobile = useMediaQuery({maxWidth: 767})
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });




    return (
        <div className={'flex justify-between  '}>
            <div>
                <h1 className={'heading-m'}>Invoices</h1>
                <p className={"hidden md:block text-extend-06"}>There are {props.length} total invoices</p>
                <p className={'text-extend-06 md:hidden'}>{props.length} invoices</p>
            </div>
            <div className={'flex items-center  '}>
                <div className={'flex items-center mr-4'}>
                    <Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton isActive={isOpen}  >
                                    <div className={'flex items-center mr-4'}>
                                    <h1 className={"hidden md:block heading-s"}>Filter by status</h1>
                                    <h1 className={'heading-s md:hidden'}>Filter</h1>
                                    <svg className={'ml-2'} width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                                    </div>
                                    </MenuButton>
                                <MenuList>
                                    <div>
                                        <MenuItem><Checkbox colorScheme='purple' >
                                            Paid
                                        </Checkbox>
                                        </MenuItem>
                                    <MenuItem><Checkbox colorScheme='purple' >
                                        Pending
                                    </Checkbox>
                                    </MenuItem>
                                        <MenuItem><Checkbox colorScheme='purple' >
                                            Draft
                                        </Checkbox>
                                        </MenuItem>


                                    </div>
                                </MenuList>
                            </>
                        )}
                    </Menu>

                </div>
                <div ref={btnRef} onClick={onOpen} className={'w-[90px] h-[44px] md:w-[150px] md:h-[48px] '}>
                    <div className={'flex justify-center items-center bg-extend-01 hover:bg-extend-02 rounded-full p-2 hover:cursor-pointer'}>
                        <div className={'bg-white rounded-full p-3 '}>
                            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fill-rule="nonzero"/></svg>
                        </div>
                        <div  className={'ml-2'}>
                            <h1 className={'heading-s md:block hidden text-white'}>New Invoice</h1>
                            <h1 className={'heading-s md:hidden text-white'}>New</h1>
                        </div>


                    </div>
                    {isMobile ? (
                        <MobileDrawerAdd
                            size={"full"}
                            isOpen={isOpen}
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        />
                    ) : isTablet ? (
                        <MobileDrawerAdd
                            size={"lg"}
                            isOpen={isOpen}
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        />
                    ) : (

                        <MobileDrawerAdd
                            size={'xl'}
                            isOpen={isOpen}
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        />
                    )}

                </div>
            </div>
        </div>
    )
}