import React from 'react';

import { Card, BtnDelete } from '../styles';

function Cards({chars, deleteChar}){
    return (
        chars.map(char => {
            return (
                <Card>
                    <span style={{color: `${char.eye_color}`}}> Nome: {char.name} </span> 
                    <BtnDelete name={char.name} onClick={deleteChar}> Excluir </BtnDelete>
                </Card>
            )
        })
    )
}


export default Cards