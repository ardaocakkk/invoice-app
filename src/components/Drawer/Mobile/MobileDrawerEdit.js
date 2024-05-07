import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, Input, Button, useDisclosure, FormLabel, FormControl,
} from '@chakra-ui/react'
import {useRef, useState} from "react";
import Sidebar from "../../../layouts/main/sidebar/Sidebar";
import GoBackButton from "../../Buttons/GoBackButton";
import {useFormik} from "formik";
export default function MobileDrawerEdit(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    const [invoice, setInvoice] = useState(props._invoice)
    console.log(invoice)

    const formik = useFormik({
        initialValues : {
            StreetAddress : "",
            City : "",
            PostCode: "",
            Country: "",
            ClientsName: "",
            ClientsEmail: "",
            ClientsStreetAddress: "",
            ClientsCity : "",
            ClientsPostCode: "",
            ClientsCountry  : "",
            InvoiceDate : "",
            PaymentTerms : "",
            ProjectDescription : "",
            ItemName : "",
            ItemQuantity : "",
            ItemPrice : "",
        },
        onSubmit : (values) => {
            alert(JSON.stringify(values))
        }
    })

    return (
        <Drawer
            isOpen={props.isOpen}
            placement='left'
            onClose={props.onClose}
            finalFocusRef={props.finalFocusRef}
            scrollBehavior ={'inside'}
            blockScrollOnMount={false}
            size = {props.size}
        >
            <DrawerOverlay />
            <DrawerContent overflow={'scroll'} >
                <div className={'block md:hidden'}>
                <Sidebar/>
                </div>
                <div className={'w-[343px] md:w-[616px] '}>
                    <div className={"ml-6 mt-[33px] "}>
                        <div>
                      <GoBackButton/>

                        </div>
                        <form onSubmit={formik.handleSubmit}>
                        <div className={'mt-6'}>
                            <h1 className={'heading-m'}>Edit <span className={'text-extend-06'}>#</span>XM9141 </h1>
                        </div>
                        <div className={'mt-5 '}>
                            <h1 className={'heading-s text-extend-01'}> Bill From</h1>
                        </div>
                        <div className={'w-[327px] h-[72px] mt-6'}>
                            <div>
                                <FormLabel className={'text-extend-07'}>Street Address</FormLabel>
                            </div>
                            <div className={'h-[48px] border-extend-05 border rounded-md mt-[9px]'}>
                                <FormControl>
                                <Input
                                    variant={'unstyled'}
                                    id={'StreetAddress'}
                                    name={'StreetAddress'}
                                    onChange={formik.handleChange}
                                    value={formik.values.StreetAddress}
                                    placeholder={invoice}
                                    className={'heading-s ml-5 mt-2 '}>

                                </Input>
                                </FormControl>
                            </div>
                            <div className={'h-[72px] grid grid-cols-2 mt-6'}>
                                <div>
                                  <p className={'text-extend-07'}>City</p>
                                    <div className={'h-[48px] w-[152px] border border-extend-05 mt-[9px] rounded-md'}>
                                        <Input
                                            variant={'unstyled'}
                                            id={'City'}
                                            name={'City'}
                                            onChange={formik.handleChange}
                                            value={formik.values.City}
                                            className={'heading-s items-center justify-center mt-2 ml-5'}></Input>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className={'text-extend-07'}>Post Code</p>
                                        <div className={'h-[48px] w-[152px] border border-extend-05 mt-[9px] rounded-md'}>
                                            <Input
                                                variant={'unstyled'}
                                                name={'PostCode'}
                                                id={'PostCode'}
                                                onChange={formik.handleChange}
                                                value={formik.values.PostCode}
                                                className={'heading-s items-center justify-center mt-2 ml-5'}></Input>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className={'mt-[25px]'}>
                            <div>
                                <p className={'text-extend-07'}>Country</p>
                            </div>
                            <div className={'h-[48px] border-extend-05 border rounded-md mt-[9px]'}>
                                <Input
                                    id={'Country'}
                                    name={'Country'}
                                    variant={'unstyled'}
                                    onChange={formik.handleChange}
                                    value={formik.values.Country}
                                    className={'heading-s ml-5 mt-2 '}></Input>
                            </div>
                            </div>
                            <div className={'mt-[40px]'}>
                                <h1 className={'heading-s text-extend-01'}> Bill To</h1>
                            </div>
                            <div className={'mt-[25px]'}>
                                <div>
                                    <p className={'text-extend-07'}>Client's Name</p>
                                </div>
                                <div className={'h-[48px] border-extend-05 border rounded-md mt-[9px]'}>
                                    <Input
                                        name={'ClientsName'}
                                        id={'ClientsName'}
                                        variant={'unstyled'}
                                        onChange={formik.handleChange}
                                        value={formik.values.ClientsName}
                                        className={'heading-s ml-5 mt-2 '}></Input>
                                </div>
                            </div>
                            <div className={'mt-[25px]'}>
                                <div>
                                    <p className={'text-extend-07'}>Client's Email</p>
                                </div>
                                <div className={'h-[48px] border-extend-05 border rounded-md mt-[9px]'}>
                                    <Input
                                        name={'ClientsEmail'}
                                        id={'ClientsEmail'}
                                        variant={'unstyled'}
                                        onChange={formik.handleChange}
                                        value={formik.values.ClientsEmail}
                                        className={'heading-s ml-5 mt-2 '}></Input>
                                </div>
                            </div>
                            <div className={'h-[72px] grid grid-cols-2 mt-6'}>
                                <div>
                                    <p className={'text-extend-07'}>City</p>
                                    <div className={'h-[48px] w-[152px] border border-extend-05 mt-[9px] rounded-md'}>
                                        <Input
                                            name={'ClientsCity'}
                                            id={'ClientsCity'}
                                            variant={'unstyled'}
                                            onChange={formik.handleChange}
                                            value={formik.values.ClientsCity}

                                            className={'heading-s items-center justify-center mt-2 ml-5'}></Input>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className={'text-extend-07'}>Post Code</p>
                                        <div className={'h-[48px] w-[152px] border border-extend-05 mt-[9px] rounded-md'}>
                                            <Input
                                                name={'ClientsPostCode'}
                                                id={'ClientsPostCode'}
                                                variant={'unstyled'}
                                                onChange={formik.handleChange}
                                                value={formik.values.ClientsPostCode}
                                                className={'heading-s items-center justify-center mt-2 ml-5'}></Input>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className={'mt-[25px]'}>
                                <div>
                                    <p className={'text-extend-07'}>Country</p>
                                </div>
                                <div className={'h-[48px] border-extend-05 border rounded-md mt-[9px]'}>
                                    <Input
                                        name={'ClientsCountry'}
                                        id={'ClientsCountry'}
                                        variant={'unstyled'}
                                        onChange={formik.handleChange}
                                        value={formik.values.ClientsCountry}
                                        className={'heading-s ml-5 mt-2 '}></Input>
                                </div>
                            </div>
                            <div className={'mt-[40px]'}>
                                <div>
                                    <p className={'text-extend-07'}>Invoice Date</p>
                                </div>
                                <div className={'h-[48px] border-extend-05 border rounded-md mt-[9px]'}>
                                    <div className={'flex justify-between mt-3'}>
                                    <Input
                                        name={'InvoiceDate'}
                                        id={'InvoiceDate'}
                                        variant={'unstyled'}
                                        onChange={formik.handleChange}
                                        value={formik.values.InvoiceDate}
                                        className={'heading-s ml-5  text-08 '}></Input>
                                    <svg className={'mr-[16px]'} width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667.667 0 00-.667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z" fill="#7E88C3" fill-rule="nonzero" opacity=".5"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div className={'mt-[25px]'}>
                                <div>
                                    <p className={'text-extend-07'}>Payment Terms</p>
                                </div>
                                <div className={'h-[48px] border-extend-05 border rounded-md mt-[9px]'}>
                                    <div className={'flex justify-between mt-3'}>
                                        <Input
                                            name={'PaymentTerms'}
                                            id={'PaymentTerms'}
                                            variant={'unstyled'}
                                            onChange={formik.handleChange}
                                            value={formik.values.PaymentTerms}
                                            className={'heading-s ml-5  text-08 '}></Input>
                                        <svg className={'mr-[16px]'} width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div className={'mt-[25px]'}>
                                <div>
                                    <p className={'text-extend-07'}>Project Description</p>
                                </div>
                                <div className={'h-[48px] border-extend-05 border rounded-md mt-[9px]'}>
                                    <div className={'flex justify-between mt-3'}>
                                        <Input
                                            name={'ProjectDescription'}
                                            id={'ProjectDescription'}
                                            variant={'unstyled'}
                                            onChange={formik.handleChange}
                                            value={formik.values.ProjectDescription}
                                            className={'heading-s ml-5  text-08 '}></Input>
                                    </div>
                                </div>
                            </div>
                            <div className={'mt-[49px]  w-[327px] h-[175px]'}>
                                <div>
                                    <p className={'text-extend-07'}>Item Name</p>
                                </div>
                                <div className={'h-[48px] border-extend-05 border rounded-md mt-[9px]'}>
                                    <div className={'flex justify-between mt-3'}>
                                        <Input
                                            name={'ItemName'}
                                            id={'ItemName'}
                                            variant={'unstyled'}
                                            onChange={formik.handleChange}
                                            value={formik.values.ItemName}
                                            className={'heading-s ml-5  text-08 '}></Input>
                                    </div>
                                </div>
                                <div className={'mt-[25px] grid grid-cols-3'}>

                                    <div>
                                        <div>
                                            <p className={'text-extend-07'}>Qty.</p>
                                        </div>
                                        <div className={'w-[64px] h-[48px] border border-extend-05 rounded-md'}>
                                            <Input
                                                name={'ItemQuantity'}
                                                id={'ItemQuantity'}
                                                variant={'unstyled'}
                                                onChange={formik.handleChange}
                                                value={formik.values.ItemQuantity}
                                                className={"heading-s mt-2 ml-5"}></Input>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p className={'text-extend-07'}>Price.</p>
                                        </div>
                                        <div className={'w-[100px] h-[48px] border border-extend-05 rounded-md'}>
                                            <Input
                                                name={'ItemPrice'}
                                                id={'ItemPrice'}
                                                variant={'unstyled'}
                                                onChange={formik.handleChange}
                                                value={formik.values.ItemPrice}
                                                placeholder={"200"}
                                                className={"heading-s mt-2 ml-5"}></Input>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p className={'text-extend-07'}>Total</p>
                                        </div>
                                        <div className={'flex justify-between items-center mt-2'}>
                                            <h1 className={"heading-s  ml-5 text-extend-07"}>400</h1>
                                        <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill="#888EB0" fill-rule="nonzero"/></svg>
                                    </div>
                                    </div>
                                </div>
                                <div className={'mt-[48px] items-center justify-center m-auto w-[327px] h-[48px] bg-[#F9FAFE] rounded-md '}>
                                    <div className={'flex justify-center items-center pt-[10px]'}>
                                        <span> <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7E88C3" fill-rule="nonzero"/></svg> </span>
                                        <h1 className={'text-extend-07 heading-m'}>Add New Item</h1>
                                    </div>
                                </div>
                                <div className={'mt-[40px] w-full h-[64px] bg-gradient-to-b from-white to-[#979797]'}>

                                </div>
                                <div className={'flex justify-end pt-[21px] pb-[21px]'}>
                                    <div className={'mr-4'}>
                                        <Button onClick={props.onClose} colorScheme={'gray'} rounded={'full'}><p className={'text-extend-07'}>Cancel</p></Button>
                                    </div>
                                    <div>
                                        <Button type={'submit'} colorScheme={'purple'} rounded={'full'}>Apply Changes</Button>
                                    </div>
                                </div>

                            </div>
                        </div>

            </form>
                    </div>

                </div>
            </DrawerContent>
        </Drawer>
        )

}