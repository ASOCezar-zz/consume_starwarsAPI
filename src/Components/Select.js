import React from 'react';
import DeleteButton from './DeleteButton';
import { SelectList, ContentBox, Option } from '../styles'



function Select({chars, updateChars, selectedChar, setSelectedChar}) {

    return (
        <ContentBox>
        <SelectList value={selectedChar} onChange={event => setSelectedChar(event.target.value)}>
            <Option value=""> Selecione um Personagem </Option>
            {chars.map(char => {
                return <Option value={char.name}> {char.name} </Option>
            })}
        </SelectList>
        <DeleteButton chars={chars} updateChars={updateChars} selectedChar={selectedChar}> Excluir </DeleteButton>
        </ContentBox>
    )
}

export default Select;