import React from "react";
import { ListBox } from "../helpers/ListBox";

function Home() {
    return (
        <div className="w-full h- flex flex-col items-center justify-center bg-gray-400 p-10">
            <div className="content-left w-[80%] h-[20%] flex flex-col items-center gap-8 justify-center text-center text-4xl mb-12">
                <h1 className="w-[80%] text-[#5E5DF0] text-4xl font-bold">
                    Portfolio
                </h1>
                <h2 className="text-black font-bold underline underline-offset-2">
                    Expertise Service! Let's check it out
                </h2>
                <p className="text-sm text-black ">
                    Lorem ipsum dolor sit amet, consectetur
                    <br /> adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </p>
            </div>
            <div className="content-right grid grid-cols-3 gap-10">
                {ListBox.map(listBox => (
                    <div className="list-detail w-[320px] flex flex-col items-center p-8 rounded-2xl transition duration-200 ease-in-out bg-gray-800 hover:bg-amber-800 text-orange-300">
                        <img src={listBox.image} alt={listBox.image} className="h-[120px]" />
                        <h2 className="">{listBox.tittle}</h2>
                        <p className="indent-4">
                            {listBox.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
