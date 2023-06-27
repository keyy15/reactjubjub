import React from "react";
import { ListBox } from "../helpers/ListBox";
import BgCanvas from '../assets/bgcanvas.png'

function Home() {
    return (
        <div className="w-full h-full relative -z-20 ">
            <img src={BgCanvas} alt={BgCanvas} className="w-[100%] h-[750px]"/>
            <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center p-10 ">
                <div className="content-left w-full h-full flex flex-col items-center gap-8 justify-center text-center text-4xl mb-12">
                    <h1 className="w-[80%] text-[#5E5DF0] text-4xl font-bold">
                        Portfolio
                    </h1>
                    <h2 className="text-black font-bold underline underline-offset-2">
                        Expertise Service! Let's check it out
                    </h2>
                    <p className="text-sm text-slate-500 ">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                </div>
                <div className="content-right flex gap-10 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-4 bg-yellow-300">
                    {ListBox.map(listBox => (
                        <div className="list-detail w-[320px] flex flex-col items-center p-8 rounded-2xl transition duration-200 ease-in-out bg-[#a49e9e] hover:bg-[#5E5DF0] text-orange-300 ">
                            <img src={listBox.image} alt={listBox.image} className="h-[120px] max-sm:h-[80px]" />
                            <h2 className="">{listBox.tittle}</h2>
                            <p className="indent-4">
                                {listBox.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
