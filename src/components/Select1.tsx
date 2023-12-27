type Option = {
    value: string;
    name: string;
};

type SelectProps = {
    options: Option[];
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
};

export const Select1 = ({ options, value, onChange }: SelectProps) => {
    return (
        <select name='select1' id='select1' onChange={(e) => onChange(e.target.value)} value={value}>
            {options.map((option: Option) => (
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}