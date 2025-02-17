const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const addBtn = document.getElementById('add');
const list = document.getElementById('list');

function addTask() {
  const name = nameInput.value.trim();
  const description = descriptionInput.value.trim();

  if (!name || !description) {
  alert('Please enter both name and description');
  return;
  }


  const li = document.createElement('li');
  li.innerHTML = `<strong>${name}</strong>:${description}
  <button class="delete">❌</button>`;

  list.appendChild(li);

  nameInput.value = '';
  descriptionInput.value = '';

  li.querySelector('.delete').addEventListener('click', () => {
    list.removeChild(li);
  });

}

addBtn.addEventListener('click', addTask);