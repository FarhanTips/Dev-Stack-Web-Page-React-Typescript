import banner from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className="w-10/12 mx-auto flex justify-between items-center my-16">
            <div>
                <p className="text-6xl font-bold">Build Your Ideal</p>
                <p className="w-fit text-6xl font-bold bg-[linear-gradient(to_right,rgba(255,87,34,1)_0%,rgba(216,27,126,1)_50%,rgba(124,58,237,1)_100%)] bg-clip-text text-transparent">
                    Development Stack
                </p>
                {/* //bg-clip-text = Background-এর gradient-টা পুরো <p> element-এ না দেখিয়ে শুধু text-এর shape-এর মধ্যে দেখাও। */}

                <p className="text-[#475569FF] w-3/5 my-7">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="flex gap-4">
                    <button className="btn rounded-lg bg-linear-to-r from-orange-500 to-pink-500 text-white">
                        Explore Technologies
                    </button>
                    <button className="btn border-gray-300 rounded-lg px-10">Learn More</button>
                </div>
            </div>
            <div>
                <img className="  w-175 h-auto" src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;