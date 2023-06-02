import logo from "../assets/logo.png";
import { AiFillGithub, AiFillLinkedin, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="bg-black/90 h-[4.5rem]">
            <div className="h-full md:max-w-[90vw] mx-auto flex items-center justify-between px-4">
                {/* Left */}

                <div className="flex items-center">
                    <div className="flex w-10 h-10 md:w-12 md:h-12 bg-white rounded-full">
                        <img src={logo} alt="" className="object-cover" />
                    </div>

                    <div className="text-white font-bold ml-2">
                        <p className="text-lg md:text-xl">Video Call App</p>
                    </div>
                </div>
                {/* Right */}
                <div>
                    <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
                        <li>
                            <a
                                href="https://github.com/tushar-upadhya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-x md:text-3xl transition-colors duration-300 hover:text-blue-300"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/tusharupadhya/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-x md:text-3xl transition-colors duration-300 hover:text-blue-300"
                            >
                                <AiFillLinkedin />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://tusharupadhyay.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-x md:text-3xl transition-colors duration-300 hover:text-blue-300"
                            >
                                <AiOutlineUser />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
