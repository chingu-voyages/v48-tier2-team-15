import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const teamMembers = [
    {
      name: "Geoff Jamieson",
      github: "https://github.com/UnionPAC",
      linkedin: "https://www.linkedin.com/in/geoffjamieson/",
      role: "Frontend Developer",
    },
    {
      name: "Vanshika Patel",
      github: "https://github.com/vanshika-99",
      linkedin: "https://linkedin.com/in/vanshikapatel",
      role: "UI/UX Designer",
    },
    {
      name: "Molly Gehring",
      github: "https://github.com/mkg1",
      linkedin: "https://www.linkedin.com/in/mollykg/",
      role: "Frontend Developer",
    },
    {
      name: "Ja'Mesa Dixon",
      github: "https://github.com/MeMeD10",
      linkedin: "https://www.linkedin.com/in/jamesa-dixon/",
      role: "Scrum Master",
    },
    {
      name: "Oleg Klyufinskyy",
      github: "https://github.com/olegklyufinskyy",
      linkedin: "https://www.linkedin.com/in/oleg-klyufinskyy/",
      role: "Frontend Developer",
    },
  ];

  return (
    <div className="w-[90%] mx-auto max-w-[1400px]">
      <div className="my-20 px-4 max-w-[1000px] mx-auto">
        <h2 className="text-center flex-col text-3xl font-bold my-12 font-firaSans tracking-widest">
          About the App
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          nobis aspernatur dolorum at earum? Ducimus maiores illo debitis.
          Repellat maxime temporibus porro harum nemo inventore assumenda minus
          tenetur doloremque veniam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Temporibus nobis aspernatur dolorum at earum?
          Ducimus maiores illo debitis. Repellat maxime temporibus porro harum
          nemo inventore assumenda minus tenetur doloremque veniam?
        </p>
      </div>
      <div className="my-24">
        <h2 className="text-center flex-col text-3xl font-bold my-12 font-firaSans tracking-widest">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="px-4 py-16 rounded shadow hover:scale-105 border-4"
            >
              <h3 className="text-2xl font-semibold mb-2 font-firaSans tracking-wider">
                {member.name}
              </h3>
              <p className="text-sm mb-10 italic">{member.role}</p>
              <div className="flex justify-center gap-8">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2xl" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-20 max-w-[1000px] mx-auto">
        <h2 className="font-firaSans text-xl mb-8">Acknowledgements</h2>
        <div className="text-[0.9rem]">
          <p className="mb-4">
            We acknowledge the National History Museum for providing access to
            the dataset containing valuable information about dinosaurs.
            Additionally, we thank NewsAPI for delivering the latest news on
            dinosaur discoveries, contributing to our ongoing exploration of
            this fascinating field.
          </p>
          <p>
            This project is focused on dinosaurs, exploring their history,
            discoveries, and the fascinating world of paleontology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
