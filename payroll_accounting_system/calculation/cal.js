// Employee ID to Name mapping
const employees = {
    "E154735": "John Doe",
    "E67890": "Jane Smith",
    "E11223": "Alice Johnson",
    "E44556": "Bob Brown",
    "E12345": "Smriti Seth"
    // Add more employee IDs and names as needed
};

function calculatePayroll() {
    // Get values from input fields
    const employeeId = document.getElementById('employeeId').value;
    
    // Look up the employee name based on the ID
    const employeeName = employees[employeeId];
    
    if (!employeeName) {
        alert('Employee ID not found!');
        return; // Exit if the employee ID is invalid
    }

    const basicSalary = parseFloat(document.getElementById('basicSalary').value) || 0;
    const housingAllowance = parseFloat(document.getElementById('housingAllowance').value) || 0;
    const transportAllowance = parseFloat(document.getElementById('transportAllowance').value) || 0;
    const medicalAllowance = parseFloat(document.getElementById('medicalAllowance').value) || 0;
    const bonus = parseFloat(document.getElementById('bonus').value) || 0;
    const overtimeHours = parseFloat(document.getElementById('overtimeHours').value) || 0;
    const overtimeRate = parseFloat(document.getElementById('overtimeRate').value) || 0;
    const taxRate = parseFloat(document.getElementById('taxRate').value) || 0;
    const socialSecurity = parseFloat(document.getElementById('socialSecurity').value) || 0;
    const insurance = parseFloat(document.getElementById('insurance').value) || 0;
    const pension = parseFloat(document.getElementById('pension').value) || 0;

    // Validate required fields
    if (basicSalary <= 0) {
        alert('Please enter a valid basic salary.');
        return;
    }

    // Calculate gross salary
    const grossSalary = basicSalary + housingAllowance + transportAllowance + medicalAllowance + bonus;
    const overtimePay = overtimeHours * overtimeRate;
    const totalGrossSalary = grossSalary + overtimePay;

    // Calculate tax and deductions
    const taxAmount = (taxRate / 100) * totalGrossSalary;
    const totalDeductions = socialSecurity + insurance + pension + taxAmount;
    const netSalary = totalGrossSalary - totalDeductions;

    // Populate the payslip with the employee's data
    document.getElementById('employeeIdResult').textContent = employeeId;
    document.getElementById('employeeNameResult').textContent = employeeName;  // Display the employee's name
    document.getElementById('basicSalaryResult').textContent = basicSalary.toFixed(2);
    document.getElementById('housingAllowanceResult').textContent = housingAllowance.toFixed(2);
    document.getElementById('bonusResult').textContent = bonus.toFixed(2);
    document.getElementById('totalEarningsResult').textContent = totalGrossSalary.toFixed(2);
    document.getElementById('taxAmountResult').textContent = taxAmount.toFixed(2);
    document.getElementById('insuranceResult').textContent = insurance.toFixed(2);
    document.getElementById('socialSecurityResult').textContent = socialSecurity.toFixed(2);
    document.getElementById('totalDeductionsResult').textContent = totalDeductions.toFixed(2);
    document.getElementById('netPayResult').textContent = netSalary.toFixed(2);

    // Show the payslip
    document.getElementById('payslipResult').style.display = 'block';
}
