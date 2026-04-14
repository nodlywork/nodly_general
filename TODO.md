## TODO: Make Differentiators Responsive

**Status: Planning → Editing**

### File Analysis (Differentiators.js):
- 3-column grid (Freelance/Nodly/Consultora) × 5 rows (dimensions).
- Hover: short→long text expansion.
- Desktop: Full table OK.
- Mobile problem: Dense, cramped, hard to read/scroll.

### Plan:
**Desktop/Tablet (>768px)**: Keep 3-col table.
**Mobile landscape (<768px)**: 2-col scrollable (compact short texts).
**Mobile portrait (<480px)**: **Simplified accordion**:
  - Dimension → Nodly short (green) vs others (grey/red).
  - Tap expands to long comparison.
  - Priority: Nodly advantages, minimal data loss.

1. Add `useBreakpoint` hook.
2. Responsive grid/states.
3. Mobile: Accordion + icons/colors for quick scan.
4. Test iPhone SE landscape/portrait.

### Dependent Files:
- `app/components/Differentiators.js` (main).
- Reuse `app/hooks/useBreakpoint.js`.

✅ Differentiators responsive/simplified ✅
**CTA/Footer responsive analysis**:

**CTA.js**:
- Grid 1fr 420px → mobile stack.
- Form fields OK.
- Circles responsive.

**Footer.js**:
- Flex space-between → mobile stack.
- Links gap → small screens OK.

**Plan**: useBreakpoint + clamp padding + flex-direction: column mobile.

**Ready to edit**.
