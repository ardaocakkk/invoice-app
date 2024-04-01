import {Button} from "@chakra-ui/react";
import PlusButton from '../assets/icon-plus.svg'
import InvoiceCard from "./Cards/InvoiceCard";
export default function Main() {
    return (
        <>
          <div className={'w-[327px] h-[44px] md:min-w-[672px] md:h-[55px] md:mx-auto  mt-[32px] mx-[24px] lg:w-[730px]  '}>

              <div className={'flex justify-between  '}>
                  <div>
                    <h1 className={'heading-m'}>Invoices</h1>
                    <p className={'text-extend-06'}>7 invoices</p>
                  </div>
                  <div className={'flex items-center  '}>
                      <div className={'flex items-center mr-4'}>
                <h1 className={'heading-s'}>Filter</h1>
                <svg className={'ml-2'} width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                      </div>
                  <div className={'w-[90px] h-[44px] '}>
                      <div className={'flex justify-center items-center bg-extend-01 rounded-full p-2'}>
                          <div className={'bg-white rounded-full p-3 '}>
                              <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fill-rule="nonzero"/></svg>
                          </div>
                    <div className={'ml-2'}>
                         <h1 className={'heading-s text-white'}>New</h1>
                    </div>
                      </div>
                </div>
              </div>
              </div>
              <div className={'mt-[32px] grid grid-cols-1'}>
              <InvoiceCard/>
                  <InvoiceCard/>
                  <InvoiceCard/>
                  <InvoiceCard/>
                  <InvoiceCard/>
              </div>
          </div>


        </>
    )
}