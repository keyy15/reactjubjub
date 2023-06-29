import React from "react";
import { ListBox } from "../helpers/ListBox";
import WhiteBG from '../assets/WhiteBG.png'
import '../styles/Home.css'

function Home() {
    return (
        <div className="w-full h-full relative">
            <img src={WhiteBG} alt={WhiteBG} className="w-full h-[540px] max-sm:h-[1280px]"/>
            <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center ">
                <div className="content-left w-full h-full flex flex-col items-center gap-4 justify-center text-center text-4xl mb-12 max-sm:p-2">
                    <h1 className="text-[#5E5DF0] text-4xl font-bold">
                        About Me
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
                <div className="content-right flex gap-10 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-4">
                    {ListBox.map(listBox => (
                        <div className="list-detail w-[320px] flex flex-col items-center p-4 rounded-3xl transition duration-200 ease-in-out bg-[#e1e1e1] hover:bg-[#222831] hover:text-white">
                            <img src={listBox.image} alt={listBox.image} className="h-[96px] max-sm:h-[80px]" />
                            <h2 className="text-[#5E5DF0] text-2xl font-medium p-4 max-sm:font-bold">{listBox.tittle}</h2>
                            <p className="indent-4 text-slate-500">
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
