

const Button = ({children}) => {
    return (
        <button className="btn btn-outline border-0 border-b-2 text-neutral rounded-none hover:bg-transparent hover:border-orange-300 font-bold hover:text-orange-300">{children}</button>
    );
};

export default Button;