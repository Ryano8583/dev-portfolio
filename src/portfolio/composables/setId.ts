let counter = 0;

export function setId(prefix: string) {
  return prefix + counter++;
}
