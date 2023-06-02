import { useState } from "react";
import { useNavigate } from "react-router-dom";
import conf from "../assets/conf.jpg";
import Navbar from "./Navbar";

const Home = () => {
    const [roomCode, setRoomCode] = useState("");
    const navigate = useNavigate();

    const submitCode = (e) => {
        e.preventDefault();
        navigate(`/room/${roomCode}`);
    };

    return (
        <>
            <Navbar />
            <div className="relative min-h-screen overflow-hidden">
                {/* Image */}

                <div className="absolute inset-0 flex overflow-hidden">
                    <img
                        src="https://sispl.co.in/wp-content/uploads/2022/06/SISPL-Clipart-1-e1654233725792-1024x580.png"
                        className="object-cover w-full h-auto"
                        alt="Background"
                    />
                </div>
                {/* Overlay */}

                <div className="absolute inset-0 bg-black/60"></div>
                {/* Hero Info */}

                <div className="flex flex-col items-center justify-center relative z-10 px-6 mx-auto">
                    {/* Main */}

                    <div className="flex flex-col items-center justify-center pb-8">
                        <h1 className="text-4xl md:text-6xl text-white font-bold pt-12">
                            Video Chat App
                        </h1>
                    </div>
                    {/* Enter Code */}
                    <form
                        onSubmit={submitCode}
                        className="text-white md:pt-12 flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col justify-center items-center">
                            <label className="text-2xl md:text-3xl font-bold pt-6">
                                Enter Room Code
                            </label>

                            <input
                                type="text"
                                required
                                placeholder="Enter Room Code"
                                value={roomCode}
                                onChange={(e) => setRoomCode(e.target.value)}
                                className="py-2 md:py-3 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6 outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-black bg-blue-300 hover:bg-blue-400 duration-100 ease-out font-bold w-20 md:w-28 rounded-xl py-1 md:py-2 mt-2 md:mt-4"
                        >
                            Connect
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Home;
