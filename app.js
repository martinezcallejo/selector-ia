let data = {};

fetch('data.json')
  .then(res => res.json())
  .then(json => data = json);

document.querySelectorAll('.card').forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;
    showResults(cat);
  });
});

function showResults(cat) {
  const modal = document.getElementById('modal');
  const resultsDiv = document.getElementById('results');
  const title = document.getElementById('modal-title');

  resultsDiv.innerHTML = '';
  title.innerText = cat.toUpperCase();

  data[cat].forEach(tool => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p><strong>${tool.name}</strong> - ${tool.desc}</p>
      <a href="${tool.url}" target="_blank">Abrir</a>
      <hr>
    `;
    resultsDiv.appendChild(div);
  });

  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

/* Service Worker */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
