const Button = ({ onClick, buttonText, color = 'amber' }) => {
    const colorMap = {
        amber: 'bg-amber-500',
        blue: 'bg-blue-600',
        green: 'bg-green-600',
        red: 'bg-red-600',
        white: 'bg-white',
    };
    return (
        <button
            onClick={() => onClick && onClick()}
            className={`w-full cursor-pointer border border-black ${colorMap[color]} py-1 text-center font-semibold shadow hover:bg-black hover:text-white`}
        >
            {buttonText}
        </button>
    );
};

export default Button;
