import React from 'react'
import RowItem from "./RowItem";


const StepsRow = () => {

    return (
        <div className='stepsRow'>
            <RowItem name={'Icon-1'} title={'Wybierz rzeczy'} p={'ubrania, zabawki, sprzęt i inne'}/>
            <RowItem name={'Icon-2'} title={'Spakuj je'} p={'skorzystaj z worków na śmieci'}/>
            <RowItem name={'Icon-3'} title={'Zdecyduj komu chcesz pomóc'} p={'wybierz zaufane miejsce'}/>
            <RowItem name={'Icon-4'} title={'Zamów kuriera'} p={'kurier przyjedzie w dogodnym terminie'}/>
        </div>
    )
}

export default StepsRow;