---
title: Button
description: A clickable element used to trigger actions and communicate calls to action. Buttons use labels and optional icons to express what action will occur when the user interacts with them.
---

![Button component preview](/exampleDisplay.png)

::card-group
  :::card
  ---
  icon: i-simple-icons-figma
  target: _blank
  title: Figma
  to: https://www.figma.com/design/B6xy0DmbnSSsiXY0phVpqP/Shared-web-library--Beta-?node-id=3008-2182&t=F2NkDxiuAljYuoW1-4
  ---
  :::

  :::card
  ---
  icon: i-simple-icons-storybook
  target: _blank
  title: Storybook
  to: https://design.tbcbank.loc/?path=/docs/shared-web-library-button--docs
  ---
  :::
::

::tabs{.w-full}
  :::tabs-item{icon="i-lucide-layout" label="Usage"}
  ## Usage

  Buttons are one of the most fundamental interactive elements in any UI. They allow users to take actions, make choices, and navigate through flows. Each button clearly communicates its purpose through its label text and, optionally, a supporting icon.

  The `tbcx-button` component provides seven distinct type variants — Primary, Secondary, Negative, Positive, Tertiary, Icon flat, and Icon outlined — each designed to express a specific level of emphasis and semantic intent. Primary buttons are reserved for the principal call to action on a page, while Secondary, Tertiary, and icon-based variants serve progressively lower-emphasis roles. Negative and Positive variants carry semantic color meaning for destructive and affirmative actions respectively.

  Each button supports three sizes (Large, Medium, Small) and five interactive states (Initial, Hovered, Focused, Pressed, Loading), plus a Disabled flag. This gives designers and developers a comprehensive toolkit to build clear, accessible action hierarchies across any interface.

  Buttons should not be used as navigational elements. When the desired action is to take the user to a new page, use a link component instead.

  :video{controls height="90" src="https://www.youtube.com/watch?v=AF5mBphAefA" width="100%"}

  ## Variants

  The Button component is organized across four variant dimensions: **Type**, **Size**, **State**, and **Disabled**.

  ### Types

  | Type          | Description                                                                                                                                                 |
  | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Primary       | The principal call to action on the page. Use sparingly — only one Primary button should appear per screen section.                                         |
  | Secondary     | For secondary actions, always paired with a Primary button. Performs the negative action of the set, such as "Cancel" or "Back".                            |
  | Negative      | For actions that could have destructive effects on the user's data, such as "Delete" or "Remove". Uses semantic red coloring.                               |
  | Positive      | For affirmative or confirming actions that carry a positive outcome, such as "Approve" or "Confirm". Uses semantic green coloring.                          |
  | Tertiary      | For less prominent, sometimes independent actions. Rendered as text-style buttons without a filled container. Works well standalone or paired with Primary. |
  | Icon flat     | Icon-only button with a flat filled container. Use when space is constrained and the icon is universally recognizable.                                      |
  | Icon outlined | Icon-only button with an outlined container (visible border, no fill). Use for supplementary icon actions with slightly more visual weight than flat.       |

  ### Sizes

  | Size       | Height (Primary/Secondary/Negative/Positive) | Height (Tertiary) | Height (Icon flat/outlined) |
  | ---------- | -------------------------------------------- | ----------------- | --------------------------- |
  | Large (l)  | 56px                                         | 24px              | 56×56px                     |
  | Medium (m) | 48px                                         | 20px              | 48×48px                     |
  | Small (s)  | 36px                                         | 16px              | 36×36px                     |

  ### States

  | State   | Description                                                                                                        |
  | ------- | ------------------------------------------------------------------------------------------------------------------ |
  | Initial | Default resting state of the button.                                                                               |
  | Hovered | Visual feedback when the cursor is over the button.                                                                |
  | Focused | Keyboard focus indicator, essential for accessibility.                                                             |
  | Pressed | Active/down state while the button is being clicked or tapped.                                                     |
  | Loading | Replaces the label with a spinner to indicate an in-progress action. The button is non-interactive during loading. |

  ### Primary

  ![Primary variant of Button](/images/docs/button/variants/primary.png)

  The Primary button is the highest-emphasis action on the page. It draws the most visual attention with a solid filled container and bold label. Use it for the principal call to action — such as "Submit", "Save", or "Continue". Only one Primary button should appear per logical section of the UI.

  ### Secondary

  ![Secondary variant of Button](/images/docs/button/variants/secondary.png)

  The Secondary button is always used alongside a Primary button. It represents the complementary or negative action of a pair — typically "Cancel", "Back", or "Dismiss". It should never appear in isolation or be used for a positive/primary action.

  ### Negative

  ![Negative variant of Button](/images/docs/button/variants/negative.png)

  The Negative button is semantically colored (red) to signal destructive or irreversible actions such as "Delete", "Remove", or "Revoke access". Use it when the action could have a serious negative consequence on the user's data or experience.

  ### Positive

  ![Positive variant of Button](/images/docs/button/variants/positive.png)

  The Positive button is semantically colored (green) to signal affirmative or success-oriented actions such as "Approve", "Confirm", or "Accept". It clearly communicates a constructive outcome.

  ### Tertiary

  ![Tertiary variant of Button](/images/docs/button/variants/tertiary.png)

  The Tertiary button is a text-only action with no filled container in its default state. It is ideal for low-prominence actions, page-header actions where a Primary button exists in the content below, empty-state CTAs, or as a standalone link-like action. It should not be used in fluid/full-bleed layouts.

  ### Icon flat

  ![Icon flat variant of Button](/images/docs/button/variants/icon-flat.png)

  The Icon flat button renders only an icon inside a flat filled container. Use it for well-known universal actions (e.g., close, edit, settings) in toolbars or compact UI areas. Always provide a tooltip with a text label for accessibility.

  ### Icon outlined

  ![Icon outlined variant of Button](/images/docs/button/variants/icon-outlined.png)

  The Icon outlined button renders an icon inside a container with a visible border and no fill. It provides slightly more visual weight than the flat variant and works well for supplementary actions where a subtle border helps distinguish the button from surrounding content.

  ## Do's

  ### Do: Use only one Primary button per section to establish a clear hierarchy

  ![Do: Use only one Primary button per section](/images/docs/button/dos/do-1.png)

  A layout should contain a single high-emphasis Primary button that makes it clear other buttons are subordinate. This gives users a focused path forward and prevents competing calls to action. If multiple actions share equal importance, use Tertiary buttons instead.

  ### Do: Always pair Secondary buttons with a Primary button

  ![Do: Pair Secondary with Primary](/images/docs/button/dos/do-2.png)

  Secondary buttons are designed to perform the negative action of a pair — "Cancel", "Back", or "Dismiss". They should never appear alone. When used together, the Secondary button's lower visual weight naturally defers to the Primary action, creating a clear decision flow.

  ### Do: Use the verb + noun formula for button labels

  ![Do: Use verb + noun labels](/images/docs/button/dos/do-3.png)

  Write button labels as actionable phrases using the {verb} + {noun} pattern (e.g., "Save changes", "Add member", "Delete file"). This removes ambiguity about what will happen when the button is clicked. Exceptions are common short actions like "Cancel", "Close", or "Done".

  ### Do: Always provide a tooltip for icon-only buttons

  ![Do: Provide tooltips for icon-only buttons](/images/docs/button/dos/do-4.png)

  Regardless of how recognizable an icon may be, a tooltip with a text label is always required for Icon flat and Icon outlined buttons. This ensures accessibility for keyboard and screen reader users and eliminates guesswork for all users.

  ### Do: Keep button labels concise and in sentence case

  ![Do: Keep labels concise](/images/docs/button/dos/do-5.png)

  Button labels should be 1–3 words (max 4 words, under 20 characters). Always use sentence case — capitalize only the first word and proper nouns. Avoid punctuation, emoji, or all-caps formatting. Concise labels improve scannability and reduce cognitive load.

  ## Don'ts

  ### Don't: Use more than one Primary button per section

  ![Don't: Multiple Primary buttons](/images/docs/button/donts/dont-1.png)

  Having two or more Primary buttons in the same section creates competing visual hierarchies and confuses users about which action is most important. Demote secondary actions to Secondary, Tertiary, or icon-only buttons to maintain a clear decision path.

  ### Don't: Use buttons for navigation — use links instead

  ![Don't: Use buttons for navigation](/images/docs/button/donts/dont-2.png)

  Buttons should trigger actions (submit, save, delete), not navigate to new pages. When the intended behavior is to take the user to a new URL, use a link component instead. Misusing buttons as links breaks user expectations and harms accessibility (screen readers announce them differently).

  ### Don't: Use the Loading state for long-running operations

  ![Don't: Loading for long operations](/images/docs/button/donts/dont-3.png)

  The Loading (spinner) state should be reserved for quick, indeterminate actions expected to complete within 5 seconds or less. For longer or determinate operations, use a progress bar or progress indicator outside the button so the user can track progress and understand the expected wait time.

  ### Don't: Use icon-only buttons for destructive or critical actions

  ![Don't: Icon-only for destructive actions](/images/docs/button/donts/dont-4.png)

  Destructive actions like "Delete" or "Remove" must always include a visible text label. The severity of these actions requires explicit clarity — an icon alone is too easy to misinterpret or accidentally tap. Use the Negative type variant with a clear label instead.

  ### Don't: Override button colors with custom values

  ![Don't: Override button colors](/images/docs/button/donts/dont-5.png)

  The semantic color variants (Primary, Secondary, Negative, Positive) have been carefully designed for consistency and WCAG-compliant contrast ratios. Applying custom background or text colors breaks the design system's visual language and can introduce accessibility issues. Use the provided type variants to communicate intent.

  ## Usage Examples

  Here are common usage patterns for Button:

  ### Form submission action

  ![Button used in a form submission context](/images/docs/button/examples/example-1.png)

  In a form, the Primary button is placed at the bottom as the main submission action ("Save changes" or "Submit"). A Secondary button ("Cancel") sits beside it to allow the user to discard changes. The Primary button takes default focus when the form is complete, enabling keyboard-driven submission with `Enter`.

  ### Destructive confirmation dialog

  ![Button used in a destructive confirmation dialog](/images/docs/button/examples/example-2.png)

  When a user initiates a destructive action, a confirmation dialog appears with a Negative button ("Delete account") as the primary action and a Secondary or Tertiary button ("Cancel") as the escape route. The Negative variant's red coloring signals danger and prompts the user to pause before proceeding.

  ### Toolbar with icon-only buttons

  ![Button used in a toolbar context](/images/docs/button/examples/example-3.png)

  In a compact toolbar, Icon flat buttons provide space-efficient access to common actions like edit, copy, and delete. Each button has a tooltip that appears on hover/focus, ensuring every action is discoverable. Consistent icon sizing (using the same Size variant across all toolbar buttons) maintains visual alignment.

  ### Page header with Tertiary action

  ![Button used in a page header](/images/docs/button/examples/example-4.png)

  A Tertiary button in the page header ("Add new item") avoids competing with the Primary action in the content area below. This pattern is ideal for pages where the primary flow happens within the content — such as a data table with its own Primary action — while the header offers a secondary entry point.

  ## Additional Notes

    ::::note
    **Accessibility:** Ensure all interactive states (Hovered, Focused, Pressed) maintain a minimum 3:1 contrast ratio against the background. The Focused state must include a visible focus ring for keyboard navigation. Disabled buttons should maintain layout continuity but must not be interactive — use `aria-disabled` and remove from tab order when appropriate.
    ::::

    ::::note
    **Loading behavior:** When a button enters the Loading state, the label is replaced by a spinner and the button becomes non-interactive. Do not allow repeated submissions while loading. If the operation may take longer than 5 seconds, consider using an external progress indicator and keeping the button in a disabled state instead.
    ::::

    ::::note
    **Icon-only accessibility:** Icon flat and Icon outlined buttons must always include an `aria-label` or `aria-labelledby` attribute that describes the action. The tooltip text and aria label should match to provide a consistent experience across visual and assistive technology users.
    ::::
  :::

:tabs-item{icon="i-lucide-code" label="Code"}
::
