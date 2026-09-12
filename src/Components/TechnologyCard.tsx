import type { TechnologyType } from "../TechnologyType";


interface TechnologyCardProps {
    technology: TechnologyType
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
    return (
        <div>
            <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

                {/* Icon + Badge */}
                <div className="flex items-center justify-between">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-8 h-8 object-contain"
                    />

                    <span className={`${technology.colorCode} text-white text-xs font-semibold px-3 py-1.5 rounded-full`}>{technology.badge}</span>

                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-slate-900 mt-4">
                    {technology.name}</h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-2 leading-6">{technology.description}</p>

                {/* Category + Difficulty + Rating */}
                <div className="flex items-center justify-between gap-2 mt-5 text-xs">

                    <span className="font-medium text-slate-700 border py-1 px-2 border-gray-300 rounded-md bg-gray-100">{technology.category}</span>

                    <span className="text-gray-700 font-medium">{technology.difficulty}</span>

                    <span className="font-semibold text-slate-900">⭐  {technology.rating}</span>
                    {/* span er defaul size 12px */}

                </div>

                {/* Add to Stack Button*/}
                <button className="btn btn-neutral w-full mt-5 rounded-xl text-white">Add to Stack</button>

            </div>
        </div>
    );
};

export default TechnologyCard;