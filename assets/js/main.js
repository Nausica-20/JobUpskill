// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Automatic Job Pages Menu
const jobMenu = document.getElementById("job-menu");

if (jobMenu) {
  const jobs = [
    { name: "Virtual Assistant", slug: "virtual-assistant.html" },
    { name: "Digital Marketer", slug: "digital-marketer.html" },
    { name: "Content Writer", slug: "content-writer.html" },
    { name: "Graphic Designer", slug: "graphic-designer.html" },
    { name: "Web Developer", slug: "web-developer.html" },
    { name: "IT Support Specialist", slug: "it-support.html" },
    { name: "Bookkeeper", slug: "bookkeeper.html" },
    { name: "Social Media Manager", slug: "social-media-manager.html" }
  ];

  let html = `<div class="job-menu">
                <h3>Remote Job Guides</h3>
                <ul>`;

  jobs.forEach(job => {
    html += `<li>
      <a href="/JobUpskill/jobs/${job.slug}">${job.name}</a>
    </li>`;
  });

  html += `</ul></div>`;
  jobMenu.innerHTML = html;
}
