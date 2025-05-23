export function cleanData(rawChat) {
  console.log(rawChat)

  return rawChat
    .split('\n')
    .map(line => line.replace(/^\[\d{4}-\d{2}-\d{2}, \d{1,2}:\d{2}:\d{2} [APM]{2}\] /, '')) // Remove timestamp
    .join('\n')
    .trim();
}
