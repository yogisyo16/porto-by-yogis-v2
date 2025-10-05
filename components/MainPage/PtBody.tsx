import React, { useState } from "react";
import { skills } from "@/services/Skills";
import { projects } from "@/services/Projects";

interface SkillCardProps {
    name: string;
    icon: string;
    gif: string;
}

interface ProjectProps {
    title: string;
    description1: string;
    description2?: string;
    description3?: string;
    description4?: string;
    description5?: string;
    image: string;
    link: string;
}

function SkillCard({ name, icon, gif }: SkillCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex w-[250px] flex-row items-center gap-4 rounded-2xl bg-accent-yogis px-2 py-1 transition-transform duration-300 ease-in-out hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                className="h-[60px] w-[60px]"
                // Conditionally render the gif or the static icon
                src={isHovered ? gif : icon}
                alt={`${name} Icon`}
            />
            <p className="text-white font-bold text-[22px]">{name}</p>
        </div>
    );
}

function ProjectCard({ title, description1, description2, description3, description4, description5, image, link }: ProjectProps) {
    return (
        <div className="flex flex-row items-center gap-4 rounded-2xl bg-accent-yogis p-4">
            <img className="h-[200px] w-[200px]" src={image} alt={title} />
            <div className="flex flex-col">
                <h3 className="text-white font-bold text-[22px]">{title}</h3>
                <p className="text-white">{description1}</p>
                <p className="text-white">{description2}</p>
                <p className="text-white">{description3}</p>
                <p className="text-white">{description4}</p>
                <p className="text-white">{description5}</p>
                <a href={link} className="text-white font-bold">View Project</a>
            </div>
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
                <section className="container flex flex-col w-[1200px] h-auto justify-center items-center p-[10px] py-[40px] gap-4 bg-secondary-yogis rounded-4xl">
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
                <section>
                    <div className="container flex flex-col gap-2 w-auto h-auto justify-center items-center">
                        {
                            projects.map((project) => (
                                <ProjectCard
                                    key={project.title}
                                    title={project.title}
                                    description1={project.description1}
                                    description2={project.description2}
                                    description3={project.description3}
                                    description4={project.description4}
                                    description5={project.description5}
                                    image={project.image}
                                    link={project.link}
                                />
                            ))
                        }
                    </div>
                </section>
            </div>
        </main>
    );
}