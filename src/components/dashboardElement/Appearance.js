import React from 'react'

const Appearance = () => {
    const fontSize = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    return ( <
        >
        <
        p >
        <
        h4 > Appearance < /h4> <
        /p> <
        div className = 'fonts' >
        Default font { ' ' } <
        select >
        <
        option > Sans serif < /option> <
        option > Fantasy < /option> <
        option > Comic sans < /option> <
        option > Arial < /option> <
        /select> <
        /div>

        <
        div >
        Size { ' ' } <
        select > {
            fontSize.map((item) => ( <
                option key = { item } > { item } < /option>
            ))
        } <
        /select> <
        /div>

        <
        div >
        <
        button onClick = {
            () => {
                alert('Change Colors...')
            }
        } >
        Colors <
        /button> <
        /div>

        <
        div >
        <
        button onClick = {
            () => {
                alert('Advance settings....')
            }
        } >
        Advance <
        /button> <
        /div> <
        />
    )
}

export default Appearance