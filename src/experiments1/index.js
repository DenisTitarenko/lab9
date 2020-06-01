$(() => {
  $('.hideBtn').click(() =>{
    $('a[class=link]').hide(500)
  })

  $('.showBtn').click(() => {
    $('a[class=link]').show(500)
  })
})