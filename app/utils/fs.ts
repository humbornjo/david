import { promises as fs } from 'fs';

export async function getAllFiles(dirPath: string): Promise<string[]> {
  const dirents = await fs.readdir(dirPath, { withFileTypes: true });
  const files: string[] = [];

  for (const dirent of dirents) {
    if (dirent.isFile()) {
      files.push(`${dirPath}/${dirent.name}`);
    }
  }
  return files;
}
