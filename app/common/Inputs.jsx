export const CustomButton = ({ btnText, onClick, rightIcon = true }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
      >
        <span className=" text-white text-sm whitespace-nowrap">{btnText}</span>
        {rightIcon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        )}
      </button>
    </>
  );
};
