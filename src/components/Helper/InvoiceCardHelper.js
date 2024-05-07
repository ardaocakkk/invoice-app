import React from 'react';

const InvoiceCardHelper = (props) => {
    let statusComponent;

    if (props.status === 'paid') {
        statusComponent = (
            <div className={'m-auto md:m-0 justify-center w-[104px] h-[40px] bg-extend-paid bg-opacity-10 ml-[83px] mr-[24px] rounded items-center '}>
                <div className={'mt-[14px] flex w-[44px] h-[15px] justify-center items-center m-auto'}>
                    <div className={'w-[8px] h-[8px] bg-extend-paid justify-center m-auto  rounded  '}></div>
                    <p className={'heading-s text-[#33D69F]'}>{props.status}</p>
                </div>
            </div>
        );
    } else if (props.status === 'pending') {
        statusComponent = (
            <div className={'m-auto md:m-0 justify-center w-[104px] h-[40px] bg-extend-pending bg-opacity-10 ml-[83px] mr-[24px] rounded items-center '}>
                <div className={'mt-[14px] flex w-[44px] h-[15px] justify-center items-center m-auto'}>
                    <div className={'w-[8px] h-[8px] bg-extend-pending justify-center m-auto  rounded  '}></div>
                    <p className={'heading-s text-[#FF8F00]'}>Pending</p>
                </div>
            </div>
        );
    }else {
        statusComponent = (
            <div className={'m-auto md:m-0 justify-center w-[104px] h-[40px] bg-extend-draft bg-opacity-10 ml-[83px] mr-[24px] rounded items-center '}>
                <div className={'mt-[14px] flex w-[44px] h-[15px] justify-center items-center m-auto'}>
                    <div className={'w-[8px] h-[8px] bg-extend-draft justify-center m-auto  rounded lg:mr-[4px] '}></div>
                    <p className={'heading-s text-extend-draft dark:text-extend-05'}>Draft</p>
                </div>
            </div>
        );
    }

    return statusComponent;
};

export default InvoiceCardHelper;