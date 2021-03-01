const shareLinks = document.querySelector('.share-links');
const active = document.querySelector('.active');
const cardFooterAction = document.querySelector('.card-footer-action');

cardFooterAction.addEventListener('click', () => {
	shareLinks.classList.toggle('active');
});
