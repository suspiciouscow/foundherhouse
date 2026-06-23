---
# ─────────────────────────────────────────────────────────────────────────
#  HOW TO UPDATE THIS PAGE  (everything lives in this one file)
#
#  ▸ Add a resident: under the right cohort's "residents:", add a new entry.
#      - name: "Full Name"
#        linkedin: "https://www.linkedin.com/in/username"   # all socials
#        x: "https://x.com/username"                         # are OPTIONAL —
#        website: "https://example.com"                      # delete any line
#        instagram: "https://www.instagram.com/username"     # you don't need
#
#  ▸ Founders are listed separately under "founders:" (shown at the top).
#
#  ▸ Add a cohort: copy a whole "- house:" block, change house/season/label.
#      house can be "SF" or "NYC". Order top-to-bottom = order on the page.
#      Set "residents: []" for a cohort that hasn't been announced yet.
# ─────────────────────────────────────────────────────────────────────────
founders:
  - name: "Miki Safronov-Yamamoto"
    role: "Co-Founder"
    linkedin: "https://www.linkedin.com/in/mikisafronov/"
  - name: "Anantika Mannby"
    role: "Co-Founder"
    linkedin: "https://www.linkedin.com/in/anantika/"

cohorts:
  - house: "SF"
    season: "Summer 2026"
    label: "Current Cohort"
    residents:
      - name: "Myra Kirmani"
        linkedin: "https://www.linkedin.com/in/myrakirmani/"
      - name: "Sahiti Dasari"
        linkedin: "https://www.linkedin.com/in/sahitidasari/"
      - name: "Georgina (Gigi) Alcaraz"
        linkedin: "https://www.linkedin.com/in/georgina-alcaraz/?locale=en"
      - name: "Simmi Sen"
        linkedin: "https://www.linkedin.com/in/simmi-sen/"
      - name: "Caraíosa O’Farrell"
        linkedin: "https://www.linkedin.com/in/cara%C3%ADosa-o-farrell/"
      - name: "Cheyoung Ahn"
        linkedin: "https://www.linkedin.com/in/cheyoungahn444/"
      - name: "Rayna Arora"
        linkedin: "https://www.linkedin.com/in/rayna-arora-4a2307214/"

  - house: "NYC"
    season: "Summer 2026"
    label: "Coming Soon"
    residents: []

  - house: "SF"
    season: "Summer 2025"
    label: "Inaugural Cohort"
    residents:
      - name: "Ava Poole"
        linkedin: "https://www.linkedin.com/in/avapoole/"
      - name: "Naciima Mohamed"
        linkedin: "https://www.linkedin.com/in/naciima-mohamed/"
      - name: "Fatimah Hussain"
        linkedin: "https://www.linkedin.com/in/fatimah-hussain/"
      - name: "Chloe Hughes"
        linkedin: "https://www.linkedin.com/in/chloeahughes/"
      - name: "Sonya Jin"
        linkedin: "https://www.linkedin.com/in/sonya-jin/"
      - name: "Danica Sun"
        linkedin: "https://www.linkedin.com/in/danica-sun-/"
---

# Residents

This file is the single source of truth for the Residents page. Edit the
`founders:` and `cohorts:` lists in the frontmatter above — no code changes
needed. See the instructions at the top of the frontmatter for the format.
