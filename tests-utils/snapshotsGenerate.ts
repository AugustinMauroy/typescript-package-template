import { basename, dirname, extname, join } from 'node:path';
import { snapshot } from 'node:test';

function snapshotPath(testFilePath?: string): string {
	if (!testFilePath) return '';

	const ext = extname(testFilePath);
	const filename = basename(testFilePath, ext);
	const base = dirname(testFilePath);

	return join(base, `${filename}.snap.cjs`);
}

snapshot.setResolveSnapshotPath(snapshotPath);
