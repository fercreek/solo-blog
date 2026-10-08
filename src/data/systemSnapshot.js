// Dated snapshot of the agent system. The numbers are measured on the local
// machine (the repos behind them are private) and committed by hand, so the
// page always shows the date and the home teaser hides them once they go stale.
export const systemSnapshot = {
  takenOn: '2026-10-08',
  staleAfterDays: 30,
  agents: 16,
  launches30d: 734,
  ownLaunches30d: 168,
  skills: 102,
  hooks: 26,
  blocked30d: 74,
  attempts30d: 812,
  boardChecks: 21,
  lessons: 380,
  lessonRepos: 9,
};

export const isSnapshotStale = (now = new Date()) => {
  const taken = new Date(`${systemSnapshot.takenOn}T00:00:00Z`);
  const days = (now.getTime() - taken.getTime()) / 86400000;
  return days > systemSnapshot.staleAfterDays;
};

export const snapshotDateLabel = (language) =>
  new Date(`${systemSnapshot.takenOn}T00:00:00Z`).toLocaleDateString(
    language === 'es' ? 'es-MX' : 'en-US',
    { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' },
  );
