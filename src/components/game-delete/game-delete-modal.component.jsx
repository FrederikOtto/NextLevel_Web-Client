import React from 'react'
import './game-delete.styles.scss'
import DeleteGame from "./game-delete.component.jsx";

export const DeleteModal= ({showDelete, closeDelete, state}) => {

    return (
        <div className="modal-wrapper"
             style={{
                 transform: showDelete ? 'translateY(0vh)' : 'translateY(-100vh)',
                 opacity: showDelete ? '1' : '0'
             }}
        >
            <div className="modal-header">
                <span onClick={closeDelete} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <div className="headline">Are you sure you want to delete this game?</div>
                    <DeleteGame state={state} close={closeDelete}/>
                </div>
                <div className="modal-footer">
                    <button onClick={closeDelete} className="btn-small btn-cancel">Cancel</button>
                </div>
            </div>
        </div>
    )
}