import React from 'react';
import { AtSymbolIcon, CakeIcon, FingerPrintIcon, LockClosedIcon, ShieldCheckIcon, UserIcon } from '@heroicons/react/24/solid'
import { inputProps } from '../types/type';


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
const CustomInput = ({ placeholder, type, isDate, value, onChangeText }: inputProps) => {

    const [style__, setStyle] = React.useState<string>('Input__Container')
    const [type__, setType] = React.useState<string>(type as string);
    const [value__, setValue] = React.useState<string>(value as string);

    const InFocus = () => {
        setStyle('Input__Container--focus')
        if (isDate === true) {
            setType('date')
        }
    }
    const OutFocus = () => {
        setStyle('Input__Container')
        if (isDate === true) {
            let formattedDate = value__.split('-').reverse().join('/')
            setValue(formattedDate)
            setType('text')
        }
    }

    return (
        <div className={style__}>
            <input
                className='input'
                value={value__}
                type={type__}
                placeholder={placeholder}
                onFocus={() => InFocus()}
                onBlur={() => OutFocus()}
                onChange={(e) => {
                    onChangeText(e);
                    setValue(e.target.value)}}
                />
            {getIcon(placeholder)}
        </div>
    );
};

export default CustomInput;