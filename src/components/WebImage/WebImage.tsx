import React from 'react';
import cocktailsPouring from '../Images/GalleryImages/316430565_678047767365026_8113960512345367173_n.jpg';

const WebImage: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
                src={cocktailsPouring}
                alt="Zepelin 1929 cocktails"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
        </div>
    );
};

export default WebImage;