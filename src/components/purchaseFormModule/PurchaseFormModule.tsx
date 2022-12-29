import React, { useState } from 'react';
import './purchaseFormModule.scss';
import toggleElementDisplay from '../../helperFunctions/displayToggler';

function PurchaseFormModule() {
  const [displayed, setDisplayed] = useState(false);
  return (
    <div className="pchs-module-overlay hidden dissolved">
      <div className="pchs-module">
        <button
          className="pchs-module__close-btn"
          onClick={() => {
            toggleElementDisplay('.pchs-module-overlay');
          }}
        ></button>
        <div></div>
      </div>
    </div>
  );
}

export default PurchaseFormModule;
