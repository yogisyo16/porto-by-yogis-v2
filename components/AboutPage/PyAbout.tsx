import React from "react";

export default function PyAbout() {
    return (
        <>
            <section className="flex flex-col md:justify-center md:w-full md:flex-grow md:pt-[40px]">
                <div className="flex flex-row md:justify-center"> {/* Also added justify-center here to center your text */}
                    <div className="flex md:flex-col md:px-[10px]">
                        <h1 className="text-6xl">Hello there</h1>
                        <h1 className="text-6xl">Yogiswara here</h1>
                    </div>
                    <div className="flex md:flex-col md:px-[10px]">
                        <h1 className="text-6xl">I am</h1>
                        <h2>Software Engineer</h2>
                    </div>
                </div>
            </section>
        </>
    )
}