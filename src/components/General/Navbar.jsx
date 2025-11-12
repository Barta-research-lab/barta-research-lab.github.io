const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 bg-white px-2 md:px-20 flex items-center z-50 shadow-md">
            <div className="container mx-auto flex items-center max-w-7xl">
                <div className="items-center flex gap-3">
                    <div className="dropdown">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden text-black"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                            <li><button onClick={() => scrollToSection('publications')}>Publications</button></li>
                            <li><button onClick={() => scrollToSection('courses')}>Courses</button></li>
                            <li><button onClick={() => scrollToSection('projects')}>Ongoing Projects</button></li>
                            <li><button onClick={() => scrollToSection('teams')}>Our Team</button></li>
                        </ul>
                    </div>
                    <img src="/logo/barta.png" alt="BARTA Logo" className="h-10 w-auto" />
                    <a className="text-4xl font-ruhi text-black font-bold">BARTA</a>
                </div>
                <div className="hidden navbar-center lg:flex md:flex-grow lg:justify-center">
                    <ul className="menu menu-horizontal space-x-6 text-black font-semibold text-xl font-nunito">
                        <li><button onClick={() => scrollToSection('home')} className="hover:text-green-primary">Home</button></li>
                        <li><button onClick={() => scrollToSection('publications')} className="hover:text-green-primary">Publications</button></li>
                        <li><button onClick={() => scrollToSection('courses')} className="hover:text-green-primary">Courses</button></li>
                        <li><button onClick={() => scrollToSection('projects')} className="hover:text-green-primary">Ongoing Projects</button></li>
                        <li><button onClick={() => scrollToSection('teams')} className="hover:text-green-primary">Our Team</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;