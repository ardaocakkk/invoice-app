import { Button, ButtonGroup } from '@chakra-ui/react'
import {NavLink, useParams} from "react-router-dom";
import ViewInvoice from "../../../pages/ViewInvoice";
import InvoiceCardHelper from "../../Helper/InvoiceCardHelper";


export default function InvoiceCard(props) {
    const {id} = useParams();
    return (
        <>

          <div id={props.id} className={'w-[327px] md:w-full bg-white rounded my-[16px] hover:border-extend-01 hover:border-2 hover:transition hover:duration-500 dark:bg-extend-03 dark:pr-3'} >
              <NavLink to={`/view-invoice/${props.id}`
              } >

              <div className={'ml-[24px] pt-[25px] flex flex-col md:flex-row  justify-between md:items-center md:mb-[11px]  '} >
                  <div className={'flex justify-between'}>
                <h1  className={'heading-m md:mx-2'}><span className={'text-extend-07'}>#</span>{props.id}</h1>
                <p className={"hidden md:block text-extend-07 md:mx-8" }>Due  {props.paymentDue}</p>
                <p className={'mr-[24px] text-[#858BB2] md:mx-2'}>{props.clientName}</p>
                  </div>
                  <div className={'flex justify-between items-center md:p-3'}>
                      <div className={'mt-[24px] mb-[22px] md:m-3'}>
                      <p className={'text-extend-07 md:hidden'}>Due  {props.paymentDue}</p>
                      <h1 className={'heading-m'}>£{props.total}</h1>
                      </div>
                        <InvoiceCardHelper status={props.status}/>
                          <svg width="7" className={"ml-2"} height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                  </div>
              </div>
            </NavLink>
          </div>
        </>
    )
}