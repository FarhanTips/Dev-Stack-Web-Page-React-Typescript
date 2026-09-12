import { use } from "react";
import type { TechnologyType } from "../TechnologyType";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
    TechDataPromise: Promise<TechnologyType[]>
}

const Technologies = ({ TechDataPromise }: TechnologiesProps) => {
    const technologies = use(TechDataPromise);

    return (
        <div className="w-10/12 mx-auto">
            <span className="text-4xl font-bold">Explore the </span>
            <span className="w-fit text-4xl font-bold bg-[linear-gradient(to_top,rgba(236,72,153,1)_0%,rgba(139,92,246,1)_100%)] bg-clip-text text-transparent">Technologies</span>
            <p className="text-[#64748b] text-[17px] my-2">Pick one technology per category to build your ideal stack.</p>
            <p>Length: {technologies.length}</p>



            <div className="grid grid-cols-4 gap-6 mt-8">

                {/* TechnologyCard */}
                <div className="col-span-3 grid grid-cols-3 gap-4">

                    {

                    technologies.map((technology, idx) => <TechnologyCard 
                    key={idx} 
                    technology={technology}></TechnologyCard>)

                    }

                </div>



            </div>
        </div>
    );
};

export default Technologies;