import React from "react";

export default function PtBody() {
    return (
        // The main container. Centers content vertically and horizontally.
        // Uses standard padding from the Tailwind theme (p-4, sm:p-10) instead of arbitrary values.
        <main className="flex flex-grow flex-col items-center justify-center p-4 sm:p-10">
            <div className="container mx-auto flex flex-col items-center gap-10 text-center md:items-center md:text-left">
                {/* Main heading of the page. Only one <h1> is recommended for SEO and accessibility. */}
                <h1 className="text-6xl font-bold">
                    HELLO Y’ALL
                </h1>

                {/* Container for the two-column layout. Stacks on mobile (flex-col) and goes side-by-side on medium screens (md:flex-row). */}
                {/* 'gap' is used for consistent spacing between children. */}
                <div className="flex w-full flex-col items-center gap-10 md:w-auto md:flex-row md:items-start md:gap-20">
                    
                    {/* Left Column: Introduction */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-6xl">Yogiswara here</h2>
                        <div>
                            <p className="text-4xl">Full Stack Developer</p>
                            <p className="text-4xl">Game Developer</p>
                        </div>
                    </div>

                    {/* Right Column: Bio/Statement */}
                    {/* 'max-w-md' prevents the text from becoming too wide on large screens. */}
                    <div className="flex-1">
                         <p className="text-4xl max-w-md">
                            Open to job opportunities worldwide. Passionate about building and making programs.
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}