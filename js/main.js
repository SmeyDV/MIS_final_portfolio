async function loadComponent(path) {
  const res = await fetch(path);
  return await res.text();
}

async function loadPage() {
  const app = document.getElementById('app');
  const sections = [
    'components/header.html',
    'components/game-window.html',
    'components/tabbar.html',
    'components/footer.html'
  ];

  for (const section of sections) {
    const html = await loadComponent(section);
    const div = document.createElement('div');
    div.innerHTML = html;
    app.appendChild(div);
  }

  // Load text typing component after layout is ready
  setTimeout(async () => {
    const textTypingArea = document.getElementById('text-typing-area');
    if (textTypingArea) {
      const textTypingHtml = await loadComponent('components/text-typing.html');
      textTypingArea.innerHTML = textTypingHtml;
    }
  }, 100);
}

async function loadSection(name) {
  const html = await loadComponent(`components/pages/${name}.html`);
  const main = document.getElementById('main');
  main.innerHTML = html;
}


loadPage();
