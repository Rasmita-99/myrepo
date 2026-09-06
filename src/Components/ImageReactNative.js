import React, { useState, useEffect } from 'react';
import Layouts from "./Layouts.json";

function MyComponent() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % Layouts.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentImageIndex]);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
                {Layouts[currentImageIndex] &&
                    Layouts[currentImageIndex].boxes.slice(0, 2).map((image, index) => (
                        <img
                            key={index}
                            src={image.dirPath + image.fileNm}
                            alt={image.fileNm}
                            style={{ width: "50%", height: image.h }}
                        />
                    ))
                }
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {Layouts[currentImageIndex] &&
                    Layouts[currentImageIndex].boxes.slice(2, 4).map((image, index) => (
                        <img
                            key={index}
                            src={image.dirPath + image.fileNm}
                            alt={image.fileNm}
                            style={{ width: "50%", height: image.h }}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default MyComponent;