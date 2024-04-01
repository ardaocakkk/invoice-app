import { Button, ButtonGroup } from '@chakra-ui/react'

export default function InvoiceCard() {
    return (
        <>
          <div className={'w-[327px]  bg-white rounded my-[16px]'}>
              <div className={'ml-[24px] pt-[25px] flex-col justify-between  '} >
                  <div className={'flex justify-between '}>
                <h1  className={'heading-m'}><span className={'text-extend-07'}>#</span>RT3080</h1>
                <p className={'mr-[24px] text-[#858BB2]'}>Jensen Huang</p>
                  </div>
                  <div className={'flex justify-between '}>
                      <div className={'mt-[24px] mb-[22px]'}>
                      <p className={'text-extend-07'}>Due  19 Aug 2021</p>
                      <h1 className={'heading-m'}>£ 1,800.90</h1>
                      </div>
                      <div className={'m-auto justify-center w-[104px] h-[40px] bg-extend-paid bg-opacity-10 ml-[83px] mr-[24px] rounded '}>
                          <div className={'mt-[14px] flex w-[44px] h-[15px] justify-center items-center m-auto'}>
                              <div className={'w-[8px] h-[8px] bg-extend-paid justify-center m-auto  rounded '}></div>
                              <p className={'heading-s text-[#33D69F]'}>Paid</p>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
        </>
    )
}