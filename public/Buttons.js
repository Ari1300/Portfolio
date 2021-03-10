console.log("Everything is okay");

document.getElementById('HomePage').addEventListener("click", ()=>{
  window.scrollTo(0,0);
  console.log("Home Page");
});

document.getElementById('AboutMe').addEventListener("click", ()=>{
  window.scrollTo(0,950);
  console.log("About Me");
});

document.getElementById('SkillSet').addEventListener("click", ()=>{
  window.scrollTo(0, 1900);
  console.log("Skill Set");
});

document.getElementById('AllProjects').addEventListener("click", ()=>{
  window.scrollTo(0,2850);
  console.log("My Projects");
});

document.getElementById('ContactMeButton').addEventListener("click", ()=>{
  window.scrollTo(0,3900);
  console.log("Contact Me");
});
