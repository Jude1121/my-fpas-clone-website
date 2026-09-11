// Resolves a bare filename (e.g. "yang-yang.png") to the URL Vite
// generates for it. Works from anywhere because the glob path is
// absolute (rooted at the project root), not relative to this file.
const imageModules = import.meta.glob('/src/lib/assets/planners/*.{png,jpg,jpeg,PNG,JPG,JPEG}', {
	eager: true,
	import: 'default'
});

const imageMap = Object.fromEntries(
	Object.entries(imageModules).map(([path, url]) => [path.split('/').pop(), url])
);

export function resolvePlannerImage(filename) {
	return imageMap[filename] ?? '';
}