import React from 'react';
// import PropType from 'prop-types';
import PortfolioContext from './PortfolioContext';

export default function PortfolioProvider({ children }) {
    const context = {};
    
    return (
        <PortfolioContext.Provider value={context}>
            {children}
        </PortfolioContext.Provider>
    );
}

// RecipeProvider.propTypes = {
//   children: PropType.node.isRequired,
// };
