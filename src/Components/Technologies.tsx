import { use } from "react";
import type { TechnologyType } from "../TechnologyType";

interface TechnologiesProps{
    TechDataPromise: Promise<TechnologyType[]>
}

const Technologies = ({TechDataPromise}: TechnologiesProps) => {
    const technologies = use(TechDataPromise);

    return (
        <div>
            <p>Length: {technologies.length}</p>
        </div>
    );
};

export default Technologies;