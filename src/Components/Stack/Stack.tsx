import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../TechnologyType";
import EmptyStack from "./EmptyStack";
import StackItems from "./StackItems";


interface StackProps {
    selectedTechArr: TechnologyType[],
    setSelectedTechArr: Dispatch<SetStateAction<TechnologyType[]>>;
}

const Stack = ({ selectedTechArr, setSelectedTechArr }: StackProps) => {

    return (
        <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold text-slate-900">
                Your Stack
            </h2>

            {
                selectedTechArr.length < 1
                    ? <EmptyStack></EmptyStack>
                    : <StackItems selectedTechArr={selectedTechArr}
                    setSelectedTechArr={setSelectedTechArr}></StackItems>
            }
        </div>
    );

};

export default Stack;