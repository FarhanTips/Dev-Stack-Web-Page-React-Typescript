
import logo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <div>
            <div className="border-y border-gray-300 my-10">
                <div className="w-10/12 mx-auto grid grid-cols-[1.5fr_1fr_1fr_1fr] items-start my-15">
                    <div>
                        <img className="mb-3" src={logo} alt="" />
                        <p className="mb-10 text-[#64748b]">Curated tools, technologies, and resources for developers building modern software.</p>
                        <ul className="flex gap-5 text-[#475569] font-semibold">
                            <li><a href="">Github</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">Linkedin</a></li>
                        </ul>
                    </div>

                    <div className="justify-self-center">
                        <p className="mb-3 font-semibold">PRODUCT</p>
                        <ul className="space-y-1 text-[#64748b]">
                            <li><a href="">Home</a></li>
                            <li><a href="">Technologies</a></li>
                            <li><a href="">Projects</a></li>
                        </ul>
                    </div>

                    <div className="justify-self-center">
                        <p className="mb-3 font-semibold">COMPANY</p>
                        <ul className="space-y-1 text-[#64748b]">
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Careers</a></li>
                        </ul>
                    </div>

                    <div className="justify-self-center">
                        <p className="mb-3 font-semibold">LEGAL</p>
                        <ul className="space-y-1 text-[#64748b]">
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-10/12 mx-auto flex justify-between items-center text-[#94a3b8] mb-12">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <ul className="flex gap-8">
                    <li><a href="">Privacy</a></li>
                    <li><a href="Terms">Terms</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;