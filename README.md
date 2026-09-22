# Naya Aasha website

A long-term, database-free nonprofit website built with **Astro + Decap CMS**, designed for deployment on the free tiers of **GitHub and Vercel**.

## What the CMS manages

- Organization identity and contact details
- Donation settings and verified payment information
- Homepage sections and SEO
- About page, mission, vision, and values
- Get Involved and Contact pages
- Privacy and safeguarding summaries
- Programs
- Impact stories
- News and updates
- Team and leadership
- Reports and downloadable documents
- Image/file uploads
- Draft review and editorial workflow

Technical security, hosting, OAuth, and deployment settings remain in code so content editors cannot accidentally break them.

## Run locally

```bash
npm install
npm run dev
```

Website: `http://localhost:4321/`  
CMS: `http://localhost:4321/admin/`

For local CMS editing, run `npx decap-server` in a second terminal.

## Free deployment setup

1. Create a free GitHub repository named `naya-aasha` and push this project.
2. In `public/admin/config.yml`, replace `YOUR-GITHUB-USERNAME/naya-aasha` with the actual repository.
3. Import the repository into a free Vercel account. Framework preset: Astro; build command: `npm run build`; output: `dist`.
4. Add `nayaaasha.org.np` and `www.nayaaasha.org.np` under Vercel Domains. Update DNS records at the `.org.np` domain provider using the values Vercel displays.
5. Create a free GitHub OAuth App:
   - Homepage URL: `https://nayaaasha.org.np`
   - Callback URL: `https://nayaaasha.org.np/api/callback`
6. In Vercel project settings, add environment variables:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
7. Redeploy, then visit `/admin/` and sign in with an authorized GitHub account.

## Important pre-launch work

- Verify registration status and legal organization name.
- Replace placeholder phone, email, address, and donation details.
- Keep `donationEnabled` off until bank/wallet details are approved.
- Connect the contact form to a free endpoint (for example, Web3Forms/Formspree free tier) or a custom Vercel function.
- Have privacy, safeguarding, complaints, finance, and consent procedures reviewed by qualified people.
- Never publish beneficiary identities, medical information, or children’s images without appropriate informed consent.
- Add real team members and verified reports.

## Long-term cost note

The software is open source and GitHub/Vercel have free tiers suitable for a small static nonprofit site. The `.org.np` domain process and any future high-volume services are outside the project; providers can change free-tier limits. All content remains portable in the Git repository, so the site is not locked to one host.
