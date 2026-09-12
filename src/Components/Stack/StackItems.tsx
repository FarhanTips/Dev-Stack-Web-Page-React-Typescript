import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../TechnologyType";
import StackItemCard from "./StackItemCard";


interface StackItemsProps {
    selectedTechArr: TechnologyType[],
    setSelectedTechArr: Dispatch<SetStateAction<TechnologyType[]>>;
}

const StackItems = ({ selectedTechArr, setSelectedTechArr }: StackItemsProps) => {

    const handleRemoveAllButton = () =>{
        setSelectedTechArr([]);
    }


    return (
        <div>
            <p className="text-gray-500 text-sm mb-4.5">{selectedTechArr.length} Technology Selected</p>
            <div className="space-y-2.5">
                {
                    selectedTechArr.map(item => <StackItemCard key={item.id}
                        item={item}
                        selectedTechArr={selectedTechArr}
                        setSelectedTechArr={setSelectedTechArr}></StackItemCard>)
                }

                <button onClick={handleRemoveAllButton} className="btn w-full rounded-xl mt-6 border font-semibold border-red-500 bg-white text-red-500 hover:bg-red-50">
                    Remove All</button>

            </div>
        </div>
    );
};

export default StackItems;