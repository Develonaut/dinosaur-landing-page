// Permission Dictionary
export const PROMPT_GRANTED = 'granted';
export const PROMPT_DENIED = 'denied';
export const PROMPT_DEFAULT = 'default';

// Actions
export const PROMPT_USER = 'PROMPT_USER';
export const PROMPT_REDIRECT = 'PROMPT_REDIRECT';
export const PROMPT_ATTACH_LISTENERS = 'PROMPT_ATTACH_LISTENERS';

export function promptUser() {
  return {
    type: PROMPT_USER,
  };
}

export function redirectToAppStore() {
  return {
    type: PROMPT_REDIRECT,
  };
}

export function attachPromptListeners() {
  return {
    type: PROMPT_ATTACH_LISTENERS,
  };
}
