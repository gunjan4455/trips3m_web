export const ROSTER_VIEW_SHOW = 'ROSTER_VIEW_SHOW';
export const ROSTER_VIEW_HIDE = 'ROSTER_VIEW_HIDE';

export const showRoster = (data) => ({
  type: ROSTER_VIEW_SHOW,
  data
});

export const hideRoster = () => ({
  type: ROSTER_VIEW_HIDE
});
