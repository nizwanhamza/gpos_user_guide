/**
 * Prefixes site-absolute links in Markdown ("/till/making-a-sale/") with the deploy base path,
 * so the same content works locally and on GitHub Pages under /<repo>/.
 */
export function rehypeBaseLinks({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  const fix = (url) =>
    typeof url === 'string' && prefix && url.startsWith('/') && !url.startsWith('//') && !url.startsWith(prefix + '/')
      ? prefix + url
      : url;
  const walk = (node) => {
    if (node.type === 'element' && node.properties) {
      if (node.tagName === 'a') node.properties.href = fix(node.properties.href);
      if (node.tagName === 'img') node.properties.src = fix(node.properties.src);
    }
    node.children?.forEach(walk);
  };
  return (tree) => walk(tree);
}
