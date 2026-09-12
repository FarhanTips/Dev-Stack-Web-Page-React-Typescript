

import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../TechnologyType";
import { toast } from "react-toastify";


interface StackItemCardProps {
    item: TechnologyType,
    selectedTechArr: TechnologyType[],
    setSelectedTechArr: Dispatch<SetStateAction<TechnologyType[]>>
}

const StackItemCard = ({ item, selectedTechArr, setSelectedTechArr }: StackItemCardProps) => {

    
    const handleCrossButton = (SItem: TechnologyType) =>{
        const newArr = selectedTechArr.filter(elem => elem.id !== SItem.id)
        setSelectedTechArr(newArr);
        toast.info(`${SItem.name} Removed Successfully!`);
    }


    return (
        <div className="group flex items-center gap-3 rounded-xl border border-slate-300 bg-white p-3">

            <img src={item.icon} alt={item.name} className="h-6 w-6 object-contain" />

            <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-900">{item.name}</h3>

                <p className="mt-0.5 text-xs text-slate-500">{item.category}</p>
            </div>

            <button onClick={() => handleCrossButton(item)} className="btn btn-circle btn-ghost btn-sm text-lg text-slate-400 hover:text-red-500 hover:bg-red-50">✕</button>
            
        </div>
    );
};

export default StackItemCard;