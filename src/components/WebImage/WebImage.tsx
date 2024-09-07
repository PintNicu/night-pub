import React from 'react';

const ImageDisplay: React.FC = () => {
    const imagePath = require('../../Images/GalleryImages/316430565_678047767365026_8113960512345367173_n.jpg');

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
                src={imagePath}
                alt="Zepelin 1929 Interior"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
        </div>
    );
};

export default ImageDisplay;