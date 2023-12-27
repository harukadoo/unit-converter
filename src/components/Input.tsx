type InputProps = {
    value: number | undefined;
    setInputValue: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const Input = ({ value, setInputValue }: InputProps) => {
    return <input
        type='number'
        placeholder='enter value'
        value={value || ''}
        onChange={(e) => setInputValue(parseFloat(e.target.value))} 
        />
}