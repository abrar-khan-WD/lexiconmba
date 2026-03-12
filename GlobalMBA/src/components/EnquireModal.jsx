import React, { useEffect } from "react";
import "./EnquireModal.css";

export const EnquireModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement("script");
      script.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
      script.async = true;
      script.id = "npf-widget-script";
      document.body.appendChild(script);

      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="enquire-modal-overlay" onClick={onClose}>
      <div className="enquire-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="enquire-modal-close" onClick={onClose}>
          ✕
        </button>
        <div className="enquire-modal-body">
          <h2 className="enquire-modal-heading">Admission Enquiry Form</h2>
          <div
            className="npf_wgts"
            data-height="500px"
            data-w="fd37411573d119bbd2e5c2b82759603e"
          ></div>
        </div>
      </div>
    </div>
  );
};
