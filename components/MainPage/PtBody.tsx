import React from "react";

export default function PtBody() {
    return (
        <>
            {/* Add flex-grow to make this section fill the remaining height */}
            <section className="flex flex-col justify-center w-full flex-grow pt-[40px]">
                <div className="flex flex-row justify-center"> {/* Also added justify-center here to center your text */}
                    <div className="flex flex-col px-[10px]">
                        <h1 className="text-6xl">Hello there</h1>
                        <h1 className="text-6xl">Yogiswara here</h1>
                    </div>
                    <div className="flex flex-col px-[10px]">
                        <h1 className="text-6xl">I am</h1>
                    </div>
                </div>
            </section>
        </>
    );
}