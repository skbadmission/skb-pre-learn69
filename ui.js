export function initUI(){
  const btn = document.getElementById('btnMenu');
  const sidebar = document.getElementById('sidebarEl');

  if(btn){
    btn.addEventListener('click',()=>{
      sidebar.classList.toggle('open');
    });
  }
}