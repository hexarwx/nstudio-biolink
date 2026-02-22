// ============================================================
//  NSTudio Biolink Renderer
//  Shared logic for index.html and map.html
// ============================================================

function renderBiolink(data) {
  const { logo, name, tagline, links, theme } = data;

  // Apply theme
  document.documentElement.style.setProperty('--bg-from',    theme.bg_from);
  document.documentElement.style.setProperty('--bg-to',      theme.bg_to);
  document.documentElement.style.setProperty('--card',       theme.card);
  document.documentElement.style.setProperty('--text',       theme.text);
  document.documentElement.style.setProperty('--name-color', theme.name_color);

  // Logo
  const logoEl = document.getElementById('bio-logo');
  if (logo) {
    logoEl.style.backgroundImage = `url('${logo}')`;
    logoEl.style.backgroundSize = 'cover';
    logoEl.style.backgroundPosition = 'center';
    logoEl.querySelector('span').style.display = 'none';
  }

  // Name & tagline
  document.getElementById('bio-name').textContent    = name;
  document.getElementById('bio-tagline').textContent = tagline || '';

  // Links
  const container = document.getElementById('bio-links');
  container.innerHTML = '';
  links.forEach((link, i) => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'bio-link';
    a.style.animationDelay = `${0.15 + i * 0.1}s`;

    // Use image icon if icon starts with "assets/", otherwise treat as emoji
    const iconHtml = link.icon.startsWith('assets/')
      ? `<img src="${link.icon}" alt="${link.label}" class="link-icon-img" />`
      : `<span class="link-icon">${link.icon}</span>`;

    a.innerHTML = `
      ${iconHtml}
      <span class="link-label">${link.label}</span>
      <span class="link-arrow">→</span>
    `;
    container.appendChild(a);
  });

  // Page title
  document.title = `${name} — NSTudio`;
}