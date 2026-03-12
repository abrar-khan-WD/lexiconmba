import React, { useEffect } from "react";

export const NpfWidget = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="">
      <div
        className="npf_wgts"
        data-height="500px"
        data-w="fd37411573d119bbd2e5c2b82759603e"
      ></div>
    </div>
  );
};