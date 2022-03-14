import React, { useState } from 'react';
import HoverContext from '../contexts/HoverContext';

const HoverContainer: React.FunctionComponent = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(true)}>
            <HoverContext.Provider value={isHovered}>
                {children}
            </HoverContext.Provider>
        </div>
    );
};

export default HoverContainer;