import React, { useState } from 'react';
import { Icon } from '@chakra-ui/react';
import { FiMaximize2, FiMinimize2 } from 'react-icons/fi';

function FullscreenButton() {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }

        setIsFullscreen(!isFullscreen);
    };

    return (
        <button onClick={toggleFullscreen}>
            <Icon as={isFullscreen ? FiMinimize2 : FiMaximize2} />
        </button>
    );
}

export default FullscreenButton;
