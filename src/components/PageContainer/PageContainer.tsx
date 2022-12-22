import React from 'react';
import { useViewportWidth } from '../../hooks/useViewportWidth';
import '../../styles/global.css';

interface Props {
    children: React.ReactNode;
}

export const PageContainer: React.FC<Props> = ({ children }) => {
    const { isMobile } = useViewportWidth();
    console.log(isMobile);

    return <div className="page-container">{children}</div>;
};
