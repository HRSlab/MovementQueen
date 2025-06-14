// This file controls the interactive functionality of the wireframe.

// Wait for the document to be fully loaded before running any scripts.
$(document).ready(function() {
    
    // Initialize all Foundation components (like off-canvas, dropdowns, etc.)
    $(document).foundation();

    // --- Page Navigation Logic ---

    // Get all elements that are designated as "pages".
    const pages = $('.page-content');
    
    // Get all navigation links that should trigger a page change.
    const navLinks = $('.nav-link');

    // Store the Off-Canvas menu element to close it after navigation on mobile.
    const offCanvas = $('#offCanvas');

    /**
     * Shows a specific page section and hides all others.
     * @param {string} pageId - The ID of the page to show (e.g., '#home', '#about').
     */
    function showPage(pageId) {
        // Get the clean page ID by removing the '#' character.
        const cleanPageId = pageId.startsWith('#') ? pageId.substring(1) : pageId;
        
        // Hide all page sections first.
        pages.hide();
        
        // Show only the target page section.
        $('#' + cleanPageId).show();
        
        // Scroll the window to the top to simulate a new page load.
        window.scrollTo(0, 0);

        // If the off-canvas menu is open, close it. This is for mobile navigation.
        if (offCanvas.hasClass('is-open')) {
            offCanvas.foundation('close');
        }
    }

    // --- Event Listeners ---

    // Add a click event listener to every navigation link.
    navLinks.on('click', function(event) {
        // Prevent the default browser action for anchor links (which is to jump to the anchor).
        event.preventDefault(); 
        
        // Get the 'href' attribute from the clicked link, which is the ID of the target page.
        const targetId = $(this).attr('href');
        
        // Call the showPage function to display the correct section.
        showPage(targetId);
    });

    // --- Initial State ---

    // When the site first loads, show the 'home' page by default.
    showPage('#home');

});
