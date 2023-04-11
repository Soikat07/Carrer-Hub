import React from 'react';

const Blog = () => {
  return (
    <div className="my-container">
      <h1 className="text-3xl">Here are the Questions & Answers</h1>
      <ol>
        <li>
          <h3 className="text-xl font semibold mt-2">
            Q-1: When should we use contextApi?
          </h3>
          <p>
            Ans:Context API in React can be used for managing global application
            state and passing data from a parent component to its children
            without the need for prop drilling. It can help us to simplify our
            code and make it more maintainable by reducing the amount of code
            required to pass data between components.
          </p>
        </li>
        <li>
          <h3 className="text-xl font semibold mt-2">
            Q-2: What is a custom hook?
          </h3>
          <p>
            Ans:Custom hooks in react are like reusable functions. Custom hooks
            can be used to handle common concerns like fetching data, managing
            state, and interacting with APIs. By using custom hooks,we can
            reduce code duplication and improve the overall organization and
            maintainability of our code.
          </p>
        </li>
        <li>
          <h3 className="text-xl font semibold mt-2">Q-3: What is useRef?</h3>
          <p>
            Ans: The useRef Hook allows us to persist values between renders.
            It can be used to store a mutable value that does not cause a
            re-render when updated. It can be used to access a DOM element
            directly.
          </p>
        </li>
        <li>
          <h3 className="text-xl font semibold mt-2">Q-4: What is useMemo?</h3>
          <p>
            Ans: useMemo is a React Hook that allows us to memoize a function or
            a value and recompute it only when one of its dependencies changes.
            Memoization is a technique used to optimize expensive calculations
            by caching the results of a function and returning the cached result
            when the same inputs occur again.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Blog;