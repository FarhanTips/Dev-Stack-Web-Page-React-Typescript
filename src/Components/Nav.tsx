
import logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <div className="w-10/12 mx-auto flex justify-between items-center font-medium my-3">
            <img src={logo} alt="" />
            <ul className="flex justify-between items-center gap-4">
                <li><a className="text-[#db2777FF]" href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className="flex gap-1">
                <button className="btn border-none bg-white brounded-3xl">Sign In</button>
                <button className="btn btn-secondary bg-[#d91b7e] rounded-3xl">
                    Sign UP
                </button>

            </div>
        </div>
    );
};

export default Nav;