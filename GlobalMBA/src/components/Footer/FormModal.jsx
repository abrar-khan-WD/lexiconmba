import { useEffect, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useModal } from "./ModalContext";

const FormModal = () => {
const { isOpen, closeModal } = useModal();
const [height, setHeight] = useState("500px");
const [scriptLoaded, setScriptLoaded] = useState(false);

// Load the form script immediately when component mounts
useEffect(() => {
  const loadFormScript = () => {
    // Check if script already exists and is loaded
    const existing = document.querySelector(
      'script[src="https://widgets.in5.nopaperforms.com/emwgts.js"]'
    );

    if (existing) {
      // Script already exists, check if it's loaded
      if (window.npfWidgets && window.npfWidgets.init) {
        setScriptLoaded(true);
        // Initialize the widget if modal is open
        if (isOpen) {
          setTimeout(() => {
            if (window.npfWidgets && window.npfWidgets.init) {
              window.npfWidgets.init();
            }
          }, 100);
        }
      } else {
        // Wait for it to load
        existing.onload = () => {
          setScriptLoaded(true);
          if (isOpen) {
            setTimeout(() => {
              if (window.npfWidgets && window.npfWidgets.init) {
                window.npfWidgets.init();
              }
            }, 100);
          }
        };
        existing.onerror = () => console.error('Failed to load form script');
      }
      return;
    }

    // Create and load new script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
    script.async = true;

    script.onload = () => {
      setScriptLoaded(true);
      // Initialize the widget after script loads
      setTimeout(() => {
        if (window.npfWidgets && window.npfWidgets.init) {
          window.npfWidgets.init();
        }
      }, 100);
    };

    script.onerror = () => {
      console.error('Failed to load form script');
      setScriptLoaded(false);
    };

    document.head.appendChild(script);
  };

  loadFormScript();
}, []); // Empty dependency array - only run once on mount

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 1500) {
        setHeight("400px");
      } else {
        setHeight("500px");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

return (
<Modal show={isOpen} onClose={closeModal} size="lg">
<ModalHeader>
<div className="flex w-full flex-col items-center gap-2 md:flex-row md:justify-between">
<div className="flex flex-col items-center gap-2 md:flex-row">
<img src="" alt="Lexicon Global MBA" className="h-12" />
<div className="text-center md:text-left">
<h6 className="text-md md:text-sm font-semibold">Apply Now for Lexicon</h6>

</div>
</div>
<button
type="button"
onClick={closeModal}
className="mt-2 rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 transition hover:bg-gray-100 md:mt-0 close_btn_modal"
aria-label="Close"
>
✕
</button>
</div>
</ModalHeader>
<ModalBody className="p-0">
  <div
    className="npf_wgts"
    data-height={height}
    data-w="fd37411573d119bbd2e5c2b82759603e"
  ></div>
</ModalBody>
</Modal>
);
};
 
export default FormModal;