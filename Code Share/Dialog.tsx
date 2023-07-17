import { JSX } from 'react';
import './Dialog.css';




 function Dialog(): JSX.Element {

  return (
    <div className="dialog" tabIndex={-1}>
      <div>
        <div>
          <div className="modal-header">
            <h5>Dialog title</h5>
            <button type="button" className="btn-close"></button>
          </div>
          <hr/>
          <div className="dialogbody">
            <p>Dialog body text goes here.</p>
          </div>
          <hr/>
          <div>
            <button className="btn btn-secondary dialogbtn" data-bs-dismiss="modal">Close</button>
            <button className="btn btn-primary dialogbtn">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;