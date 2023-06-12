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
                        <li className="" key={index}>{items.label}</li>
                    )
                })}
            </ul>

        </nav>
    );
}

export default Nav;