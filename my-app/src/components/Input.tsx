
import React from 'react';
import { AtSymbolIcon, CakeIcon, FingerPrintIcon, LockClosedIcon, ShieldCheckIcon, UserIcon } from '@heroicons/react/24/solid'

type Props = {
    placeholder: string;
    type: string;
    isDate?: boolean;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const getIcon = (icon: string) => {
    switch (icon) {
        case 'Nome':
            return <UserIcon className="input__icon" />
        case 'Email':
            return <AtSymbolIcon className="input__icon" />
        case 'Usuário':
            return <FingerPrintIcon className="input__icon" />
        case 'Nascimento':
            return <CakeIcon className="input__icon" />
        case 'Senha':
            return <LockClosedIcon className="input__icon" />
        case 'Confirmar Senha':
            return <ShieldCheckIcon className="input__icon" />
        default:
            return <></>
    }


}
const CustomInput = ({ placeholder, type, isDate, value, onChange }: Props) => {

    const [style, setStyle] = React.useState<string>('Input__Container')
    const [isType, setIsType] = React.useState<string>(type)
    const InFocus = () => {
        setStyle('Input__Container--focus')
        if (isDate) setIsType('date')
    }
    const OutFocus = () => {
        setStyle('Input__Container')
        if (isDate) {
            // let tempDate = value;
            // tempDate = tempDate?.split('-').reverse().join('-');
            // console.log(tempDate);
            // value = tempDate;
            setIsType('text')
            
        }
    }

    return (
        <div className={style}>
            <input className='input'
                type={isType}
                placeholder={placeholder}
                onFocus={() => InFocus()}
                onBlur={() => OutFocus()}
                value={value}
                onChange={onChange} />
            {getIcon(placeholder)}
        </div>
    );
};

export default CustomInput;

