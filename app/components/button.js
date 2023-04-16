const Button = ({ onClick, buttonText }) => {
    return (
        <button
            onClick={() => onClick && onClick()}
            className='w-full cursor-pointer border-2 border-gray-600 bg-white py-2  text-center font-semibold hover:bg-gray-100'
        >
            {buttonText}
        </button>
    );
};

export default Button;
