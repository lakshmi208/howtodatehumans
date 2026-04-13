

## Add "Year of Story" Field to Story Capture Form

**`src/components/EventCard.tsx`**
- Add a new `year` state variable
- Insert a text input between the story textarea and email field with:
  - Placeholder: `"e.g. 1945, 1989, 2010, 2024"`
  - Label: `"Year of story"`
  - Type: text (to allow flexibility), maxLength 4
- Include `Year: year` in the `fields` object submitted to `form_submissions`
- Reset `year` state on submit and cancel

One file, three small additions.

