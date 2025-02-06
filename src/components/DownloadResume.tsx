import React from "react";

const DownloadResume: React.FC = () => {
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf"; // Adjust if your file is in a different location
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "My_Resume.pdf"; // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="download-btn">
      Download Resume
    </button>
  );
};

export default DownloadResume;
