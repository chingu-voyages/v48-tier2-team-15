import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavCard = ({ title, description, to, icon }) => {
  return (
    <Link to={to}>
      <div className="bg-[#40826D] shadow-lg p-10 max-w-[400px] min-h-[250px] mx-auto text-white rounded-2xl">
        <FontAwesomeIcon icon={icon} className="mb-6 text-4xl" />
        <h4 className="font-bold text-xl mb-4">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default NavCard;
