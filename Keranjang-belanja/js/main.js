const my_opts = document.querySelectorAll('.opts')
let imp_pre = document.getElementById('img-pre')
my_opts.forEach(opts => {
  opts.addEventListener('click', () => {
    imp_pre.setAttribute('src', `./img/${opts.id}.png`)
    opts_check()
  })
})
function opts_check() {
  if (imp_pre.getAttribute('src') === "./img/1.png") {
    document.getElementById('1').classList.add('bd')
    document.getElementById('2').classList.remove('bd')
  } else if (imp_pre.getAttribute('src') === './img/2.png') {
    document.getElementById('2').classList.add('bd')
    document.getElementById('1').classList.remove('bd')
  }
}
opts_check()
