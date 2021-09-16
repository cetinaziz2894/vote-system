import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { deleteItem, setAlert } from "../actions";
import "../styles/modal.css";

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteClick: (id) => dispatch(deleteItem(id)),
        onChangeAlert: (alert) => dispatch(setAlert(alert)),
    }
}

const Modal = ({id, name, show, onClose, onDeleteClick,onChangeAlert, alert}) => {
    const deleteItem = (id) => {
        onDeleteClick(id);
        onClose();
        onChangeAlert({val:!alert.val, name:name, type:'removed.'})
    }

  const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
        onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
        document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Remove Link</h4>
            <h4 className="modal-close" onClick={onClose}>x</h4>
          </div>
          <div className="modal-body">
              <h2>Do you want to remove:</h2>
              <h3>{name.toUpperCase()}</h3>
          </div>
          <div className="modal-footer">
            <button onClick={() => deleteItem(id)} className="button">
              OK
            </button>
            <button onClick={onClose} className="button">
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};
export default connect(null, mapDispatchToProps)(Modal);
