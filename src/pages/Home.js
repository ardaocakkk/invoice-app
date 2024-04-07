import InvoiceMenu from "../layouts/main/InvoiceMenu";
import InvoiceCard from "../components/Cards/InvoiceCards/InvoiceCard";
import PendingInvoiceCard from "../components/Cards/InvoiceCards/PendingInvoiceCard";
import DraftInvoiceCard from "../components/Cards/InvoiceCards/DraftInvoiceCard";
export default function Home() {
    return (
        <>
            <div className={'w-[327px] h-[44px] md:min-w-[672px] md:h-[55px] md:mx-auto  mt-[32px] mx-[24px] lg:w-[730px]  '}>
                <InvoiceMenu/>
                <div className={'mt-[32px] grid grid-cols-1 place-items-center lg:mx-auto items-center'}>
                    <InvoiceCard/>
                    <PendingInvoiceCard/>
                    <DraftInvoiceCard/>
                </div>
            </div>


        </>
    )
}