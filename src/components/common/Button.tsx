type ButtonProps = {
    label: string;
    onClick?: () => void;
    className?: string;
};
const Button = ({
    label,
    onClick,
    className = '',
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`bg-[#E96125] mx-auto text-white !h-10 font-semibold px-6 text-sm rounded-md ${className}`}
        >
            {label}
        </button>
    );
};
export default Button;