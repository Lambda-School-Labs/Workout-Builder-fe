import React, { useEffect, useRef } from "react";
import { connect } from 'react-redux';
import Modal from 'react-modal';

const AssignProgram = (props) => {
    Modal.setAppElement('#root');

    const closeModal = (e) => {
        e.stopPropagation();
        props.ToggleAssignProgramModal(false);
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
            <Modal isOpen={props.AssignProgramModal} 
                className="assign-modal"
                overlayClassName="assign-overaly"
                shouldCloseOnOverlayClick={true}
                onRequestClose={closeModal}
                parentSelector={() => document.body.querySelector(`#assign-div-${props.id}`)}
                >
                    <div ref={wrapperRef} className="assign-internal">
                        <div className="assign-header">
                            <div className="assign-header-clients">Clients</div>
                            <div className="assign-header-teams">Teams</div>
                        </div>
                        <div className="assign-clients">

                        </div>
                        <div className="assign-button-div">
                            <button className="assign-button" onClick={closeModal}>Assign to client</button>
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
  )(AssignProgram);