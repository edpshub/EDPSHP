// Function to initialize the work controls after they have been loaded
function initializeWorkControls() {
    const searchInput = document.getElementById('search-input');
    const tagButtons = document.querySelectorAll('.tag-btn');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');
    const worksList = document.getElementById('works-list');
    
    // Check if controls exist before proceeding
    if (!searchInput || !tagButtons.length || !worksList) {
        return;
    }
    
    const workItems = worksList.querySelectorAll('.work-item');
    let selectedTags = [];

    // --- Event Listeners ---
    searchInput.addEventListener('input', filterWorks);
    tagButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const tag = button.dataset.tag;
            if (selectedTags.includes(tag)) {
                selectedTags = selectedTags.filter(t => t !== tag);
            } else {
                selectedTags.push(tag);
            }
            filterWorks();
        });
    });

    gridViewBtn.addEventListener('click', () => {
        worksList.classList.remove('list-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    });

    listViewBtn.addEventListener('click', () => {
        worksList.classList.add('list-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    });

    // --- Filtering Function ---
    function filterWorks() {
        const searchText = searchInput.value.toLowerCase();
        workItems.forEach(item => {
            const title = item.querySelector('h4').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            const itemTags = item.dataset.tags.toLowerCase().split(' ');
            const textMatch = title.includes(searchText) || description.includes(searchText);
            const tagsMatch = selectedTags.every(tag => itemTags.includes(tag.toLowerCase()));

            if (textMatch && tagsMatch) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }
}

// Main function to load content based on the selected year
function loadContent(year) {
    const placeholder = document.getElementById('works-placeholder');
    let contentHTML = '';

    // Choose which data to load based on the year
    if (year === '2024' && typeof worksData2024 !== 'undefined') {
        contentHTML = worksData2024;
    } else if (year === '2025' && typeof worksData2025 !== 'undefined') {
        contentHTML = worksData2025;
    } else {
        placeholder.innerHTML = `<p style="color:yellow; text-align:center;">${year}年度のデータが見つかりません。</p>`;
        return;
    }

    placeholder.innerHTML = contentHTML;
    
    // After loading the content, initialize the controls within it
    initializeWorkControls();
}

// Add event listeners for the year selector buttons
document.addEventListener('DOMContentLoaded', () => {
    const yearButtons = document.querySelectorAll('.year-btn');
    
    yearButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            yearButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
            
            const selectedYear = button.dataset.year;
            loadContent(selectedYear);
        });
    });

    // Load the default year's content on initial page load (e.g., 2025)
    loadContent('2025');
});