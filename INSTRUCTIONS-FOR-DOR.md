# Memorial site — record of changes

A running note of what has been changed on **https://aminadavhadari.github.io**
and why, so there's a plain-language record next to the code.

Items 1–10 are **live**. Items 11–14 are in an open pull request and go live
when it is merged.

---

## What was changed

1. **Memorial in the Google / WhatsApp preview** — every page now opens with
   *"In memory of Aminadav Hadari (13 May 1958 – 17 March 2026)"* (Hebrew:
   *"לזכרו של עמינדב הדרי (13 במאי 1958 – 17 במרץ 2026)"*), then the original text
   continues.
2. **Memorial entrance screen** — when someone opens the site, a gentle memorial
   screen (candle, name, dates) appears, then fades into the site. It shows once
   per visit and can be dismissed by clicking, scrolling, or pressing a key. It's
   on every page, so it shows no matter which page a visitor lands on.
3. **Contact forms** — the "Contact me" / "צור קשר" heading and the "Send Email"
   button were removed from all three contact forms, so they no longer send email.
   The forms themselves are kept, but they are now greyed out and their fields
   can't be typed into, with a line underneath saying the form is no longer active
   — so nobody fills one in expecting a reply. On the Hebrew pages the form now
   reads right-to-left, with Hebrew labels and his photograph moved to the other
   side so it doesn't sit on top of the text.
4. **Contact footers** — the phone number and email address were removed (the
   copyright line stays).
5. **About page** — fixed the text near the flying birds that wasn't appearing;
   it now shows when you scroll to it.
6. **Memorial banner** — a slim band across the very top of every page, above the
   menu: a lit candle, *"In loving memory of / Aminadav Hadari 1958–2026"*, and
   *"זכרונו לברכה — May his memory be a blessing"* at the far end. On Hebrew pages
   it flips to right-to-left and reads *"לזכרו של / עמינדב הדרי"*. Unlike the
   entrance screen, this one stays on screen the whole time. On phones it shrinks
   and the blessing drops away so the name always fits.
7. **A proper font** — the site used to fall back to Times New Roman, which every
   computer draws slightly differently and which renders Hebrew badly. All pages
   now use **Assistant**, a Google font drawn for Hebrew and English together, so
   both language versions match. (The handwritten sticky notes on the Other
   Projects page keep their own font on purpose.)
8. **Menu width** — the menu bar on the home page stopped a few pixels short of
   the screen on each side. It now runs the full width, like the other pages.
9. **Hebrew menu** — on the Hebrew pages the menu now reads right-to-left, so it
   starts at the right edge where a Hebrew reader starts, with the language
   switcher on the left. Seven of the eight Hebrew pages also still had an
   *English* menu (Home / About me / Solutions / Contact) even though the Hebrew
   home page had a Hebrew one; they now all read בית / עליי / פתרונות / צור קשר,
   matching the home page. Every page also declares its language to the browser
   now (`lang="he"` or `lang="en"`), which is what search engines and screen
   readers use to tell the two versions apart.
10. **Banner covering the panels** — adding the banner (item 6) pushed it over
    the top of the sliding panels on the home and About pages, hiding the first
    ninety-odd pixels of each one — which is where the "About me:" heading lived.
    The panels now start below the banner and menu instead.

### Not yet live

11. **The credit line at the bottom of every page** — "©2020, Designed & Coded by
    Dor Hadari". The name was a link, but it pointed nowhere: clicking it opened a
    blank copy of the page in a new tab. It's now plain text in the same orange.
    If it should point somewhere real — a LinkedIn page, a portfolio — send the
    address and it can go back to being a proper link.
12. **"CREATIVE TEAM" in the footer** — did nothing at all when clicked, on the
    home and About pages in both languages. It now goes to the home page, the same
    place the menu's "Home" goes. (Those words are left over from the template the
    site was built from. The footers on the other pages say "HOMEPAGE" instead, so
    they could be matched up if that reads better.)
13. **The footer under the contact form** — showed only the copyright line. The
    CREATIVE TEAM / ABOUT ME / LINKEDIN row that the site's other footers carry had
    never been added to it. It's there now, on the home and About pages in both
    languages.
14. **The links on the blue wave, home page** — cut in half on a full-size window,
    and entirely off the bottom of the screen on a smaller one. They sit properly
    inside the panel now. The blue wave itself had also slid off the bottom of that
    panel when the banner went in (item 6) — that's back too.

---

## Changing the memorial wording later

All of the memorial text — the banner **and** the entrance screen, English and
Hebrew — lives in a single file called **`memorial.js`**, in a block near the top
marked *"the wording"*. Edit the words there and they change on all 16 pages at
once. You never need to touch the individual pages.

The colours and sizes live in **`memorial.css`**, next to it.

The site-wide font is set in one place too — **`typography.css`**. To try a
different one, change the font name in the `--site-font` line there and in the
`fonts.googleapis.com` link at the top of the pages.

---

## When will Google show the memorial?

- **WhatsApp / social link previews:** update quickly — usually within a few
  hours of going live (they re-fetch each time the link is shared fresh).
- **Google search results:** Google has to re-visit ("re-crawl") the site first.
  This can take **a few days to a couple of weeks** — it's normal and there's
  nothing broken if it isn't instant.

### Optional — ask Google to update faster

If the site is set up in **Google Search Console**
(https://search.google.com/search-console):

1. Log in with the account that owns the site.
2. Paste `https://aminadavhadari.github.io` into the search box at the top ("URL
   inspection").
3. Click **"Request indexing"**.

That asks Google to re-check the page sooner. (If the site isn't in Search
Console, you can skip this — Google will still update on its own over time.)
