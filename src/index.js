const avatar = document.querySelector('.avatar');
const avatarText = document.querySelector('.avatar-text');
const shareLinks = document.querySelector('.share-links');
const active = document.querySelector('.active');
const cardFooterAction = document.querySelector('.card-footer-action');
const cardFooter = document.querySelector('.card-footer');
const btn = document.querySelector('.card-footer-action');

cardFooterAction.addEventListener('click', () => {
	// console.log('test');
	// 1. invert button shades
	btn.classList.toggle('active');
	// 2. change footer bg color to hsl(217, 19%, 35%);
	cardFooter.classList.toggle('active');
	// 3. toggle avatar and avatar-text display:block and display:none
	avatar.classList.toggle('active');
	avatarText.classList.toggle('active');

	// 4. toggle .share-links display:none and display: grid
	shareLinks.classList.toggle('active');
});
