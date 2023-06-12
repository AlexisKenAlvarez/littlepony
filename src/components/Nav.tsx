const Nav = () => {
    const navlist = [
        {
            label: 'Home',
            slug: ''
        },
        {
            label: 'About',
            slug: ''
        },
        {
            label: 'Tokenomics',
            slug: ''
        },
        {
            label: 'Roadmap',
            slug: ''
        },

    ]
    return (
        <nav className="font-poppins z-20 absolute top-10 max-w-[1500px] px-5 mx-auto left-0 right-0">
            <ul className="flex w-fit ml-auto gap-x-28 mr-20">
                {navlist.map((items, index) => {
                    return (
                        <li className="relative group" key={index}>
                            <button className="">
                                {items.label}
                            </button>

                            <div className="absolute h-[4px] left-0 right-0 mx-auto -bottom-[5px] rounded-md bg-gradient-to-r from-myPink via-[#FEB958] to-[#FD6E50] w-0 group-hover:w-full transition-width ease-in-out duration-300"></div>
                        </li>
                    )
                })}
            </ul>

        </nav>
    );
}

export default Nav;