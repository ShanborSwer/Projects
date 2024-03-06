document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expenseForm');
    const expenseTableBody = document.getElementById('expenseTableBody');
    const totalExpenses = document.getElementById('totalExpenses');
    let total = 0;

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const expenseName = document.getElementById('expenseName').value;
        const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

        if (expenseName && !isNaN(expenseAmount)) {
            total += expenseAmount;

            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${expenseName}</td>
                <td>$${expenseAmount.toFixed(2)}</td>
            `;
            expenseTableBody.appendChild(newRow);

            totalExpenses.textContent = total.toFixed(2);

            // Reset form fields
            expenseForm.reset();
        } else {
            alert('Please enter valid expense name and amount.');
        }
    });
});
