import Navbar from '@components/Navbar/Navbar'
import React from 'react'

const Layout:React.FC = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            
        </div>
    )
}

export default Layout
