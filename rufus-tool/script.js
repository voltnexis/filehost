document.addEventListener('DOMContentLoaded', function() {
    // Basic download button click handler for demo
    const downloadBtn = document.getElementById('primary-download');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            alert("Starting download of Rufus 4.11...");
            // In a real scenario, this would initiate the file download
        });
    }

    // Optional: Tooltip/hover effects could be added here
});
