
(() => {
  "use strict";
  const data = window.PORTFOLIO;
  if (!data) return;
  const profile = data.profile || {};
  const $ = (selector) => document.querySelector(selector);
  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[character]));
  const path = (value) => {
    if (typeof value !== "string" || !value.trim()) return "";
    try {
      return ["http:", "https:", "file:"].includes(new URL(value, document.baseURI).protocol) ? value : "";
    } catch { return ""; }
  };
  const text = (selector, value) => { const element = $(selector); if (element) element.textContent = value || ""; };
  const paragraphs = (values) => (values || []).map((value) => `<p>${escapeHTML(value)}</p>`).join("");

  document.querySelectorAll("[data-name]").forEach((element) => { element.textContent = profile.name || "Your Name"; });
  document.querySelectorAll("[data-year]").forEach((element) => { element.textContent = new Date().getFullYear(); });
  document.title = `${{ home: "Home", projects: "Projects", about: "About / Contact" }[document.body.dataset.page]} | ${profile.name || "Engineering Portfolio"}`;
  document.addEventListener("error", (event) => {
    const image = event.target;
    if (image instanceof HTMLImageElement && !image.dataset.fallback) {
      image.dataset.fallback = "true";
      image.src = "images/design-placeholder.svg";
      image.alt = "Project image unavailable; illustrative placeholder shown";
    }
  }, true);

  if (document.body.dataset.page === "home") {
    text("#home-subtitle", profile.title);
    text("#home-description", profile.intro);
    const heroImage = path(profile.heroImage);
    if (heroImage) {
      $("#home-image").src = heroImage;
      $("#home-image").alt = profile.heroImageAlt || "Engineering project";
      text("#home-caption", profile.heroCaption);
      $("#home-caption").hidden = !profile.heroCaption;
    } else $("#home-figure").hidden = true;
    $("meta[name=description]").content = profile.intro || "Engineering portfolio";
  }

  if (document.body.dataset.page === "projects") {
    const projects = data.projects || [];
    $("#project-list").innerHTML = projects.length ? projects.map((project, index) => {
      const images = (project.images || []).filter((image) => path(image.src));
      const facts = [["Role", project.role], ["Tools", project.tools], ["Status", project.status]].filter(([, value]) => value);
      const links = (project.links || []).filter((item) => path(item.url));
      return `<article class="project${images.length ? "" : " no-photos"}" aria-labelledby="project-${index}">
        <div class="project-heading"><h2 id="project-${index}">${escapeHTML(project.title)}</h2>${project.date ? `<p class="project-date">${escapeHTML(project.date)}</p>` : ""}</div>
        ${project.summary ? `<p class="project-summary">${escapeHTML(project.summary)}</p>` : ""}
        <div class="project-body">
          ${images.length || project.videos?.length ? `
  <div class="project-photos">
    ${images.map((image) => `
      <figure>
        <img
          src="${escapeHTML(path(image.src))}"
          alt="${escapeHTML(image.alt || project.title)}"
          loading="lazy">
        ${image.caption ? `<figcaption>${escapeHTML(image.caption)}</figcaption>` : ""}
      </figure>
    `).join("")}

    ${(project.videos || []).map((video) => `
      <figure>
        <video controls preload="metadata">
          <source src="${escapeHTML(path(video.src))}" type="video/mp4">
          Your browser does not support embedded video.
        </video>
        ${video.caption ? `<figcaption>${escapeHTML(video.caption)}</figcaption>` : ""}
      </figure>
    `).join("")}
  </div>
` : ""}
          <div class="project-notes">
            ${facts.length ? `<dl class="project-facts">${facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeHTML(value)}</dd></div>`).join("")}</dl>` : ""}
            ${(project.sections || []).map((section) => `<section class="project-note"><h3>${escapeHTML(section.heading)}</h3><p>${escapeHTML(section.text)}</p></section>`).join("")}
            ${links.length ? `<ul class="project-links">${links.map((item) => `<li><a href="${escapeHTML(path(item.url))}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.label)}</a></li>`).join("")}</ul>` : ""}
          </div>
        </div>
      </article>`;
    }).join("") : '<p class="muted">Projects coming soon.</p>';
  }

  if (document.body.dataset.page === "about") {
    text("#about-subtitle", profile.title);
    $("#bio").innerHTML = paragraphs(profile.bio);
    text("#education", profile.education);
    $("#education").hidden = !profile.education;
    text("#skills", (profile.skills || []).join(" · "));
    $("#skills-block").hidden = !(profile.skills || []).length;
    text("#contact-intro", profile.contactIntro);
    const links = [];
    if (profile.email) links.push(`<li><a href="mailto:${escapeHTML(encodeURIComponent(profile.email).replace(/%40/g, "@"))}">${escapeHTML(profile.email)}</a></li>`);
    [["LinkedIn", profile.linkedin], ["GitHub", profile.github], ["Résumé (PDF)", profile.resume]].forEach(([label, value]) => {
      const url = path(value);
      if (url) links.push(`<li><a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${label}</a></li>`);
    });
    $("#contact-links").innerHTML = links.join("");
    $("#contact-placeholder").hidden = links.length > 0;
  }
})();
