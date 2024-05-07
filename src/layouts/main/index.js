import Sidebar from "./sidebar/Sidebar";
import ViewInvoice from "../../pages/ViewInvoice";
import EmptyMain from "./EmptyMain";
import Home from "../../pages/Home";
import {Outlet} from "react-router-dom";
import InvoiceMenu from "./InvoiceMenu";

export default function MainLayout() {
    return (
        <>
            <div className="App font-spartan lg:flex bg-extend-11 ">
                <Sidebar/>

                <main className={'flex-1 flex lg:px-[252px] lg:pt-[12px] bg-extend-11 dark:bg-extend-08 dark:text-white  '}>
                    <Outlet/>

                </main>
            </div>
        </>
    )
}