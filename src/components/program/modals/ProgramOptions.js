import React, { useState, useEffect, useRef } from "react";
import { connect } from 'react-redux';
import Modal from 'react-modal';

const ProgramOptions = (props) => {
    Modal.setAppElement('#root');

    const closeModal = (e) => {
        e.stopPropagation();
        props.ToggleProgramOptionsModal(false);
    }

    function useOutsideAlerter(ref) {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
            closeModal(event);
            }
        }

        useEffect(() => {
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            };
        });
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return(
            <Modal isOpen={props.ProgramOptionsModal} 
                className="options-modal"
                overlayClassName="options-overaly"
                // style= {customStyles}
                shouldCloseOnOverlayClick={true}
                onRequestClose={closeModal}
                parentSelector={() => document.body.querySelector(`#options-div-${props.id}`)}
                // parentSelector={() => document.body.querySelector('.main-title')}
                >
                    <div ref={wrapperRef}>
                    <div className="options-element">
                        <div className="options-left">
                            <img src="https://i.imgur.com/L3ARWfG.png"></img>
                        </div>
                        <div className="options-right">
                            <p>Edit</p>
                        </div>
                        <div className="options-x">
                            <img src="https://i.imgur.com/XjN61mQ.png" onClick={closeModal}></img>
                        </div>
                    </div>
                    <div className="options-element">
                        <div className="options-left">
                            <img src="https://i.imgur.com/DZgRwQr.png"></img>
                        </div>
                        <div className="options-right">
                            <p>Duplicate</p>
                        </div>
                    </div>
                    <div className="options-element">
                        <div className="options-left">
                            <img src="https://i.imgur.com/xsHoyAy.png"></img>
                        </div>
                        <div className="options-right">
                            <p>Delete Program</p>
                        </div>
                        {/* <button onClick={() => console.log(compRef.current)}>focus</button> */}
                    </div>
                    </div>
            </Modal>
    )
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
    updates: state.updates,
});
  
export default connect(
    mapStateToProps,
  )(ProgramOptions);