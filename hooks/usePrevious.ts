import { useEffect, useRef } from 'react';

/** This is the answer for
 * "When using hooks how do I get the previous value of props or state?"
 * @see https://usehooks.com/usePrevious/
 * */

function usePrevious<T>(value: T): T {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref: any = useRef<T>();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export default usePrevious;
