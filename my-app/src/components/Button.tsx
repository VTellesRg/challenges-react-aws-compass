import { buttonProps } from "../types/type"; 

export default function Button({title}:buttonProps) {
    return (
        <button type="submit" className="button">
        {title}
        </button>
    );
    }
