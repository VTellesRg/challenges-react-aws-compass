type Props = {
    title: string;
};

export default function Button({title}:Props) {
    return (
        <button type="submit" className="button">
        {title}
        </button>
    );
    }
