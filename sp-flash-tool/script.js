function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    // Set Windows tab as default active
    showTab('windows');
    
    // Add click handlers for download tracking (optional)
    const downloadButtons = document.querySelectorAll('button[onclick*="window.open"]');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Download initiated:', this.textContent);
        });
    });
});