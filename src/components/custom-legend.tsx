interface LegendPayload {
  value: string;
  color: string;
}

interface CustomLegendProps {
  payload?: LegendPayload[];
}

const CustomLegend = ({ payload }: CustomLegendProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-4">
            {payload?.map((entry, index) => (
                <div key={`legend-${index}`} className="flex items-center gap-2">
                    <div 
                        className="w-3 h-3 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-slate-300 text-xs truncate">
                        {entry.value}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default CustomLegend