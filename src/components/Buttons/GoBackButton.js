import {NavLink} from "react-router-dom";

export default function GoBackButton() {
    return (
        <>
            <NavLink to={'/'}>
                <div className={'flex items-center'}>

                    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                    <h1 className={'heading-s ml-[28px]'}>Go back</h1>
                </div>
            </NavLink>

        </>
    )
}