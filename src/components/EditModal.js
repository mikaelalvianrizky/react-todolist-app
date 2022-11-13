import React from 'react';
import Button from './Button';

import '../style/Modal.css';

class EditModal extends React.Component {
  render() {
    const {edit, close, data, change, save } = this.props;
    if(!edit) return null;
    
    return (
      <div className="Modal">
        <div className="Modal-Box">
          <h2>Edit Task</h2>
          <div className="Modal-Input">
            <input type="text" value={data.title} onChange={change}/>
          </div>
          <div className="Modal-btn-group">
            <Button text="Save" variant='success' action={save} />
            <Button text="Cancel" variant='secondary' action={ close } />
          </div>
        </div>
      </div>
    )
  }
}

export default EditModal;