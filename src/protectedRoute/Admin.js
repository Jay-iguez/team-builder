import React from "react";
import { useEffect } from "react";
import { BodyContentDiv } from "../styledComponents/styled";

export default function Admin (props) {

    useEffect(() => {
        props.currentPageState.setPageType('Adminstration Page')
    }, [])

    return (
        <BodyContentDiv>
            <h1>Welcome Authorized Doggos!</h1>
            <p>Our profits are up and it's all thanks to the compooter dogs who help keep our website running smoothly.</p>
        </BodyContentDiv>
    )
}