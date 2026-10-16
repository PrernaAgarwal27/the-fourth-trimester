# The Fourth Trimester — Website

A responsive, multi-section static website for postpartum education, workshops, family guidance, and one-to-one educational sessions.

## Files
- `index.html` — page content and sections
- `styles.css` — responsive design, blush pink / cream / sage palette, original CSS illustrations
- `script.js` — mobile navigation and booking/payment/social link configuration

## Preview locally
1. Extract the ZIP file.
2. Open `index.html` in a modern browser. Internet is needed to load the optional Google Fonts; the page otherwise works without them.

## Add your real booking/payment links
Open `script.js` in a text editor and edit the `SITE_LINKS` values near the top. Example:

```js
const SITE_LINKS = {
  workshopBooking: "https://calendly.com/YOUR-NAME/workshop",
  oneToOneBooking: "https://calendly.com/YOUR-NAME/one-to-one",
  guidePayment: "https://YOUR-PAYMENT-PROVIDER.example/payment-link",
  instagram: "https://www.instagram.com/YOUR-PAGE/",
  contactEmail: "mailto:hello@yourdomain.com"
};
```

Use real URLs supplied by your own providers; the example payment URL above is only illustrative. Do not put payment card details or secret API keys in these files. Use a hosted checkout from your payment provider.

## Free publishing with GitHub Pages
1. Create/sign in to a GitHub account at https://github.com/.
2. Create a **public** repository, for example `the-fourth-trimester`.
3. Upload `index.html`, `styles.css`, `script.js` to the repository root (not inside another folder).
4. Open repository **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/(root)`, then Save.
6. Wait for the published URL shown in the Pages section. It will usually look like `https://YOUR-USERNAME.github.io/the-fourth-trimester/`.
7. Open that URL on a phone and computer and test every button.

Alternative: Netlify Drop at https://app.netlify.com/drop can publish a static site by dragging in the unzipped site folder, subject to the platform's current account and usage terms.

## Before launch checklist
- Replace every booking/payment/social/contact placeholder in `script.js`.
- Replace “Add your price”, “Add date”, and “Add duration” with actual offers.
- Add a real founder introduction and a working contact address.
- Test booking links and hosted checkout on mobile.
- Add privacy notice, cancellation/refund policy, and legally required business disclosures for your business location and audience.
- Keep this as educational support, not a claim to provide medical diagnosis or treatment.
- Do not collect sensitive health information through an unsecured form.
- Add a custom domain later if desired; it is not required for initial testing.

## Important
This package is a front-end website only. It does not process payments, store customer information, or book appointments by itself. Booking and payment work only after you connect hosted provider URLs. Fees, account eligibility, custom domains, and free-tier limits depend on the providers you choose.
