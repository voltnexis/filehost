document.addEventListener('DOMContentLoaded', function() {
    // Basic download button click handler for demo
    const downloadBtn = document.getElementById('primary-download');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // The onclick in HTML will handle the actual download
            console.log("Starting download of SamFw Tool v5.1...");
        });
    }

    // Optional: Tooltip/hover effects could be added here
});