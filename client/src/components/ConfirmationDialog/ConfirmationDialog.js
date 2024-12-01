import "./confirmationDialog.css";

const ConfirmationDialog = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="confirmation-dialog">
      <div className="confirmation-dialog__container">
        <h2 className="confirmation-dialog__title">{title}</h2>
        <p className="confirmation-dialog__message">{message}</p>
        <div className="confirmation-dialog__buttons">
          <button
            className="confirmation-dialog__button confirmation-dialog__cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="confirmation-dialog__button confirmation-dialog__confirm-button"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
