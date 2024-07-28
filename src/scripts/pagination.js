import { updateCardList } from './card-list';
import { eventsService } from './eventsService';

export async function renderPagination() {
  const { totalPages } = eventsService.getPageData();
  $(document).ready(function () {
    const data = Array.from({ length: totalPages }, (_, i) => i);
    $('#pagination-container').pagination({
      dataSource: data,
      autoHidePrevious: true,
      autoHideNext: true,
      callback: async function (_, { pageNumber }) {
        await updateCardList({ page: pageNumber - 1 });
        // scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    });
  });
}
