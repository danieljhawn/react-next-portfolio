import React from 'react'

const linkStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    // fontSize: '30px',
    letterSpacing:  '7px',
    wordSpacing: '2px',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontStyle: 'normal',
    textTransform: 'uppercase',
}

function Footer() {
    return (
        <div style={linkStyle} className="fixed-bottom bg-dark text-white text-center p-2 pt-6">
            <p className="pt-6">copyright &copy; 2020 Daniel Hawn</p>
        </div>
    )
}

export default Footer
