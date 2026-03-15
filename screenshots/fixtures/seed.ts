// Reference: dummy data used in all screenshots
// These must match what is seeded in the demo instance

export const DEMO = {
  communityName: 'Kovács Anna Akadémia',
  adminEmail: 'demo-admin@egyutter.hu',
  memberCount: 24,
  courses: [
    {title: 'Webfejlesztés Alapjai', chapters: 3, lessons: 12},
    {title: 'Marketing Mesterfolyam', chapters: 2, lessons: 8},
    {title: 'Üzleti Angol', price: '49 990 Ft/hó'},
  ],
  events: [
    {title: 'Online Közösségi Meetup', daysFromNow: 3},
    {title: 'Webfejlesztés Workshop', daysFromNow: 10},
  ],
} as const;
