import React from "react";

export default function PtAbout() {
    return (
        <>
            <section className="flex flex-col md:justify-center md:w-full md:flex-grow pt-[20px] md:pt-[40px]">
                <div className="flex flex-row items-center md:items-center justify-center md:justify-center"> {/* Also added justify-center here to center your text */}
                    <h2 className="text-2xl font-bold">About</h2>
                </div>
            </section>
        </>
    )
}