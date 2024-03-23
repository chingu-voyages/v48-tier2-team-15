import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const About = () => {
  const [teamMembers] = useState([
    { name: 'Geoff Jamieson', github: 'https://github.com/UnionPAC', linkedin: 'https://www.linkedin.com/in/geoffjamieson/', role: 'Frontend Developer' },
    { name: 'Vanshika Patel', github: 'https://github.com/vanshika-99', linkedin: 'https://linkedin.com/in/vanshikapatel', role: 'UI/UX Designer' },
    { name: 'Molly Gehring', github: 'https://github.com/mkg1', linkedin: 'https://www.linkedin.com/in/mollykg/', role: 'Frontend Developer' },
    { name: "Ja'Mesa Dixon", github: 'https://github.com/MeMeD10', linkedin: 'https://www.linkedin.com/in/jamesa-dixon/', role: 'Scrum Master' },
    { name: 'Oleg Klyufinskyy', github: 'https://github.com/olegklyufinskyy', linkedin: 'https://www.linkedin.com/in/oleg-klyufinskyy/', role: 'Frontend Developer' }
  ]);

  return (
    <div>
      <div className="mb-8">
        <h2 className="container mx-auto px-4 py-4 text-center flex-col bg-green-600  text-white  rounded p-4 text-2xl font-bold mb-4">
          Our Team
        </h2>
        <div className="grid mx-auto px-4 py-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-green-600 text-white rounded p-4"
            >
              <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <div className="flex justify-center">
                <a
                  href={member.github}
                  className="text-blue-200 hover:text-blue-100 mr-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href={member.linkedin}
                  className="text-blue-200 hover:text-blue-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 text-center flex-col bg-green-600  text-white  rounded p-4 text-2xl font-bold mb-4">
        <h2 className="text-3xl font-bold mb-4">Acknowledgements</h2>
        <p className="text-lg mb-4">
          We acknowledge the National History Museum for providing access to the
          dataset containing valuable information about dinosaurs. Additionally,
          we thank NewsAPI for delivering the latest news on dinosaur
          discoveries, contributing to our ongoing exploration of this
          fascinating field.
        </p>
        <p className="text-lg">
          This project is focused on dinosaurs, exploring their history,
          discoveries, and the fascinating world of paleontology.
        </p>
      </div>
    </div>
  );
};

export default About;
