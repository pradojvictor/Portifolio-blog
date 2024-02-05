import { Link as LinkRoute } from "react-router-dom";

interface LinkProps {
    name?: string;
    redirect: string;
    classname?: string;
    onClick?: () => void;
    target?: string;
    children?: React.ReactNode;
}

export default function Link(props: LinkProps) {
    return (
        <LinkRoute
            to={props.redirect}
            className={props.classname}
            onClick={props.onClick}
            target={props.target}
        >
            {props.name}{props.children}
        </LinkRoute>
    )
}