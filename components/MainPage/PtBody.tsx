import React from "react";

export default function PtBody() {
    return (
        <>
            {/* Add flex-grow to make this section fill the remaining height */}
            <section className="flex flex-col justify-center w-full flex-grow pt-[40px]">
                <div className="flex flex-row justify-center"> {/* Also added justify-center here to center your text */}
                    <div className="flex flex-col items-center space-y-10">
                        <h1 className="text-6xl font-bold">HELLO Y’ALL</h1>
                        <div className="flex flex-row space-x-20">
                            <div className="flex flex-col px-[10px]">
                                <h1 className="text-6xl">Yogiswara here</h1>
                                <h1 className="text-6xl">Software Engineer</h1>
                            </div>
                            <div className="flex flex-col px-[10px]">
                                <h1 className="text-6xl">I am</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}