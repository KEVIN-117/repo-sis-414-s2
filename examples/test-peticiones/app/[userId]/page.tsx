import React from 'react'
interface IProps {
    params: {
        userId: string
    }
}
function page(props: IProps) {
    console.log(props);

    return (
        <div>{props.params.userId}</div>
    )
}

export default page