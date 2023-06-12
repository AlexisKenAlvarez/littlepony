import { FaHome } from 'react-icons/fa'
import { TiInfoLarge } from 'react-icons/ti'
import { GiToken } from 'react-icons/gi'
import { RiRoadMapFill } from 'react-icons/ri'

const Nav = () => {
    const navlist = [
        {
            label: 'Home',
            slug: '',
            icon: <FaHome />
        },
        {
            label: 'About',
            slug: '',
            icon: <TiInfoLarge />
        },
        {
            label: 'Tokenomics',
            slug: '',
            icon: <GiToken />
        },
        {
            label: 'Roadmap',
            slug: '',
            icon: <RiRoadMapFill />
        },
    ]
    return (
        <nav className="font-poppins z-20 absolute top-10 max-w-[1500px] px-5 mx-auto left-0 right-0">
            <ul className="flex w-fit lg:ml-auto xl:gap-x-24 lg:gap-x-16 gap-x-10 lg:mr-20 mx-auto">
                {navlist.map((items, index) => {
                    return (
                        <li className="relative group" key={index}>
                            <button className="lg:flex hidden items-center gap-x-[3px]">
                                {items.icon}
                                {items.label}
                            </button>

                            <div className="lg:block hidden absolute h-[4px] left-0 right-0 mx-auto -bottom-[5px] rounded-md bg-gradient-to-r from-myPink via-[#FEB958] to-[#FD6E50] w-0 group-hover:w-full transition-width ease-in-out duration-300"></div>

                            <div className="lg:hidden block text-lg">
                                {items.icon}
                            </div>
                        </li>
                    )
                })}
            </ul>

        </nav>
    );
}

export default Nav;