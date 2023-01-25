import { refs } from './refs';
import { getTagsById } from './getTags';
import { renderCards, createCard } from './renderCards';

const KEY_STORAGE_FILMS = 'Popular movies';
const KEY_TO_WATHED = 'Wathed list';
const KEY_FOR_QUEUE = 'Queue list';
const KEY_CURRENT_ID = 'Current ID';

const watchedFilms = [];
const queueFilms = [];

refs.contentsList.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  refs.backdropFilm.classList.remove('is-hidden');
  document.body.classList.add('open-modal');

  const targetEl = Number(event.target.closest('li').dataset.id);

  const data = JSON.parse(localStorage.getItem(KEY_STORAGE_FILMS));
  const film = getFilmOfStorageById(data, targetEl);

  console.log(data);
  console.log(film);
  localStorage.setItem(KEY_CURRENT_ID, JSON.stringify(film.id));
  updateModal(film);
  refs.modalContainer.addEventListener('click', createWatchedList);
  closeModal();
}

function closeModal() {
  removeEventListener('click', createWatchedList);

  document.querySelector('body').addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      document.body.classList.remove('open-modal');
      refs.backdropFilm.classList.add('is-hidden');
    }
  });

  refs.backdropFilm.addEventListener('click', event => {
    if (
      event.target.classList.contains('modal__close') ||
      event.target.nodeName === 'svg' ||
      event.target.nodeName === 'use' ||
      event.target.classList.contains('backdrop')
    ) {
      document.body.classList.remove('open-modal');
      refs.backdropFilm.classList.add('is-hidden');
    }
  });
}

function getFilmOfStorageById(films, id) {
  for (film of films) {
    if (film.id === id) {
      return film;
    }
  }
}

function updateModal(film) {
  const {
    original_title,
    poster_path,
    tags,
    popularity,
    vote_average,
    overview,
    id,
    genre_ids,
    vote_count,
    title,
  } = film;

  const genre = getTagsById(genre_ids);
  const { watched, queue, backgroundColor } = updateBtn(id);

  const img = `<img src="https://image.tmdb.org/t/p/w500${poster_path}"
   class="contents__img"
          alt=""
          width="280"
          loading="lazy"/>`;

  const markup = ` <h2 class="modal__title">${title}</h2>
        <div class="modal__description">
          <ul class="modal__list">
            <li class="modal__item">Vote / Votes</li>
            <li class="modal__item">Popularity</li>
            <li class="modal__item">Original Title</li>
            <li class="modal__item">Genre</li>
          </ul>
          <ul class="modal__list-value">
            <li class="modal__item-value">
              <span class="modal__item-value--rating vote_average">${vote_average}</span> / ${vote_count}
            </li>
            <li class="modal__item-value popularity">${popularity}</li>
            <li class="modal__item-value original_title">${original_title}</li>
            <li class="modal__item-value tags">${genre}</li>
          </ul>
        </div>
        <h3 class="modal__subtitle">about</h3>
        <p class="modal__text overview">${overview}</p>
        <ul class="modal__btn-list">
          <li>
            <button
              class="modal__btn modal__btn--to-watched "
              data-list="watched" >
             ${watched}
            </button>
          </li>
          <li>
            <button class="modal__btn modal__btn--to-queue ${backgroundColor}" data-list="queue">${queue}</button>
          </li>
        </ul>`;

  refs.leftBoxModal.innerHTML = '';
  refs.rightBoxModal.innerHTML = '';

  refs.leftBoxModal.innerHTML = img;
  refs.rightBoxModal.innerHTML = markup;
}

function createWatchedList(event) {
  const watchedBtnEl = document.querySelector('.modal__btn--to-watched');
  const queueBtnEl = document.querySelector('.modal__btn--to-queue');

  const targetBtn = event.target.dataset.list;
  const targetID = Number(localStorage.getItem(KEY_CURRENT_ID));
  const films = JSON.parse(localStorage.getItem(KEY_STORAGE_FILMS));
  const targetFilm = getFilmOfStorageById(films, targetID);

  const wathedFilmId = watchedFilms.findIndex(film => film.id === targetID);
  const queueFilmId = queueFilms.findIndex(film => film.id === targetID);

  switch (targetBtn) {
    case 'watched': {
      if (wathedFilmId !== -1) {
        watchedBtnEl.textContent = 'ADD TO WATCHED';
        watchedFilms.splice(wathedFilmId, 1);
        localStorage.setItem(KEY_TO_WATHED, JSON.stringify(watchedFilms));
        break;
      }

      if (!queueFilmId) {
        queueBtnEl.textContent = 'ADD TO WATCHED';
        queueFilms.splice(queueFilmId, 1);
        localStorage.setItem(KEY_FOR_QUEUE, JSON.stringify(queueFilms));
      }

      watchedBtnEl.textContent = 'REMOVE';
      watchedFilms.push(targetFilm);
      localStorage.setItem(KEY_TO_WATHED, JSON.stringify(watchedFilms));
      break;
    }

    case 'queue': {
      if (queueFilmId !== -1) {
        queueBtnEl.textContent = 'ADD TO QUEUE';

        queueFilms.splice(queueFilmId, 1);
        localStorage.setItem(KEY_FOR_QUEUE, JSON.stringify(queueFilms));
        break;
      }

      if (!wathedFilmId) {
        watchedBtnEl.textContent = 'ADD TO QUEUE';
        watchedFilms.splice(wathedFilmId, 1);
        localStorage.setItem(KEY_TO_WATHED, JSON.stringify(watchedFilms));
      }

      queueBtnEl.textContent = 'REMOVE';
      queueBtnEl.style.backgroundColor = '#ff6b01';
      queueBtnEl.style.border = 'none';
      queueBtnEl.style.color = '#ffff';

      queueFilms.push(targetFilm);
      localStorage.setItem(KEY_FOR_QUEUE, JSON.stringify(queueFilms));
      break;
    }
  }
}

function updateBtn(id) {
  const wathedFilm = JSON.parse(localStorage.getItem(KEY_TO_WATHED));
  const queueFilm = JSON.parse(localStorage.getItem(KEY_FOR_QUEUE));

  const isWathced = wathedFilm ? wathedFilm.find(film => film.id === id) : null;

  const isQueue = queueFilm ? queueFilm.find(film => film.id === id) : null;

  return {
    watched: isWathced ? 'REMOVE' : 'ADD TO WATCHED',
    queue: isQueue ? 'REMOVE' : 'ADD TO QUEUE',
    backgroundColor: isQueue ? 'add' : '',
  };
}