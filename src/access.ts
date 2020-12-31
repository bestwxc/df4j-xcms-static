// src/access.ts


export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  // const { currentUser } = initialState || {};
  return {
    canAdmin: true,
    // @ts-ignore
    none: true
  };
}
