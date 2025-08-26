import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Lead Photographer & Founder",
      bio: "With over 15 years of experience in wedding photography, Rajesh has captured over 500+ weddings across India. His passion lies in storytelling through images.",
      image: "/assets/m1.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Senior Videographer",
      bio: "Specializing in cinematic wedding films, Priya brings a Bollywood touch to every wedding video. She has directed over 200+ wedding films.",
      image: "/assets/m2.jpg"
    },
    {
      name: "Amit Patel",
      role: "Creative Director",
      bio: "Amit oversees the creative vision of every project, ensuring each couple gets a unique and personalized photography experience.",
      image: "/assets/m3.jpg"
    }
  ];

  const achievements = [
    { number: "500+", label: "Weddings Captured" },
    { number: "200+", label: "Wedding Films" },
    { number: "15+", label: "Years Experience" },
    { number: "1000+", label: "Happy Couples" }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1A3455] to-[#3A5B89] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Divine Photo Studio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            We're passionate about capturing the most precious moments of your life and turning them into timeless memories.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Story Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Divine Photo Studio was born from a simple belief: every love story deserves to be told beautifully. 
                What started as a small passion project in 2009 has grown into one of the most trusted names in 
                wedding photography across India.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                We've had the privilege of documenting love stories from intimate ceremonies to grand celebrations, 
                from traditional Indian weddings to modern fusion celebrations. Each couple brings their unique 
                story, and we're honored to be part of their journey.
              </p>
              <p className="text-gray-600 text-lg">
                Our commitment goes beyond just taking pictures – we create visual narratives that will be 
                cherished for generations to come.
              </p>
            </div>
            <div>
              <img
                src="/assets/studio-imgae.jpg"
                alt="Our Studio"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-600 text-lg">
              Numbers that tell our story of dedication and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#1A3455] mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg">
              The talented professionals behind every beautiful moment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-[#1A3455] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#1A3455] font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-[#1A3455] mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for perfection in every shot, every edit, and every interaction with our clients.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-semibold text-[#1A3455] mb-3">
                Authenticity
              </h3>
              <p className="text-gray-600">
                We capture real moments and genuine emotions, preserving the true essence of your special day.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-[#1A3455] mb-3">
                Partnership
              </h3>
              <p className="text-gray-600">
                We work closely with every couple to understand their vision and bring it to life.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-[#F8F8F8] rounded-xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            Ready to Create Beautiful Memories?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and how we can make your special day unforgettable through our lens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 text-lg bg-[#1A3455] text-white rounded-md shadow hover:bg-[#3A5B89] transition"
            >
              Get In Touch
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-3 text-lg bg-white text-[#1A3455] border-2 border-[#1A3455] rounded-md hover:bg-[#1A3455] hover:text-white transition"
            >
              View Portfolio
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
