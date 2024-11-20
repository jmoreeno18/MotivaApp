import { useState } from "react"
import { Messages } from "./Messages"
import './styles/MotivaApp.css'

export const MotivaApp = () => {
    const [phrase, setPhrase] = useState("Haz click en el boton para generar una frase aleatoria")

    const indiceAleatorio = Math.floor(Math.random() * Messages.length)

    const handleClick = () => {
        setPhrase(Messages[indiceAleatorio])
    }
    return (
        <>
            <h1>Frase aleatoria</h1>
            <p>{phrase}</p>
            <button onClick={handleClick}>Frase aleatoria</button>
        </>
    )    
}