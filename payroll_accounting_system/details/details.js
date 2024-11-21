// Employee data (ID, Name, Position, Employment Type, Phone, Bank Info)
const employees = [
    { 
        id: "E154735", 
        name: "John Doe", 
        position: "Software Engineer", 
        employmentType: "Full-Time", 
        phone: "+91 9876543210", 
        bankName: "State Bank of India", 
        branchName: "Saltlake", 
        ifscCode: "SBI0001234", 
        accountNumber: "100372437485"
    },
    { 
        id: "E67890", 
        name: "Jane Smith", 
        position: "HR Manager", 
        employmentType: "Full-Time", 
        phone: "+91 9988776655", 
        bankName: "HDFC Bank", 
        branchName: "Park Street", 
        ifscCode: "HDFC0002345", 
        accountNumber: "987654321098"
    },
    { 
        id: "E11223", 
        name: "Alice Johnson", 
        position: "Web devoloper", 
        employmentType: "Contract", 
        phone: "+91 8888999988", 
        bankName: "ICICI Bank", 
        branchName: "Sector V", 
        ifscCode: "ICIC0005678", 
        accountNumber: "100200300400"
    },
    { 
        id: "E44556", 
        name: "Bob Brown", 
        position: "Sales Executive", 
        employmentType: "Part-Time", 
        phone: "+91 8777886677", 
        bankName: "Axis Bank", 
        branchName: "Newtown", 
        ifscCode: "AXIS0008765", 
        accountNumber: "432198765432"
    },
    { 
        id: "E12345", 
        name: "Smriti Seth", 
        position: "Web Devoloper", 
        employmentType: "Part-Time", 
        phone: "+91 8609224463", 
        bankName: "PNB Bank", 
        branchName: "Rajbolhat", 
        ifscCode: "PNB12345", 
        accountNumber: "100200300400",
    }
];

// Function to render employee data in the table
function renderEmployeeTable() {
    const tableBody = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
    employees.forEach(employee => {
        const row = document.createElement("tr");

        const cell1 = document.createElement("td");
        cell1.textContent = employee.id;
        row.appendChild(cell1);

        const cell2 = document.createElement("td");
        cell2.textContent = employee.name;
        row.appendChild(cell2);

        const cell3 = document.createElement("td");
        cell3.textContent = employee.position;
        row.appendChild(cell3);

        const cell4 = document.createElement("td");
        cell4.textContent = employee.employmentType;
        row.appendChild(cell4);

        const cell5 = document.createElement("td");
        cell5.textContent = employee.phone;
        row.appendChild(cell5);

        const cell6 = document.createElement("td");
        cell6.textContent = employee.bankName;
        row.appendChild(cell6);

        const cell7 = document.createElement("td");
        cell7.textContent = employee.branchName;
        row.appendChild(cell7);

        const cell8 = document.createElement("td");
        cell8.textContent = employee.ifscCode;
        row.appendChild(cell8);

        const cell9 = document.createElement("td");
        cell9.textContent = employee.accountNumber;
        row.appendChild(cell9);

        tableBody.appendChild(row);
    });
}

// Call the function to render the employee data on page load
renderEmployeeTable();
