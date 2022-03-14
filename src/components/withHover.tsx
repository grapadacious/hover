import React from 'react';
import { HoverContainer } from '.';

const withHover = (WrappedComponent: React.ComponentType<{}>) => {
    const WithHover: React.FunctionComponent = (props) => (
        <HoverContainer>
            <WrappedComponent {...props} />
        </HoverContainer>
    );

    WithHover.displayName = `WithHover(${WrappedComponent.displayName})`;

    return WithHover;
};

export default withHover;