const CONFIG = {
  // Troque aqui se o número oficial for diferente. Formato: 55 + DDD + número, sem espaços.
  whatsapp: '5531990905292',
  mensagem: 'Olá! Vim pelo site da Atlântico Vidros e gostaria de solicitar um orçamento.'
};
const servicos = [
  ['Vidros temperados', ['Janelas temperadas tradicionais 2 e 4 folhas','Versatik 2, 3 e 6 folhas','Cortina de vidro com várias folhas','Basculante','Portas de vidro','Porta pivotante','Porta de correr atrás da parede','Porta temperada']],
  ['Portas de vidro', ['Correr 2 e 4 folhas','Versatik 2, 3 e 6 folhas','Pivotante','Correr atrás da parede','Porta temperada sob medida']],
  ['Box para banheiro', ['Multibox vidro 8mm','Elegante vidro 8mm','Tradicional vidro 6mm','Flex vidro 8mm','Transfer vidro 8mm','Abrir vidro 8mm']],
  ['Guarda-corpo e escadas', ['Torre inox','Gradline minimalista','Gradline','Boton','Infinity','Soluções para escadas e varandas']],
  ['Espelhos', ['Lapidado','Bisotado','Orgânico','Com LED','Projetos decorativos sob medida']],
  ['Janelas de alumínio', ['Tradicionais 2 e 4 folhas','Mão amiga 2, 3 e 4 folhas','Com tela mosquiteiro','Camarão','Guilhotina','Maxim-ar']],
  ['Portas de alumínio', ['Tradicionais 2 e 4 folhas','Mão amiga 3 a 6 folhas','Com tela mosquiteiro','Camarão']],
  ['Fachadas e acabamentos', ['Pele de vidro','Portões','Ripados','Maxim-ar','Projetos comerciais e residenciais']]
];
const grid = document.getElementById('serviceGrid');
grid.innerHTML = servicos.map(([titulo,itens]) => `<article class="service"><h3>${titulo}</h3><ul>${itens.map(i=>`<li>${i}</li>`).join('')}</ul></article>`).join('');
const galeria = document.getElementById('galleryGrid');
galeria.innerHTML = window.SITE_MEDIA.map((src,i)=>`<button class="galleryItem"><img loading="lazy" src="${src}" alt="Projeto Atlântico Vidros ${i+1}"></button>`).join('');
const lightbox = document.getElementById('lightbox');
const lightImg = lightbox.querySelector('img');
galeria.addEventListener('click', e => { const img=e.target.closest('img'); if(!img) return; lightImg.src=img.src; lightbox.classList.add('active'); });
lightbox.querySelector('button').onclick = () => lightbox.classList.remove('active');
lightbox.addEventListener('click', e => { if(e.target===lightbox) lightbox.classList.remove('active'); });
document.querySelector('.menuBtn').onclick=()=>document.querySelector('.nav').classList.toggle('open');
document.querySelectorAll('[data-whats]').forEach(a=>{a.href=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`; a.target='_blank'; a.rel='noopener';});
