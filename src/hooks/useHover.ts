import { useContext } from 'react';
import { HoverContext } from '../contexts';

const useHover = () => {
    return useContext(HoverContext);
};

export default useHover;