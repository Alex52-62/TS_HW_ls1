import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

  window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock('Tommy Brown', 'avatar1', 1)
    renderSearchFormBlock( "2022-12-28", "2022-12-30")
    renderSearchStubBlock()
    renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
    )
  });
