export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-10 flex-wrap">
      {Array.from({ length: totalPages }).map((_, i) => {
        const pageNumber = i + 1;

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`px-4 py-2 border rounded transition ${
              currentPage === pageNumber
                ? "bg-secondary text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
}
