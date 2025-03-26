// Simplified version of the cn utility that doesn't rely on external dependencies
export function cn(...classes: (string | undefined | null | false | 0)[]) {
  return classes.filter(Boolean).join(" ")
}

