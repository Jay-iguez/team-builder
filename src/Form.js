import { useState } from "react"
import styled from 'styled-components'




export default function Form(props) {

    const { members } = props

    return (
        <>
        <h2>Our Team members: </h2>
        {
           members.map(member => {
              for (const dog of Object.values(member)) {
                return <p>{dog}</p>
              } 
        }) 
        }
        </>
    )
}