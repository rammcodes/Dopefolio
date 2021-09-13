document.title = project.title;
document.getElementById('project-image').src = project.image_src;
document.getElementById('project-title').innerText = project.title;
document.getElementById('project-summary').innerText = project.summary;
document.getElementById('project-details').innerHTML = project.details;
document.getElementById('code_link').href = project.code_link;


var tools_parent_div = document.getElementById('tools');
if (tools_parent_div) {
  project.tools.forEach(skill => {
    var el = document.createElement('div');
    el.classList.add("skills__skill");
    el.innerText = skill;
    tools_parent_div.appendChild(el);
  });
}

const elements = document.getElementsByClassName('live_link');
for (const element of elements) {
  element.href = project.live_link;
}