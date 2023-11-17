import { atom, useAtom } from "jotai";

export const foodItems = [
  {
    model: "Prop_Fish_Mackerel",
    name: "Mackerel",
    description:
      "A fish that is often found in the Atlantic Ocean. It is a popular food fish and is often served smoked, as an appetizer.",
  },
  {
    model: "Prop_Fish_Tuna",
    name: "Tuna",
    description:
      "A saltwater fish that belongs to the mackerel family. Tuna is a popular food. It is eaten by many people around the world.",
  },
  {
    model: "Food_OctopusNigiri",
    name: "Octopus Nigiri",
    description:
      "A type of sushi made of thinly sliced raw octopus and vinegared rice.",
  },
  {
    model: "Food_SalmonNigiri",
    name: "Salmon Nigiri",
    description:
      "A type of sushi made of thinly sliced raw salmon and vinegared rice.",
  },
  {
    model: "Food_SeaUrchinRoll",
    name: "Sea Urchin Roll",
    description:
      "A type of sushi made of sea urchin and vinegared rice, rolled with nori and topped with wasabi.",
  },
];

export const foodAtom = atom(0);

export const Menu = () => {
  const [foodIndex, setFoodIndex] = useAtom(foodAtom);
  return (
    <>
      <div className="flex-1 w-full flex items-center justify-between">
        <svg
          onClick={() =>
            setFoodIndex((i) => (i > 0 ? i - 1 : foodItems.length - 1))
          }
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 hover:opacity-50 cursor-pointer transition-opacity duration-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          onClick={() => setFoodIndex((foodIndex + 1) % foodItems.length)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 hover:opacity-50 cursor-pointer transition-opacity duration-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="mb-10">
        <h3 className="text-2xl font-bold font-serif">
          {foodItems[foodIndex].name}
        </h3>
        <p className="min-h-[52px]">{foodItems[foodIndex].description}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        {foodItems.map((_, index) => (
          <div
            key={index}
            onClick={() => setFoodIndex(index)}
            className={`w-4 h-4 rounded-full border-2 border-gray-800 ${
              index === foodIndex ? "bg-gray-400" : ""
            }`}
          />
        ))}
      </div>
    </>
  );
};
