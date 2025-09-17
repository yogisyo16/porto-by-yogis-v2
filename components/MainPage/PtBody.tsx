import React, { useState } from "react";

// --- Data for all skills ---
// It's cleaner to manage your skills as an array of objects.
// I've added example GIF URLs. You can replace them with your own.
const skills = [
    {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXBscnQza256emY3eHF5OW5jYmtwdTE3c25yMzM1N3pzYW50ZXQwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vRfNA1p0rvhMSvS/giphy.gif"
    },
    {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWx3dHNma2x6cHZyN3dlZzJ1cnJtYnFxMzY5MjJvZHNxZ3l2Mmh0ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13FrpeVH09Zrb2/giphy.gif"
    },
    {
        name: "Javascript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnY3ZThxajBkbGZ3d2VqY3YzaTgyOHBja2N6OXA2bGRvYmxocXhyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ln7z2eWriiQAllfVcn/giphy.gif"
    },
    {
        name: "Typescript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2xnZHNraG92c3VhbDlodWNkc2EwZGM5cjJvaWpvdWxkbmF3cnA5byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/78XCFBGOlS6keY1Bil/giphy.gif"
    },
    {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3FueGhwd3oxbHM2YzllaHprM3huMW1od2Y1cnZkcmEydWkzMGVsYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EeZ6mLsRRik8cgnh3D/giphy.gif"
    },
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXM2bnZjdG5kM3Q0Z2k4eG1oNnF4ZnowM2FtdWk1aXN4a2lneDVtaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eNAsjO55tPbgaor7ma/giphy.gif"
    },
    {
        name: "Next.Js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGR1aDN3NXhvOGFnbGtocnMycHd3aDlxMjQ5dXJtc3p5bXp2OTkwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1gUWdf8Z8HCxpM8cUR/giphy.gif"
    },
    {
        name: "Vue.Js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2dhNHY1cmsxc3AwdG45bDJiMDFleXRxY3BicTFkdGpkeWJyazkzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u7q3rAgGxifmM/giphy.gif"
    },
    {
        name: "Node.Js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHdja3Nwem05eXB4YjU0dXlmcXpoODQ5YjN0enI5OXkzc3o0a2xpaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Oo8Ly1JXZjrqm54qK4/giphy.gif"
    },
    {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3FyMDlsaGJleDNmNTQ3azY0ZGZsbGJvcGhnNmc5eTFwdHNnenU0cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xGHvL9ujXGUaLS/giphy.gif"
    },
    {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDlsc200eWN2c3lydTNvanhoZmg2Z21xcGFpaWtiZGdrZHJ5NXdrdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j6TmWtNerkGPgrpxNF/giphy.gif"
    },
    {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-plain.svg",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnNpeHk3dDV1a2QxaXB6MmVxajQ4ODBsNmtreTFsNmtnbm4zdDNlbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JQxEuYZPnjRLfeINz6/giphy.gif"
    },
    {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGRtbjRzbjZzbWpkYm9wMjE5bXFuaWJhdDU0OXZjZnN6aTllNTcyaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IgEJd2t7vxQitoDpR6/giphy.gif"
    },
    {
        name: "Framer Motion",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2FpdXkwM3V2ZW10bmVoOTJpZ3RrcHBrdDh5ZmcyMHQwYWx5dTRsbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BhqCNnw7Zpj0c/giphy.gif"
    },
    {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnpqcnc1aWthYWg3OXZheTZveHc1eWE5M2lnNm01NWxnNnNtMm45NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PiWfijeEeJEI0uB7j6/giphy.gif"
    },
    {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXkxN2R3a251aXk2bHp6emwzbXUzcTdscGx6dHhvYno3bTRrdnQyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LyV4cw0vDtAgc8xTHQ/giphy.gif"
    },
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDVoMXdiMnJmdHNsd3p1ZmhwczUycjFtZnE3YjI2eW1qZW92bGxndiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/coxQHKASG60HrHtvkt/giphy.gif"
    },
    {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG5wMzduYzIya3F2MjhiNGJueXEwNndwZGk5dGFpdXEzNmZzajd5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vISmwpBJUNYzukTnVx/giphy.gif"
    },
    {
        name: "MySql",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWx5cGYwMG1ueGxrenBnYzV3cGwwODVzaXJ4aGxrc2IzcXE3MngxcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13chvmRrJkgyWc/giphy.gif"
    },
    {
        name: "Swift",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHFvMHY3c3RneDdmZzJsdzNkcHVpZDBxZnBrOXl5ZW1kbGJxZnB3bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dXKiD8XysOuhFAJB1f/giphy.gif"
    },
    {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHR0cHVkOXU0Y3o1bHA1Z2RjbWtpZzNuZDJ5dHdtdTNzcGtqMmt3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif"
    },
    {
        name: "Unity",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
        gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG5lZHdobjB2NDFtNzB5YW0yamUyMmk4MHJ0bG5hOWZvaWVkeDYxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uZV9vl2xExtlu/giphy.gif"
    }

     // ... Add all your other skills here in the same format
];

interface SkillCardProps {
    name: string;
    icon: string;
    gif: string;
}

function SkillCard({ name, icon, gif }: SkillCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-secondary-yogis px-2 py-1 transition-transform duration-300 ease-in-out hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                className="h-[60px] w-[60px]"
                // Conditionally render the gif or the static icon
                src={isHovered ? gif : icon}
                alt={`${name} Icon`}
            />
            <p className="text-black font-bold text-[22px]">{name}</p>
        </div>
    );
}

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
                    <div className="flex flex-row flex-wrap justify-center gap-4">
                        {skills.map((skill) => (
                            <SkillCard
                                key={skill.name}
                                name={skill.name}
                                icon={skill.icon}
                                gif={skill.gif}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}