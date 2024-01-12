import { Link as LinkRoute } from "react-router-dom";

interface LinkProps {
    name?: string;
    redirect: string;
    classname?: string;
}

export default function Link(props: LinkProps) {
    return (
        <LinkRoute
            to={props.redirect}
            className={props.classname}
        >
            {props.name}
        </LinkRoute>
    )
}