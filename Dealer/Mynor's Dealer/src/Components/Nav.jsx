import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <>
            <div className="flex justify-center items-center top-0 z-50 sticky bg-WhiteMynor mb-1">
                <nav className="navbar">
                    <div className="">
                        {/* Nav's left side */}
                        <ul className="pages font-poppins">
                            <li>
                                <Link
                                    to={"/Home"}
                                >
                                    Home
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    to={"/Search"}
                                >
                                    Search
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    to={"/Contact"}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <h1 className="text-RedMynor text-4xl font-bold">
                        Mynor&apos;s <span className="text-BlueMynor text-2xl">Dealership</span>
                    </h1>
                    {/* Nav's center side */}
                    <div className="pages">
                        {/* Nav's right side */}
                        <ul className="pages font-poppins">
                            <li>
                                <Link
                                    to={"/Home"}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/Gallery"}
                                >
                                    Gallery
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    to={"/Cart"}
                                >
                                    <svg className="w-10"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                    >
                                        <g fill="none">
                                            <circle cx="20.5" cy="41.5" r="3.5" fill="#100E34" />
                                            <circle cx="37.5" cy="41.5" r="3.5" fill="#100E34" />
                                            <path
                                                stroke="#a2001d"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="4"
                                                d="m5 6l9 6l5 22h20l5-17H25m0 9h16"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Nav;
