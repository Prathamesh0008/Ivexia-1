import { motion } from "framer-motion";
import ceo from "../assets/Leadership/ceo.jpeg";

export default function LeadershipSection() {
  const ceoImage = ceo;

  const team = [
    { name: "Prathamesh Shinde", role: "Director – Strategy", img: "https://randomuser.me/api/portraits/men/32.jpg", quote: "We lead with innovation and integrity." },
    { name: "Adarsh Singh", role: "Director – Operations", img: "https://randomuser.me/api/portraits/men/47.jpg", quote: "Our vision is to shape global healthcare." },
    { name: "Priya Sharma", role: "Head – Quality Assurance", img: "https://randomuser.me/api/portraits/women/45.jpg", quote: "Quality defines trust at Ivexia." },
    { name: "Rahul Desai", role: "Head – Manufacturing", img: "https://randomuser.me/api/portraits/men/29.jpg", quote: "Efficiency meets precision every day." },
    { name: "Sonal Mehta", role: "HR & People Development", img: "https://randomuser.me/api/portraits/women/68.jpg", quote: "We grow together with purpose." },
    { name: "Karan Patel", role: "R&D Scientist", img: "https://randomuser.me/api/portraits/men/83.jpg", quote: "Innovation is in our DNA." },
    { name: "Fatima Khan", role: "Regulatory Affairs", img: "https://randomuser.me/api/portraits/women/52.jpg", quote: "Compliance drives confidence." },
    { name: "Rohit Nair", role: "Finance & Strategy", img: "https://randomuser.me/api/portraits/men/53.jpg", quote: "Sustainable growth through smart finance." },
    { name: "Neha Gupta", role: "Marketing Head", img: "https://randomuser.me/api/portraits/women/32.jpg", quote: "Every product tells a story." },
    { name: "Arjun Verma", role: "Digital Systems Lead", img: "https://randomuser.me/api/portraits/men/64.jpg", quote: "Technology powers transparency." },
  ];

  return (
    <section className="relative text-white overflow-hidden">
      {/* === CEO Background Section === */}
      <div
        className="relative h-[70vh] md:h-[85vh] flex flex-col justify-center items-center text-center px-6 md:px-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.8)), url(${ceoImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-3"
        >
          Leadership & Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed"
        >
          “At Ivexia, we don’t just make pharmaceuticals — we create trust.
          Our people are our foundation, our science is our strength,
          and our vision is our promise.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6"
        >
          <h3 className="text-2xl font-semibold text-[#FF7A00]">
            Dr. Avinaash Badal
          </h3>
          <p className="text-sm text-gray-400">Chief Executive Officer</p>
        </motion.div>
      </div>

      {/* === Team Grid Section (Below CEO) === */}
      <div className="relative z-10 -mt-16 md:-mt-24 bg-[#0d2d47] bg-opacity-95 py-20 px-6 md:px-16 rounded-t-[40px] shadow-inner">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-white mb-2">
            Our Leadership Team
          </h3>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            The driving force behind Ivexia’s innovation, integrity, and impact.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl text-center w-[180px] md:w-[200px] shadow-lg hover:shadow-2xl transition-all hover:bg-white/20"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-[#19a6b5] mb-3"
              />
              <h4 className="text-base font-semibold text-white">
                {member.name}
              </h4>
              <p className="text-xs text-[#19a6b5] mb-2">{member.role}</p>
              <p className="text-[12px] text-gray-300 italic leading-snug">
                “{member.quote}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === Decorative Gradient Line === */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF7A00] via-[#E2004F] to-[#19a6b5]" />
    </section>
  );
}
