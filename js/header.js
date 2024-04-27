let sidebar = document.querySelector('.top-bar-dropdown');
const toggleBar = document.querySelector('.bar');
let condition = true;

toggleBar.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents the click event from reaching the body
    toggleSidebar();
});

// Add an event listener to the body
document.body.addEventListener('click', (e) => {
    // Check if the clicked element is not inside the sidebar
    if (!sidebar.contains(e.target) && condition === false) {
        toggleSidebar();
    }
});

function toggleSidebar() {
    if (condition) {
        sidebar.style.right = '0';
    } else {
        sidebar.style.right = '-323px';
    }
    condition = !condition;
}


// here i put my code in the IIFE function(immidiatly invoked function expression) due to this there is no
//   create any conflict b/w similer variable which may be
//  already declared in my code and this function run earliar then any other function


