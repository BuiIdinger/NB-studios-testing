let state = {};
let hasUnstoredState = false;

function storeState() {
  if (hasUnstoredState) {
  }
  hasUnstoredState = false;
}

export function updateState(newState) {
  state = newState;
  hasUnstoredState = true;
  requestIdleCallback(storeState);
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    storeState();   
  }
}); 