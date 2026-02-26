import { useLayoutEffect, useRef } from 'react';

function areDependenciesEqual(prevDeps?: any[], currentDeps?: any[]) {
  // If both undefined, they're equal
  if (prevDeps === undefined && currentDeps === undefined) return true;

  // If one is undefined and other isn't, they're different
  if (prevDeps === undefined || currentDeps === undefined) return false;

  // If lengths differ, they're different
  if (prevDeps.length !== currentDeps.length) return false;

  // Compare each element
  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== currentDeps[i]) return false;
  }

  return true;
}

function useMyEffect(callback: () => void | (() => void), deps?: any[]) {
  const prevDepsRef = useRef<any[]>(deps);
  const prevCleanupRef = useRef<(() => void) | undefined>();

  useLayoutEffect(() => {
    const hasDepChanged = !areDependenciesEqual(prevDepsRef.current, deps);
    if (hasDepChanged) {
      if (prevCleanupRef.current) {
        prevCleanupRef.current();
      }
      const cleanup = callback();
      if (typeof cleanup === 'function') {
        prevCleanupRef.current = cleanup;
      }
    }
    prevDepsRef.current = deps;

    return () => {
      if (prevCleanupRef.current) {
        prevCleanupRef.current();
      }
    };
  }, [deps, callback]);
}

export default useMyEffect;
