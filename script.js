const editToggle=document.getElementById('editToggle');
const editable=[...document.querySelectorAll('.editable')];
const storageKey='lumiere-portfolio-copy';
const saved=JSON.parse(localStorage.getItem(storageKey)||'{}');
editable.forEach((el,i)=>{if(saved[i])el.innerHTML=saved[i]});
editToggle.addEventListener('click',()=>{
  document.body.classList.toggle('editing');
  const active=document.body.classList.contains('editing');
  editToggle.classList.toggle('active',active);
  editToggle.textContent=active?'Save changes':'Edit mode';
  editable.forEach(el=>el.contentEditable=active?'true':'false');
  if(!active){const data={};editable.forEach((el,i)=>data[i]=el.innerHTML);localStorage.setItem(storageKey,JSON.stringify(data));}
});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('section, .work-card, .process-grid article').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
document.getElementById('year').textContent=new Date().getFullYear();
