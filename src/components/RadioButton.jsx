const RadioButton = ({ label, value, checked, onChange }) => {
    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="radio"
                value={value}
                checked={checked === value}
                onChange={() => onChange(value)}
                className="hidden"
            />
            <span
                className={`w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors ${
                    checked === value ? 'border-blue-500 bg-blue-500' : 'border-gray-300 bg-white'
                }`}
            >
        {checked === value && (
            <span className="w-3 h-3 rounded-full bg-white"></span>
        )}
      </span>
            <span className="ml-2 text-sm">{label}</span>
        </label>
    );
};

export default RadioButton