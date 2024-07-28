import { updateCardList } from './card-list';

const search = document.getElementById('search');
const countrySelect = document.getElementById('countrySelect');

function debounce(callback, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
}

async function handleSearch(e) {
  const { value } = e.target;
  await updateCardList({ keywords: value });
}

async function handelSelect(e) {
  const { value } = e.target;
  await updateCardList({ country: value });
}

async function clickHandler(e) {
  const value = e.target.closest('button')?.textContent;
  if (value) {
    await updateCardList({ page: +value });
  }
}

export function initFilters() {
  countrySelect.addEventListener('click', clickHandler);
  search.addEventListener('input', debounce(handleSearch, 500));
  countrySelect.addEventListener('change', handelSelect);
}
