# IA340 · Week 11 · Google Sheets LLM classroom demo

**Public, synthetic demonstration only.** No real X/Twitter data, students, private addresses, credentials, or Canvas data are included.

## What it teaches

One **row is one message**. Columns `A` and `B` contain the data; the same six AI tasks run down the rows:

| Column | Field | Input |
|---|---|---|
| A | Text Message | synthetic social-media-style text |
| B | Location / Address | real publicly listed venue |
| C | Sentiment | A |
| D | Anger? | A |
| E | Organizations | A |
| F | Summary | A |
| G | Latitude | B |
| H | Longitude | B |

The CSV intentionally includes **only the two input columns**. Copy the six sample formulas from the [GitHub Pages demo](./index.html) into C2:H2 and fill down selectively for live teaching. Do **not** generate all 60 answers automatically. Google Sheets `=AI()` availability and quota depend on the current account. No API key is required within the spreadsheet formula.

**Important:** LLM-estimated latitude/longitude is not authoritative geocoding. Validate against a trusted map/geocoding tool before mapping. Outputs can be wrong or inconsistent.

Google documentation: https://support.google.com/docs/answer/15877199

## Data provenance

All ten **messages are invented** for teaching; there is no real post, person, or user attached to an address. The address strings describe public venues. Verified against sources including:

- JMU: https://www.jmu.edu/mailservices/index.shtml
- Carnegie Hall: https://shop.carnegiehall.org/pages/contact-us
- Smithsonian National Air and Space Museum: https://airandspace.si.edu/visit/museum-dc/directions
- Space Needle: https://www.spaceneedle.com/contact
- Googleplex example: https://developers.google.com/maps/documentation/geocoding/start-v4
- Art Institute of Chicago: https://shop.artic.edu/pages/store-information
- Georgia Aquarium: https://www.georgiaaquarium.org/frequently-asked-questions/
- Boston Public Library: https://libraries.state.ma.us/library/pu-boston-public
- Denver Art Museum: https://www.denverartmuseum.org/en/directions-and-parking
- Griffith Observatory: https://griffithobservatory.org/wp-content/uploads/2022/12/Griffith_Observatory_Admin_Intern_I_2022.12.09_Systems.pdf

## Boundary

This is an optional **Monday lecture demo**, not a new Lab requirement. The Wednesday Lab retains its Colab, Gemini LLM API, MongoDB, and Python workflow. Only merge this public site content after instructor approval.
