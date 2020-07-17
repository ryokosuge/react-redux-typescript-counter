import React from "react"

type Props = {
    count: number;
};

export const Counter: React.FunctionComponent<Props> = ({
    count
}) => {
    return (
        <div>
            <p>{count}</p>
        </div>
    )
};