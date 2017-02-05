$('body').on('keydown', '.swal2-modal input', (e) => {
  if (e.which === 13) swal.clickConfirm()
})
