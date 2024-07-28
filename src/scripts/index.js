import { cardEventListener } from './card';
import { renderCardList } from './card-list';
import { initFilters } from './filters';
import { renderPagination } from './pagination';

async function init() {
  await renderCardList();
  await renderPagination();

  initFilters();
  cardEventListener();
}

init();
