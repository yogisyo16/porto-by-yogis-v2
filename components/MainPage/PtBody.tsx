import React from "react";

export default function PtBody() {
    return (
        // The main container. Centers content vertically and horizontally.
        // Uses standard padding from the Tailwind theme (p-4, sm:p-10) instead of arbitrary values.
        <main className="flex flex-grow flex-col items-center justify-center p-4 sm:p-10 md:py-32">
            <div className="container mx-auto flex flex-col items-center gap-10 text-center md:items-center md:text-left">
                {/* Main heading of the page. Only one <h1> is recommended for SEO and accessibility. */}
                <h1 className="text-6xl font-bold">
                    HELLO Y’ALL
                </h1>

                {/* Container for the two-column layout. Stacks on mobile (flex-col) and goes side-by-side on medium screens (md:flex-row). */}
                {/* 'gap' is used for consistent spacing between children. */}
                <section className="flex w-full flex-col items-center gap-10 md:w-auto md:flex-row md:items-start md:gap-20 md:pb-36">
                    
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
                </section>
                <section className="container flex flex-col w-[1200px] h-auto justify-center items-center p-[10px] py-[40px] gap-4 bg-accent-yogis rounded-4xl">
                    <div className="flex flex-row flex-wrap gap-4">
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
                                alt="HTML5 Icon" 
                            />
                            <p className="text-black font-bold text-[22px]">HTML</p>
                        </div>
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
                                alt="CSS3 Icon"
                            />
                            <p className="text-black font-bold text-[22px]">CSS</p>
                        </div>
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                                alt="Javasrcipt Icon" 
                            />
                            <p className="text-black font-bold text-[22px]">Javascript</p>
                        </div>
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                                alt="Typescript Icon"
                            />
                            <p className="text-black font-bold text-[22px]">Typescript</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-4">
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg"
                                alt="React Native Icon" 
                            />
                            <p className="text-black font-bold text-[22px]">React</p>
                        </div>
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                                alt="Next.Js Icon"
                            />
                            <p className="text-black font-bold text-[22px]">Next.Js</p>
                        </div>
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                                alt="Vue.Js Icon" 
                            />
                            <p className="text-black font-bold text-[22px]">Vue.Js</p>
                        </div>
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                                alt="Laravel Icon" 
                            />
                            <p className="text-black font-bold text-[22px]">Laravel</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-4">
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                alt="Tailwind css Icon"
                            />
                            <p className="text-black font-bold text-[22px]">Tailwind</p>
                        </div>
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
                                alt="Material UI Icon" 
                            />
                            <p className="text-black font-bold text-[22px]">Material UI</p>
                        </div>
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                                alt="Bootstrap Icon" 
                            />
                            <p className="text-black font-bold text-[22px]">Bootstrap</p>
                        </div>
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                                alt="FramerMotion Icon" 
                            />
                            <p className="text-black font-bold text-[22px]">Framer Motion</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-4">
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                                alt="Python Icon" 
                            />
                            <p className="text-black font-bold text-[22px]">Python</p>
                        </div>
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                                alt="C# Icon" 
                            />
                            <p className="text-black font-bold text-[22px]">C Sharp</p>
                        </div>
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                                alt="Java Icon" 
                            />
                            <p className="text-black font-bold text-[22px]">Java</p>
                        </div>
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"
                                alt=".Net Icon" 
                            />
                            <p className="text-black font-bold text-[22px]">.Net</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-4">
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                                alt="Github Icon" 
                            />
                            <p className="text-black font-bold text-[22px]">GitHub</p>
                        </div>
                        <div className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1">
                            <img 
                                className="h-[60px] w-[60px]" 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
                                alt="Unity Icon"
                            />
                            <p className="text-black font-bold text-[22px]">Unity</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}