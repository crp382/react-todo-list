import React from 'react';

function Header() {
    const headerStyle = {
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '15px'
      }

    return(
        <header>
            <h1 style={headerStyle}>Todo List</h1>
        </header>
    )
}

export default Header;