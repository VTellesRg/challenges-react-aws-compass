
import React from 'react';
import icon1 from './../assets/images/Vector.png';
import icon2 from './../assets/images/Vector(1).png';
import icon3 from './../assets/images/Vector(2).png';
import icon4 from './../assets/images/Vector(3).png';
import icon5 from './../assets/images/Vector(4).png';
import icon6 from './../assets/images/Vector(5).png';

alert(icon1)
type Props = {
    placeholder: string;
    onFocus: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const getIcon = (icon: string) => {
    switch (icon) {
        case 'Nome':
            return <img src={icon1}  className="input__icon"/>
        case 'Email':
            return <img src={icon2} className="input__icon"/>
        case 'Usuário':
            return <img src={icon3} className="input__icon"/>
        case 'Nascimento':
            return <img src={icon4} className="input__icon"/>
        case 'Senha':
            return <img src={icon5} className="input__icon"/>
        case 'Confirmar Senha':
            return <img src={icon6} className="input__icon"/>
        default:
            return <></>
    }

}
const CustomInput = ({  onFocus, placeholder }: Props) => {
    return (
        <div className='Input__Container'>
            <input type="text" placeholder={placeholder} onFocus={onFocus} />
            {getIcon(placeholder)}
        </div>
    );
};

export default CustomInput;