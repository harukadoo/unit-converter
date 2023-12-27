type Option = {
    value: string;
    name: string;
};

type SelectProps = {
    options: Option[];
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
};

export const Select2 = ({ options, value, onChange }: SelectProps) => {
    return (
        <select name='select2' id='select2' onChange={(e) => onChange(e.target.value)} value={value}>
            {options.map((option: Option) => (
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}