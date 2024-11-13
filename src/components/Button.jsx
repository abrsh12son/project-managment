// eslint-disable-next-line react/prop-types
const Button = ({children,...props}) => {
    return (
        <button className="bg-stone-800 text-stone-400 text-xl rounded-lg w-fit px-4 py-1 font-bold hover:text-stone-50 hover:bg-black"
        {...props}
        >
       {children}
</button>
    );
}

export default Button;


