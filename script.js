// YEAR
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if(year) year.innerText = new Date().getFullYear();
});

// TYPING EFFECT (home only)
(function(){
  const el = document.getElementById('type-target');
  if(!el) return;
  const lines = ['Boost Your Social Presence Instantly'];
  let i=0, li=0;

  function tick(){
    const str = lines[li];
    el.textContent = str.slice(0,i);
    i++;
    if(i<=str.length){ setTimeout(tick,50); }
    else{ setTimeout(()=>{i=0;tick();},1800); }
  }
  tick();
})();

// REVEAL ON SCROLL
function reveal(){
  document.querySelectorAll('.reveal').forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < window.innerHeight - 80) el.classList.add('visible');
  });
}
window.addEventListener('scroll',reveal);
window.addEventListener('load',()=>{reveal();setTimeout(reveal,500);});
