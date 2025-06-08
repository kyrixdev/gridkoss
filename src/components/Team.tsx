import { useState } from 'react';
import { Github, Linkedin, Twitter, X } from 'lucide-react';
import Modal from 'react-modal';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Odrin Heta',
    role: 'CEO & Founder',
    image: 'https://media.discordapp.net/attachments/1344442202960691255/1380866958387445880/2B9B15A3-D10F-4A0D-B749-A56A0C1BC175.png?ex=6846c192&is=68457012&hm=c0a107671850f4a0f3ed88edd767bd928c2e8c6a4b4f91497a4b160b58111ad2&=&format=webp&quality=lossless&width=429&height=930',
    bio: `Odrin Heta – Commando

Odrin Heta, known online as Commando, is a well-known name in the crypto space across Albania and Kosovo. As the founder of one of the largest crypto communities in the region, he has helped thousands of people learn about cryptocurrency, trading, and digital finance.

In addition to his work in crypto, Odrin is also very active in the world of AI-generated models. He is constantly exploring new technologies and building projects that use AI to solve real-world problems.

Odrin is passionate about innovation, community-building, and bringing the future of tech closer to everyday people. Through his platforms, he continues to lead with energy, knowledge, and a clear vision for what’s next in both crypto and AI.`,
    socials: {
      linkedin: 'https://linkedin.com/in/odrinheta',
      twitter: 'https://twitter.com/odrinheta',
      github: 'https://github.com/odrinheta'
    }
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Sarah is a technical innovator who brings deep expertise in scalable AI systems and cloud architecture. With a background in distributed systems and machine learning infrastructure, she ensures Gridkoss delivers robust, enterprise-grade solutions. Sarah previously worked as a Principal Engineer at Google Cloud and has been instrumental in building AI platforms that serve millions of users worldwide.',
    socials: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      github: 'https://github.com/sarahchen'
    }
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    role: 'Head of AI Research',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Marcus leads our research initiatives and drives innovation in cutting-edge AI technologies. With a PhD in Machine Learning from Stanford and experience at leading research labs, he specializes in natural language processing and computer vision. Marcus has authored over 50 research papers and holds multiple patents in AI technology. He is committed to advancing the field while ensuring practical applications for real-world problems.',
    socials: {
      linkedin: 'https://linkedin.com/in/marcusjohnson',
      twitter: 'https://twitter.com/marcusjohnson',
      github: 'https://github.com/marcusjohnson'
    }
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'VP of Product',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Emily bridges the gap between complex AI technology and user-friendly products. With a background in product management at leading tech companies, she ensures our AI solutions are intuitive and deliver real value to customers. Emily has a keen eye for user experience and has successfully launched multiple AI-powered products that have transformed how businesses operate.',
    socials: {
      linkedin: 'https://linkedin.com/in/emilydavis',
      twitter: 'https://twitter.com/emilydavis'
    }
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section id="team" className="bg-[#121212] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience in AI, 
            machine learning, and business innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-[#1A1A1A] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-[#8A2BE2]/10 hover:to-transparent"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-[#8A2BE2] font-medium mb-4">{member.role}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#8A2BE2] transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#8A2BE2] transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#8A2BE2] transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  
                  <button
                    onClick={() => openModal(member)}
                    className="text-sm bg-gradient-to-r from-[#8A2BE2] to-[#9370DB] text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                  >
                    View Bio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Biography Modal */}
      <Modal
        isOpen={selectedMember !== null}
        onRequestClose={closeModal}
        className="max-w-2xl w-full mx-auto mt-20 bg-[#1A1A1A] rounded-2xl overflow-hidden outline-none"
        overlayClassName="fixed inset-0 bg-black/80 flex items-start justify-center z-50 p-4"
      >
        {selectedMember && (
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-[#8A2BE2] font-semibold mb-4">
                  {selectedMember.role}
                </p>
                
                <div className="flex space-x-4 mb-6">
                  {selectedMember.socials.linkedin && (
                    <a
                      href={selectedMember.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#8A2BE2] transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                  {selectedMember.socials.twitter && (
                    <a
                      href={selectedMember.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#8A2BE2] transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  )}
                  {selectedMember.socials.github && (
                    <a
                      href={selectedMember.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#8A2BE2] transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}