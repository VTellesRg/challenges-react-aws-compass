
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


export type { buttonProps, inputProps };