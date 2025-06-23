import { Header } from "@/component/header/header";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        name: "Braj Kunj Seva",
        desc: "A devotional e-commerce platform offering products, services, and donations with multilingual support and user-friendly interface.",
        img: "/project2.png",
        url: "https://brajkunjseva.com",
    },
    {
        name: "Forge Trading & Construction",
        desc: "A professional trading and construction company specializing in commercial, residential, and industrial projects with a strong focus on quality, safety, and timely delivery.",
        img: "/project1.png",
        url: "https://www.forgetradingandconstruction.com/",
    },
    {
        name: "Hotel Mayur",
        desc: "A beautiful static website for a luxury hotel with booking section, gallery, and responsive layout built in pure HTML/CSS.",
        img: "/project3.png",
        url: "http://rajansingh1801.github.io/Hotel-Mayur/Index.html",
    },
];

export default function Portfolio() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-black mt-20 text-white px-6 py-12">
                <div className="max-w-6xl mx-auto">
                    <div className="backdrop-blur-md bg-white/10 p-10 rounded-2xl border border-white/20 shadow-xl">
                        <h1 className="text-5xl font-bold text-center mb-10">Our Portfolio</h1>
                        <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
                            From full-stack platforms to static websites, here&apos;s a showcase of some of our proudest works that reflect our quality, performance, and creativity.
                        </p>

                        <div className="grid md:grid-cols-2 gap-10">
                            {projects.map((project, i) => (
                                <div
                                    key={i}
                                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg transition hover:scale-[1.02]"
                                >
                                    <div className="relative w-full h-56">
                                        <Image
                                            src={project.img}
                                            alt={project.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold mb-2 text-purple-300">
                                            {project.name}
                                        </h2>
                                        <p className="text-gray-300 mb-4">{project.desc}</p>

                                        <Link
                                            href={project.url}
                                            target="_blank"
                                            className="inline-block mt-2 text-purple-400 hover:underline"
                                        >
                                            View Project →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16">
                            <h3 className="text-2xl font-bold text-white mb-2">Want to see more?</h3>
                            <p className="text-gray-400 mb-4">
                                We&apos;re constantly working on new ideas. Contact us to build your next dream project!
                            </p>
                            <Link
                                href="/contactus"
                                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white text-lg font-medium transition"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
