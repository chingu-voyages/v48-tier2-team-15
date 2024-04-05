import { Link } from "react-router-dom";

const SearchListItem = ({ dino, onClose }) => {
  const { description, id, imageSrc, name, typeOfDinosaur } = dino;
  return (
    <Link
      to={`/dinosaurs/${name}`}
      className="flex p-4 border border-t-gray-300 gap-4 hover:bg-[hsl(0,0%,85%)] items-center last-of-type:rounded-b-3xl"
      key={id}
      onClick={onClose}
    >
      <img src={imageSrc} alt={name} width={60} className="rounded" />
      <div className="flex flex-col">
        <p className="font-bold">{name}</p>
        <p className="text-sm italic text-gray-500">{typeOfDinosaur}</p>
        <p className="text-[0.9rem]">
          {description.toLowerCase() === "n/a"
            ? "N/A"
            : `${description.substring(0, 100)}...`}
        </p>
      </div>
    </Link>
  );
};

export default SearchListItem;
