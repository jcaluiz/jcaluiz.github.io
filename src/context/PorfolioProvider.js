import React, { useState } from 'react';
// import PropType from 'prop-types';
import PortfolioContext from './PortfolioContext';

export default function PortfolioProvider({ children }) {
    const [activeMenu, setActiveMenu] = useState(false);

    // const sinalActive = () => {
    //     setActiveMenu((state) => !state);
    //     console.log(activeMenu);
    // }

    const context = {activeMenu, setActiveMenu};
    
    return (
        <PortfolioContext.Provider value={context}>
            {children}
        </PortfolioContext.Provider>
    );
}

// RecipeProvider.propTypes = {
//   children: PropType.node.isRequired,
// };
