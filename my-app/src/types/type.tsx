
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

type PostType = {
    _id: string | null,
    user: UserType,
    post_date: string,
    description: string,
    likes: number,
    comments: Array<{
        user: string,
        comment: string
    }>,
    url_imagem: string
}

type UserType = {
    name: string,
    user: string,
    birthdate: string,
    email: string,
    password: string,
    profile_photo: string
}

type CommentType = {
    post_id: string,
    user: string,
    comment: string
}

export type { buttonProps, inputProps, PostType, UserType, CommentType };