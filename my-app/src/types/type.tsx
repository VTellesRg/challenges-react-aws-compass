
type buttonProps = {
    title: string;
};

type inputProps = {
    placeholder: string;
    type: string;
    isDate?: boolean;
    value: string;
    onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
type validateProps = {
    name: string;
    email: string;
    username: string;
    birth: string;
    password: string;
    confirmPassword: string;
}

export type { buttonProps, inputProps, validateProps };