import React from 'react';

const InvoiceMenuHelper = (props) => {
    let statusComponent;

    if (props.status === 'paid') {
        statusComponent = (
            <div className={'m-auto justify-center items-center w-[104px] h-[40px] bg-extend-paid bg-opacity-10 my-auto rounded  '}>
                <div className={' flex m-auto w-full h-full justify-center items-center  '}>
                    <div className={'w-[8px] h-[8px] bg-extend-paid justify-center   rounded  items-center '}></div>
                    <p className={'heading-s text-extend-paid ml-3'}>{props.status}</p>
                </div>
            </div>
        );
    } else if (props.status === 'pending') {
        statusComponent = (
            <div className={'m-auto justify-center items-center w-[104px] h-[40px] bg-extend-pending bg-opacity-10 my-auto rounded  '}>
                <div className={' flex m-auto w-full h-full justify-center items-center  '}>
                    <div className={'w-[8px] h-[8px] bg-extend-pending justify-center   rounded  items-center '}></div>
                    <p className={'heading-s text-extend-pending ml-3'}>{props.status}</p>
                </div>
            </div>
        );
    }else {
        statusComponent = (
            <div className={'m-auto justify-center items-center w-[104px] h-[40px] bg-extend-draft bg-opacity-10 my-auto rounded  '}>
                <div className={' flex m-auto w-full h-full justify-center items-center  '}>
                    <div className={'w-[8px] h-[8px] bg-extend-draft justify-center   rounded  items-center '}></div>
                    <p className={'heading-s text-extend-draft ml-3 dark:text-extend-05 darK:transition dark:duration-500'}>{props.status}</p>
                </div>
            </div>
        );
    }

    return statusComponent;
};

export default InvoiceMenuHelper;