document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;

// The ".box5" paragraph is an overlay that fades in while the birds section
// (".container1") is on screen, and fades out again once it scrolls away.
const anchor = document.querySelector('.container1');
const box5 = document.querySelector('.box5');

// How much of the birds section has to be on screen before the text appears.
// 0.25 = a quarter of it. Lower this to make the text appear earlier.
const VISIBLE_RATIO = 0.25;

if (anchor && box5) {

	box5.style.display = "none";
	let hideTimer = null;
	let shown = false;

	const show = () => {
		if (shown) return;
		shown = true;
		if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
		box5.classList.remove('fade-out');
		box5.classList.add('fade-in');
		box5.style.display = "block";
	};

	const hide = () => {
		if (!shown) return;
		shown = false;
		box5.classList.add('fade-out');
		box5.classList.remove('fade-in');
		if (hideTimer) clearTimeout(hideTimer);
		hideTimer = setTimeout(function () {
			box5.style.display = "none";
			hideTimer = null;
		}, 500);
	};

	// Show the text as soon as a quarter of the birds section overlaps the
	// viewport, instead of waiting for the whole 600px block to fit inside it.
	const update = () => {
		const bounding = anchor.getBoundingClientRect();
		const viewport = window.innerHeight || document.documentElement.clientHeight;
		const overlap = Math.min(bounding.bottom, viewport) - Math.max(bounding.top, 0);
		const needed = Math.min(bounding.height, viewport) * VISIBLE_RATIO;

		if (overlap > 0 && overlap >= needed) {
			show();
		} else {
			hide();
		}
	};

	update();

	// Capture phase, so this also catches scrolling inside a nested container
	// rather than only on the window itself.
	window.addEventListener('scroll', update, true);
	window.addEventListener('resize', update);
	window.addEventListener('load', update);

}
