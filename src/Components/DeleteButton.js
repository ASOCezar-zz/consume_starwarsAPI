import React from 'react';
import { Button } from '../styles'




function DeleteButton({chars, updateChars, selectedChar}){
    return(
        <Button onClick={()=>{
            const name = selectedChar
            updateChars(chars.filter(char => char.name !== name))
            }}> Excluir </Button>
    )
}

export default DeleteButton