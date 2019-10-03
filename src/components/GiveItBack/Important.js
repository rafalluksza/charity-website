import React from 'react'


const Important =({page})=> {

    return (
        <div className='important'>
            <div className='important-text'>
                <h2>Ważne!</h2>
                { page === 1 && <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>}
                { page === 2 && <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>}
                { page === 3 && <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej ogranizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu pomocy.</p>}
                { page === 4 && <p>Podaj adres oraz termin odbioru rzeczy.</p>}
            </div>
        </div>
    )
}

export default Important;