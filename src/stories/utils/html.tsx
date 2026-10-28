// Renders a raw HTML string, so a story shows exactly the markup people copy.
export const html = (markup: string) => () => (
  <div dangerouslySetInnerHTML={{ __html: markup }} />
);
