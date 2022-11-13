import React from 'react';
import Button from './Button';

import '../style/Modal.css';

class ConfirmationModal extends React.Component {
  render() {
    const { wantDelete, close, hapus } = this.props;
    if (!wantDelete) return null;
    
    return (
      <div className="Modal">
        <div className="Modal-Box">
          <h2>Are you sure?</h2>
          <div className="Modal-btn-group">
            <Button text="Delete" variant='danger' action={hapus} />
            <Button text="Cancel" variant='secondary' action={close} />
          </div>
        </div>
      </div>
    )
  }
}

export default ConfirmationModal;