import { parseNumber } from '@/util';

export const Stat = ({ title, total }: { title: string, total: number }) => {

    const amt = parseNumber(total);

    return(
        <div className="bg-white rounded-lg p-6 text-center">
            <h6 className="text-base-grey text-xs font-medium mb-2">{title}</h6>
            <strong className="font-semibold text-2xl">{amt}</strong>
        </div>
    );
};
