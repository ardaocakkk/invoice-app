import InvoiceMenu from "../layouts/main/InvoiceMenu";
import InvoiceCard from "../components/Cards/InvoiceCards/InvoiceCard";
import PendingInvoiceCard from "../components/Cards/InvoiceCards/PendingInvoiceCard";
import DraftInvoiceCard from "../components/Cards/InvoiceCards/DraftInvoiceCard";
import data from "../data";
import {useEffect, useState} from "react";
import EmptyMain from "../layouts/main/EmptyMain";
export default function Home() {

    var invoiceData = data;



    return (
        <>
            <div className={'w-[327px] h-[44px] md:min-w-[672px] md:h-[55px] md:mx-auto   mt-[32px] mx-[24px] lg:w-[730px] dark:bg-extend-08   dark:transition dark:duration-500 transition duration-500  '}>
                <InvoiceMenu
                  length = {invoiceData.length}
                />




                    {(invoiceData.length === 0) && (
                        <>
                        <EmptyMain/>
                        </>
                    ) || (
                        <>
                                <div id={'custom-scroll'} className={' lg:mt-[32px] grid grid-cols-1 place-items-center lg:mx-auto items-center md:h-[760px] md:overflow-auto dark:transition dark:duration-500 transition duration-500'}>
                            {invoiceData.map((invoice) => {
                                return (
                                <InvoiceCard
                                    key={invoice.id}
                                    id={invoice.id}
                                    createdAt={invoice.createdAt}
                                    paymentDue={invoice.paymentDue}
                                    description={invoice.description}
                                    paymentTerms={invoice.paymentTerms}
                                    clientName={invoice.clientName}
                                    clientEmail={invoice.clientEmail}
                                    status={invoice.status}
                                    senderAddress={invoice.senderAddress}
                                    clientAddress={invoice.clientAddress}
                                    items={invoice.items}
                                    total={invoice.total}
                                />
                                )})}
                </div>
                        </>
                    )}

            </div>


        </>
    )
}