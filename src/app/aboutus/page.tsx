// pages/about.tsx

import { Header } from "@/component/header/header";
import Image from "next/image";

export default function About() {
  return (
    <>
    <Header/>
    <div className="min-h-screen mt-20 bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-md bg-white/10 p-10 rounded-2xl shadow-xl border border-white/20">
          <h1 className="text-5xl font-bold text-center text-white mb-8">
            About Our Startup
          </h1>

          <p className="text-lg text-gray-300 mb-6 text-center">
            We are a next-generation <span className="text-purple-400 font-semibold">IT solutions company</span> helping businesses transform digitally. From idea to deployment, we specialize in building end-to-end software solutions tailored to your needs — web apps, mobile apps, SaaS products, enterprise tools, automation systems, and more.
          </p>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">Our Mission</h2>
              <p className="text-gray-300">
                To empower startups and enterprises by delivering innovative, scalable, and secure tech solutions that solve real-world problems and improve business outcomes.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">Our Vision</h2>
              <p className="text-gray-300">
                To become a globally trusted tech partner known for creativity, quality, and excellence in software development, while fostering a culture of innovation and growth.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Web Development", desc: "Custom websites, portals & full-stack platforms." },
                { title: "Mobile Apps", desc: "Cross-platform iOS and Android apps with performance and style." },
                { title: "UI/UX Design", desc: "Modern, user-friendly and accessible design for all devices." },
                { title: "DevOps & CI/CD", desc: "Automation, containerization & cloud deployments." },
                { title: "E-Commerce", desc: "Custom shops, carts, inventory and payment integrations." },
                { title: "AI & Automation", desc: "Smart tools, workflows & data-driven solutions." },
              ].map((service, i) => (
                <div key={i} className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-200 mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Our Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative h-56 w-full rounded-lg overflow-hidden border border-white/10"
                >
                  <Image
                    src={`/ab${i}.jpg`}
                    alt={`Project ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Rajan Singh", role: "Co-Founder & Full Stack Dev" },
                { name: "Ankit Dubey", role: "Ceo-Founder" },
              ].map((member, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-xl text-center border border-white/10">
                  <div className="mx-auto mb-4 w-24 h-24 relative rounded-full overflow-hidden border border-white/10">
                    <Image
                      src={`/team${i + 1}.jpg`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-purple-300">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 text-center">
            <p className="text-xl text-white mb-4">Ready to build your next big thing?</p>
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white text-lg font-medium transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}
