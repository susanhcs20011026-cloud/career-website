// Native disclosures remain usable without JavaScript. Keep the explicit state in sync for assistive technology.
document.querySelectorAll('.homepage .experience-disclosure, .homepage .research-disclosure').forEach(details => {
  const summary = details.querySelector('summary');
  const sync = () => summary.setAttribute('aria-expanded', String(details.open));
  details.addEventListener('toggle', sync);
  sync();
});
