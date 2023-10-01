import React from "react";
import { useEffect } from "react";
import { BodyContentDiv } from "../styledComponents/styled";
import uhoh from '../images/uhoh.png'
import uhohaudio from '../audio/uhohaudio.mp3'

export default function Spooky(props) {

    useEffect(() => {
        props.currentPageState.setPageType(`9$&l!2p@K*3^q%Z#7o8*W!m
        `)

        const spookySong = new Audio(uhohaudio)

        spookySong.play()

        return () => {
            spookySong.pause()
            spookySong.currentTime = 0
        }
    }, [])

    return (
        <>
            <BodyContentDiv>
                <h1>What are you trying to do?</h1>
            </BodyContentDiv>
            <BodyContentDiv>
                <img src={uhoh} />
            </BodyContentDiv>
        </>
    )
}