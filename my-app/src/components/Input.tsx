
import React from 'react';
import { AtSymbolIcon, CakeIcon, FingerPrintIcon, LockClosedIcon, ShieldCheckIcon, UserIcon } from '@heroicons/react/24/solid'

type Props = {
    placeholder: string;
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
const CustomInput = ({ placeholder }: Props) => {

    const [style, setStyle] = React.useState<string>('Input__Container')

    const InFocus = () => {
        setStyle('Input__Container--focus')
    }
    const OutFocus = () => {
        setStyle('Input__Container')
    }

    return (
        <div className={style}>
            <input type="text" placeholder={placeholder} onFocus={() => InFocus()} onBlur={()=> OutFocus()} />
            {getIcon(placeholder)}
        </div>
    );
};

export default CustomInput;