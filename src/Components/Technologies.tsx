import { use, useState } from "react";
import type { TechnologyType } from "../TechnologyType";
import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack/Stack";

interface TechnologiesProps {
    TechDataPromise: Promise<TechnologyType[]>
}

const Technologies = ({ TechDataPromise }: TechnologiesProps) => {
    const technologies = use(TechDataPromise);

    const [selectedTechArr, setSelectedTechArr] = useState<TechnologyType[]>([]);

    return (
        <div className="w-10/12 mx-auto">
            <span className="text-4xl font-bold">Explore the </span>
            <span className="w-fit text-4xl font-bold bg-[linear-gradient(to_top,rgba(236,72,153,1)_0%,rgba(139,92,246,1)_100%)] bg-clip-text text-transparent">Technologies</span>
            <p className="text-[#64748b] text-[17px] mt-2 mb-10">Pick one technology per category to build your ideal stack.</p>



            <div className="grid grid-cols-4 gap-6 mt-8 mb-24">

                {/* TechnologyCard */}
                <div className="col-span-3 grid grid-cols-3 gap-4">

                    {

                    technologies.map((technology, idx) => <TechnologyCard 
                    key={idx} 
                    technology={technology}
                    selectedTechArr={selectedTechArr}
                    setSelectedTechArr={setSelectedTechArr}></TechnologyCard>)

                    }

                </div>


                {/* Stack */}
                <div className="col-span-1">
                    <Stack selectedTechArr={selectedTechArr} setSelectedTechArr={setSelectedTechArr}></Stack>
                </div>

            </div>
        </div>
    );
};

export default Technologies;