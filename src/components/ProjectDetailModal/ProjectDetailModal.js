import React from 'react';
import './ProjectDetailModal.css'

const ProjectDetailModal = ({ project }) => {

    const { modalId, projectName, projectType, details } = project;

    return (
        <div className="modal fade" id={`${modalId}`} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-custom">
                    <div className="modal-header">
                        <h3 className="modal-title" id={`${modalId}Label`}><h3 className="color-primary">{projectName}</h3>
                            <h5 className="color-primary"> ( {projectType} )</h5></h3>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ul>
                            {
                                details.map(detail => <li>{detail}</li>)
                            }
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn-custom-secondary py-2 px-4" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailModal;