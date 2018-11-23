export function isDev() {
  return (process.env.NODE_ENV === 'development');
}

export function titleCase(string = null) {
  if (!string) return string;
  return string.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

export function retryLoop({
  fn = () => {},
  reAttempCondition = () => true,
  maxAttempts = 5,
  attempts = 0,
  timer = 500,
}) {
  if (attempts >= maxAttempts) return false;
  if (reAttempCondition()) {
    return setTimeout(() => {
      retryLoop({
        fn,
        reAttempCondition,
        maxAttempts,
        timer,
        attempts: ++attempts, // eslint-disable-line
      });
    }, timer);
  }

  return fn();
}
