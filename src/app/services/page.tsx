// pages/services.tsx

import { Header } from "@/component/header/header";
import Link from "next/link";
import { FaCode, FaMobileAlt, FaPaintBrush, FaCloud, FaRobot, FaStore, FaLock, FaChartLine } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaCode size={30} />,
    desc: "We build fast, scalable, and SEO-friendly websites using modern stacks like React, Next.js, Node.js, and MongoDB.",
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt size={30} />,
    desc: "Cross-platform Android & iOS apps using React Native and Flutter with pixel-perfect UI and smooth UX.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush size={30} />,
    desc: "Design that delights — we craft user-friendly interfaces, wireframes, prototypes, and high-fidelity designs.",
  },
  {
    title: "DevOps & Cloud",
    icon: <FaCloud size={30} />,
    desc: "CI/CD pipelines, Docker, Kubernetes, AWS, DigitalOcean, and scalable infrastructure to power your apps.",
  },
  {
    title: "AI & Automation",
    icon: <FaRobot size={30} />,
    desc: "We integrate AI, ML, chatbots, and automation systems to optimize your operations and reduce human effort.",
  },
  {
    title: "E-Commerce Solutions",
    icon: <FaStore size={30} />,
    desc: "Custom e-commerce platforms with cart, payment gateway, inventory management, and dashboard.",
  },
  {
    title: "Cybersecurity",
    icon: <FaLock size={30} />,
    desc: "Security-first approach: SSL, JWT, OAuth2, firewalls, encryption, and audits to protect your data.",
  },
  {
    title: "Data Analytics",
    icon: <FaChartLine size={30} />,
    desc: "Turn your raw data into insights — dashboards, reporting tools, and decision-making analytics.",
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black mt-20 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 p-10 rounded-2xl shadow-lg border border-white/20">
            <h1 className="text-5xl font-bold text-center text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
              We provide end-to-end IT solutions tailored for startups, enterprises, and individuals. Our goal is to help you launch, scale, and grow with technology that works for you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg hover:scale-[1.02] transition"
                >
                  <div className="mb-4 text-purple-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need a custom solution?
              </h2>
              <p className="text-gray-300 mb-6">
                We&apos;d love to hear about your idea. Let&apos;s build something amazing together.
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
