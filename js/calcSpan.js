// Calculate and set the height of the grid item spanning multiple rows
const gridItems = document.querySelectorAll('.rowspan');
gridItems.forEach(item => {
    const rows = parseInt(item.dataset.rows);
    const rowHeight = 133.2; // Height of each row
    const rowGutter = 18;
    item.style.height = `${rows * rowHeight + ((rows - 1) * rowGutter)}px`;
    item.style.marginBottom = `${(rowGutter)}px`;

});