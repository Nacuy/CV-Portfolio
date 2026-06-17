export function formatEducationPeriod(
  startDate: string,
  endDate: string | null,
  now = new Date(),
): string {
  const start = new Date(startDate);
  const startYear = start.getFullYear();

  if (now < start) {
    return `Starting ${start.toLocaleDateString("en-US", { month: "short", year: "numeric" })}`;
  }

  if (endDate == null) {
    return `${startYear} - Present`;
  }

  return `${startYear} - ${new Date(endDate).getFullYear()}`;
}

export function hasEducationStarted(
  startDate: string,
  now = new Date(),
): boolean {
  return now >= new Date(startDate);
}
