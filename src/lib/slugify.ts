export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function deslugify(slug: string, categories: string[]): string | undefined {
  return categories.find((c) => slugify(c) === slug);
}
