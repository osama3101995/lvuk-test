

# LeoVegas Candidate Coding Task – User Search Component

## What I Did

As part of the LeoVegas Native App Developer task, I refactored and enhanced the **User Search** component located in the `Task` tab. The following improvements were made:

### Bug Fixes

* **Duplicate Fetch Removed**: The original component made two identical API calls — one to fetch and store users, and another inside a filtered `useEffect`. I consolidated these into a single fetch with memoized filtering for efficiency.

### Performance Optimizations

* **`useMemo` for Filtering**: Replaced repeated `useEffect`-based filtering with `useMemo` to avoid unnecessary re-renders and computations when the user list doesn’t change.
* **Type Safety Added**: Introduced TypeScript types (e.g., `User` interface) to ensure better developer experience and reduce potential runtime bugs.
* **Error Handling**: Added `.catch()` to handle network failures gracefully.

### UI/UX Improvements

* **Jumbotron Header**: Designed a visually engaging header with a `paperplane.fill` icon using a background container (`jumbotron`) to separate it visually from the main content.
* **Clear Search Button**: Added a pressable clear ("X") button inside the search input for faster query reset.
* **List Styling**: Styled the list with spacing, borders, and empty state messaging for improved readability and feedback.
* **Responsive Height**: Adjusted `FlatList` container to occupy 55% of the screen for optimal scrolling without full-screen overflow.
* **SafeAreaView**: Wrapped content to ensure consistent spacing on all devices.

---

## Reasoning Behind the Changes

* **Performance matters**: Even if this component is simple now, apps tend to scale fast. Using `useMemo` prepares it for a heavier workload without unnecessary re-renders.
* **Cleaner UX**: Small things like a clear search button and empty-state messages significantly improve user interaction and reduce frustration.
* **Scalability & Maintainability**: Strong typing, proper layout separation, and error handling lay the foundation for a maintainable and scalable codebase.

---

## How to Run

1. Clone the base repo:
   `git clone git@github.com:osama3101995/lvuk-test.git`

2. Check the component in `app/tabs/task.tsx` with this version.

3. Run the project:
   `npx expo start` (or follow the steps in the base repo README)

---

## Thank You!

Thank you for reviewing my submission! I kept the time within the suggested 2-hour limit and focused on delivering clean, maintainable code while improving performance and user experience.
Looking forward to your feedback!
