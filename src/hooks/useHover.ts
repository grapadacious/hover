import { useContext } from 'react';
import HoverContext from '../contexts/HoverContext';

const useHover = () => {
    return useContext(HoverContext);
};

export default useHover;