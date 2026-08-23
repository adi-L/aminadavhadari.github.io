/* ============================================================
   Memorial for Aminadav Hadari (13 May 1958 – 17 March 2026)

   THIS IS THE ONLY FILE THAT HOLDS THE WORDING.
   Change the text below and it changes on every page,
   in both English and Hebrew. Nothing else needs editing.

   Loaded as the first thing inside <body> on every page.
   ============================================================ */

(function () {
	'use strict';

	/* ---- the wording ------------------------------------------ */

	var TEXT = {
		en: {
			label:    'In loving memory of',
			name:     'Aminadav Hadari',
			dates:    '1958–2026',
			hebrew:   'זכרונו לברכה',
			blessing: 'May his memory be a blessing',
			/* entrance overlay */
			lead:      'In loving memory of',
			longDates: '13 May 1958 – 17 March 2026',
			enter:     'Enter the site'
		},
		he: {
			label:    'לזכרו של',
			name:     'עמינדב הדרי',
			dates:    '1958–2026',
			/* The Hebrew pages carry no blessing in the banner — on its own at the
			   far end of the band it read as detached rather than as part of it. */
			hebrew:   '',
			blessing: '',
			/* entrance overlay */
			lead:      'לזכרו של',
			longDates: '13 במאי 1958 – 17 במרץ 2026',
			enter:     'כניסה לאתר'
		}
	};

	/* ---- which language is this page? -------------------------- */

	/* The Hebrew filenames carry invisible right-to-left marks — strip them
	   so the name of the page can be matched normally. */
	var page = location.pathname;
	try { page = decodeURIComponent(page); } catch (e) {}
	page = page.replace(/[‎‏‪-‮]/g, '');

	var he = document.documentElement.lang === 'he' || /hebrew|heberw/i.test(page);
	var t  = he ? TEXT.he : TEXT.en;

	/* ---- the banner -------------------------------------------- */

	function buildBanner() {
		var bar = document.createElement('div');
		bar.className = 'memorial-bar';
		bar.setAttribute('role', 'note');
		bar.setAttribute('aria-label', t.label + ' ' + t.name);
		bar.setAttribute('dir', he ? 'rtl' : 'ltr');

		var face = document.createElement('span');
		face.className = 'm-candle';
		face.setAttribute('aria-hidden', 'true');
		face.appendChild(document.createTextNode('🕯️'));

		var stack = document.createElement('div');
		stack.className = 'm-stack';

		var label = document.createElement('span');
		label.className = 'm-label';
		label.appendChild(document.createTextNode(t.label));

		var name = document.createElement('span');
		name.className = 'm-name';
		name.appendChild(document.createTextNode(t.name));

		var dates = document.createElement('span');
		dates.className = 'm-dates';
		dates.appendChild(document.createTextNode(t.dates));
		name.appendChild(dates);

		stack.appendChild(label);
		stack.appendChild(name);

		bar.appendChild(face);
		bar.appendChild(stack);

		if (t.hebrew || t.blessing) {
			var blessing = document.createElement('div');
			blessing.className = 'm-blessing';
			if (t.hebrew) {
				var heb = document.createElement('span');
				heb.className = 'm-heb';
				heb.setAttribute('dir', 'rtl');
				heb.appendChild(document.createTextNode(t.hebrew));
				blessing.appendChild(heb);
			}
			if (t.blessing) blessing.appendChild(document.createTextNode(t.blessing));
			bar.appendChild(blessing);
		}
		return bar;
	}

	/* ---- the entrance overlay, shown once per session ---------- */

	function buildOverlay() {
		var o = document.createElement('div');
		o.id = 'memorial-overlay';
		o.setAttribute('role', 'dialog');
		o.setAttribute('aria-label', t.lead + ' ' + t.name);
		o.setAttribute('dir', he ? 'rtl' : 'ltr');

		var inner = document.createElement('div');
		inner.className = 'memorial-inner';

		function line(cls, text) {
			var d = document.createElement('div');
			d.className = cls;
			d.appendChild(document.createTextNode(text));
			return d;
		}

		inner.appendChild(line('memorial-candle', '🕯️'));
		inner.appendChild(line('memorial-lead', t.lead));
		inner.appendChild(line('memorial-name', t.name));
		/* The Hebrew date string contains Hebrew words, so it must stay RTL;
		   the English one is forced LTR so it reads correctly on RTL pages too. */
		var d = line('memorial-dates', t.longDates);
		if (!/[֐-׿]/.test(t.longDates)) d.setAttribute('dir', 'ltr');
		inner.appendChild(d);
		inner.appendChild(line('memorial-enter', t.enter));

		o.appendChild(inner);
		return o;
	}

	function wireOverlay(o) {
		function dismiss() {
			if (o.classList.contains('memorial-hide')) return;
			o.classList.add('memorial-hide');
			try { sessionStorage.setItem('memorialSeen', '1'); } catch (e) {}
			setTimeout(function () {
				if (o.parentNode) o.parentNode.removeChild(o);
			}, 1100);
		}
		o.addEventListener('click', dismiss);
		window.addEventListener('scroll', dismiss, { passive: true });
		window.addEventListener('keydown', dismiss);
		setTimeout(dismiss, 6000);
	}

	/* ---- put them on the page ---------------------------------- */

	var host = document.body || document.documentElement;

	/* The home and About pages position their own full-height panels, so they
	   must not get the extra top padding memorial.css gives ordinary pages.
	   The stylesheet also catches this with :has(); this runs first, before
	   anything paints, and covers browsers without :has() support. */
	if (/(^|\/)(index|about)[^\/]*\.html?$/i.test(page) || page === '/' || /\/$/.test(page)) {
		host.className += (host.className ? ' ' : '') + 'memorial-no-offset';
	}

	host.insertBefore(buildBanner(), host.firstChild);

	var seen = false;
	try { seen = !!sessionStorage.getItem('memorialSeen'); } catch (e) {}
	if (!seen) {
		var overlay = buildOverlay();
		host.insertBefore(overlay, host.firstChild);
		wireOverlay(overlay);
	}
})();
