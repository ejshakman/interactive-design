// Calculate and set the height of the grid item spanning multiple rows
const gridItems = document.querySelectorAll('.rowspan');
gridItems.forEach(item => {
    const rows = parseInt(item.dataset.rows);
    const rowHeight = 133.2; // Height of each row
    const rowGutter = 18;
    item.style.height = `${rows * rowHeight + ((rows - 1) * rowGutter)}px`;
    item.style.marginBottom = `${(rowGutter)}px`;
});

// // Function to calculate and set the width of grid items spanning multiple columns
// function setGridItemWidths(gridContainerSelector, gridItemSelector) {
//     // Get the grid container element
//     const gridContainer = document.querySelector(gridContainerSelector);

//     // Get computed styles of the grid container
//     const computedStyles = window.getComputedStyle(gridContainer);

//     // Get the column gap
//     const columnGap = parseFloat(computedStyles.getPropertyValue('column-gap'));

//     // Get the width of one column
//     const columnWidth = (gridContainer.clientWidth - (2 * columnGap)) / 3;

//     // Get all grid items that need to span multiple columns
//     const gridItems = document.querySelectorAll(gridItemSelector);

//     // Set the calculated width to each grid item
//     gridItems.forEach(item => {
//         const columnsToSpan = parseInt(item.getAttribute('data-columns'), 10);
//         const totalWidth = (columnWidth * columnsToSpan) + (columnGap * (columnsToSpan - 1));
//         item.style.width = ${totalWidth}px;
//     });
// }

// // Usage example
// // Assume the grid container has the id 'wrapper' and the grid items have the class 'colspan'
// setGridItemWidths('#wrapper', '.colspan');

