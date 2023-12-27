import { Input } from './Input';
import { Select1 } from './Select1';
import { Select2 } from './Select2';
import { Result } from './Result';

import { useState, useEffect } from 'react';

const options = [
    { value: 'mm', name: 'mm' },
    { value: 'cm', name: 'cm' },
    { value: 'm', name: 'm' },
]

export const Converter = () => {
    const [inputValue, setInputValue] = useState<number | undefined>()
    const [selectFrom, setSelectFrom] = useState<string>('mm');
    const [selectTo, setSelectTo] = useState<string>('mm');
    const [result, setResult] = useState<string>('');

    useEffect(() => {
       function convert(): void  {
            if (inputValue !== undefined) {
                let convertedNum: number = inputValue;

                if (selectFrom === 'cm') {
                    convertedNum *= 10;
                } else if (selectFrom === 'm') {
                    convertedNum *= 1000;
                }

                if (selectTo === 'cm') {
                    convertedNum /= 10;
                } else if (selectTo === 'm') {
                    convertedNum /= 1000;
                }

                setResult(`${convertedNum} ${selectTo}`);
            }
        };

        convert();
    }, [selectFrom, selectTo]);
    
    
    return (
        <div>
            <div className='converter__container'>
                <div>
                    <Input value={inputValue} setInputValue={setInputValue}/>

                    <Result value={result}/>
                </div>

                <div>
                    <Select1 options={options} value={selectFrom} onChange={setSelectFrom}/>

                    <br />

                    <Select2 options={options} value={selectTo} onChange={setSelectTo}/>
                </div>
            </div>
        </div>
    )
}