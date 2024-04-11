let employees = [];

function saveEmployee() {
  const userId = document.getElementById('userId').value;
  const userName = document.getElementById('userName').value;
  const city = document.getElementById('city').value;

  employees.push({ userId, userName, city });
  displayEmployees();
  clearForm();
}

function updateEmployee() {
  const userId = document.getElementById('updateUserId').value;
  const userName = document.getElementById('updateUserName').value;
  const city = document.getElementById('updateCity').value;

  const index = employees.findIndex(emp => emp.userId === userId);
  if (index !== -1) {
    employees[index] = { userId, userName, city };
    displayEmployees();
    clearForm();
  } else {
    alert('Employee not found!');
  }
}

function deleteEmployee() {
  const userId = document.getElementById('deleteUserId').value;
  const index = employees.findIndex(emp => emp.userId === userId);
  if (index !== -1) {
    employees.splice(index, 1);
    displayEmployees();
  } else {
    alert('Employee not found!');
  }
}

function viewEmployee() {
  const userId = document.getElementById('viewUserId').value;
  const employee = employees.find(emp => emp.userId === userId);
  if (employee) {
    alert(`User ID: ${employee.userId}\nUsername: ${employee.userName}\nCity: ${employee.city}`);
  } else {
    alert('Employee not found!');
  }
}

function displayAll() {
    document.getElementById('employeeTable').classList.remove('hidden');
  document.getElementById('addForm').classList.add('hidden');
  document.getElementById('updateSection').classList.add('hidden');
  document.getElementById('deleteForm').classList.add('hidden');
  document.getElementById('viewForm').classList.add('hidden');
  //document.getElementById('employeeTable').classList.add('hidden');
  displayEmployees();
}

function displayEmployees() {
  const employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';
  employees.forEach(employee => {
    const row = `
      <tr>
        <td>${employee.userId}</td>
        <td>${employee.userName}</td>
        <td>${employee.city}</td>
      </tr>
    `;
    employeeList.innerHTML += row;
  });
}

function clearForm() {
  document.getElementById('userId').value = '';
  document.getElementById('userName').value = '';
  document.getElementById('city').value = '';
  document.getElementById('updateUserId').value = '';
  document.getElementById('updateUserName').value = '';
  document.getElementById('updateCity').value = '';
  document.getElementById('deleteUserId').value = '';
  document.getElementById('viewUserId').value = '';
}

function showAddForm() {
    
  document.getElementById('addForm').classList.remove('hidden');
  document.getElementById('updateSection').classList.add('hidden');
  document.getElementById('deleteForm').classList.add('hidden');
  document.getElementById('viewForm').classList.add('hidden');
  document.getElementById('employeeTable').classList.add('hidden');
}

function showUpdateForm() {
  document.getElementById('addForm').classList.add('hidden');
  document.getElementById('updateSection').classList.remove('hidden');
  document.getElementById('deleteForm').classList.add('hidden');
  document.getElementById('viewForm').classList.add('hidden');
  document.getElementById('employeeTable').classList.add('hidden');
}

function showDeleteForm() {
  document.getElementById('addForm').classList.add('hidden');
  document.getElementById('updateSection').classList.add('hidden');
  document.getElementById('deleteForm').classList.remove('hidden');
  document.getElementById('viewForm').classList.add('hidden');
  document.getElementById('employeeTable').classList.add('hidden');
}

function showViewForm() {
  document.getElementById('addForm').classList.add('hidden');
  document.getElementById('updateSection').classList.add('hidden');
  document.getElementById('deleteForm').classList.add('hidden');
  document.getElementById('viewForm').classList.remove('hidden');
  document.getElementById('employeeTable').classList.add('hidden');
}
