import React from 'react';
import './ProgressBar.css'

const ProgressBar = ({ done, technologyName }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 1000);
    return (
        <div>

            <div className="progress">
                <h6 className="progress-name d-flex justify-content-center align-items-center h-100 text-white">{technologyName}</h6>
                <div className="w-100">
                    <div className="progress-done d-flex justify-content-center align-items-center h-100" style={style}>
                        <h6>{done}%</h6>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;