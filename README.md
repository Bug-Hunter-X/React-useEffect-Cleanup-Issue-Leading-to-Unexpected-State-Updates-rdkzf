# React useEffect Cleanup Issue

This repository demonstrates a common error in React applications where state updates continue after a component unmounts, leading to unexpected behavior or even errors.  The problem stems from an incorrect implementation of the `useEffect` hook's cleanup function.

The `bug.js` file contains the buggy code. The `bugSolution.js` provides the corrected version.

## Problem

The `useEffect` hook in the buggy component sets an interval that updates the count state every second. However, the cleanup function (`return () => clearInterval(intervalId);`) is not properly preventing the interval from continuing after the component is unmounted.

## Solution

The solution involves ensuring that the cleanup function is executed properly to stop the interval before the component is removed from the DOM.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the counter in the browser.  Unmount the component (e.g., by navigating away) and see if the count still increments unexpectedly.