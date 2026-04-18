import React, { useState, useEffect } from 'react';

const FunctionalLifecycleExample = () => {
  const [favoriteColor, setFavoriteColor] = useState("red"); // State initialization

  // useEffect replaces componentDidMount, componentDidUpdate, and componentWillUnmount
  useEffect(() => {
    console.log('Component mounted or updated'); // Runs after every render by default

    const timerId = setTimeout(() => {
      setFavoriteColor("yellow"); // Triggers re-render (update)
    }, 1000);

    // The return function is the cleanup phase, replacing componentWillUnmount
    return () => {
      clearTimeout(timerId); // Clean up the timer when the component is removed
      console.log('Component will unmount (cleanup)');
    };
  }, []); // Empty dependency array means it runs only once (like componentDidMount)

  return (
    <div>
      <h1>My Favorite Color is {favoriteColor}</h1>
    </div>
  );
}

export default FunctionalLifecycleExample;
