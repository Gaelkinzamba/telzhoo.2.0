import React from 'react'

const Tabs = () => {
    return ( <
        >
        <
        p >
        <
        h4 > Tabs < /h4> <
        /p> <
        p >
        <
        input type = 'checkbox'
        onClick = {
            () => {
                alert('Setting Button Clicked')
            }
        }
        />Ctrl+Tab cycles through tabs in recently used order <
        /p>

        <
        p >
        <
        input type = 'checkbox'
        onClick = {
            () => {
                alert('Setting Button Clicked')
            }
        }
        /> Open links in tabs instead of new windows <
        /p>

        <
        p >
        <
        input type = 'checkbox'
        onClick = {
            () => {
                alert('Setting Button Clicked')
            }
        }
        />Warn you when closing multiple tabs <
        /p>

        <
        p >
        <
        input type = 'checkbox'
        onClick = {
            () => {
                alert('Setting Button Clicked')
            }
        }
        />When you open a link in a new tab, switch to it immediately <
        /p> <
        />
    )
}

export default Tabs