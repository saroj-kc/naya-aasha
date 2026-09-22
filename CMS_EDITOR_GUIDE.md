# Naya Aasha CMS editor guide

## Sign in

After deployment, visit `https://nayaaasha.org.np/admin/` and sign in with an authorized GitHub account.

## Editing the whole site

- **Website settings:** organization name, contact details, registration text, social links, and donation information.
- **Website pages:** homepage, About/Mission/Vision/Values, Get Involved, Contact, Privacy, and Safeguarding.
- **Programs:** create, reorder, feature, draft, or update programs.
- **Impact stories:** write stories, add approved images, and select one homepage feature.
- **News & updates:** publish notices, events, opportunities, and organizational updates.
- **Team & leadership:** manage approved team profiles.
- **Reports & documents:** publish annual reports, audited statements, policies, and registration documents.

## Publishing workflow

1. Create or edit an entry.
2. Keep new or unverified material as a **draft**.
3. Check names, dates, figures, consent, and supporting records.
4. Move the entry to review.
5. An authorized editor publishes it.
6. Vercel automatically rebuilds the website from GitHub.

## Safety rules

- Never upload a child’s image or story without appropriate informed consent.
- Never publish medical records, exact addresses, identity documents, or unnecessary identifying information.
- Use “people living with HIV”; avoid stigmatizing language.
- Do not enable donation details until the organization has verified and formally approved them.
- Do not publish impact figures unless records support them.
- Keep GitHub OAuth secrets in Vercel environment variables, never in the CMS or repository.

## Image guidance

- Prefer wide images around 1600 × 900 pixels.
- Compress images before uploading.
- Use dignified images that show agency, participation, and progress—not pity.
- Add context in nearby text and avoid misleading stock photography.

## Recovery and portability

Every edit is saved as a Git commit. This gives the organization a content history and makes earlier versions recoverable. The site can be moved from Vercel to another static host because the website and content stay in the GitHub repository.