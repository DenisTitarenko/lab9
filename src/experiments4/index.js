$(() => {
  console.log('index')

  const paragraphs = $('p:odd');

  $.each(paragraphs, (index, element) => {
    $(element).click(() => {
      $(element).hide(500)
    })
  })
})