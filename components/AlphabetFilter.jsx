const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function AlphabetFilter({ active, setActive }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {letters.map((l) => (
        <button
          key={l}
          onClick={() => setActive(l)}
          className={`w-10 h-10 text-sm rounded border transition-all transform-gpu duration-500
            ${
              active === l
                ? "bg-secondary text-white border-secondary"
                : "bg-white text-gray-700 hover:bg-secondary/10 hover:border-secondary"
            }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
