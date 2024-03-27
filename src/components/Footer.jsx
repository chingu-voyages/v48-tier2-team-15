import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full p-6 text-center">
      <a
        href="https://github.com/chingu-voyages/v48-tier2-team-15"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} color="black" size="2xl" />
      </a>
    </footer>
  );
};

export default Footer;
