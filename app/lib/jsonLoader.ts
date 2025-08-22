import {readFile} from 'fs/promises';
import {join} from 'path';
export const jsonLoader = async <T>(fileName: string): Promise<T | null> => {
  try {
    const filePath = join(process.cwd(), 'data', fileName);
    const fileContent = await readFile(filePath, 'utf-8');
    const data: T = JSON.parse(fileContent);
    return data;
  } catch (e) {
    console.error(`Error loading JSON file ${fileName}:`, e);
    return null;
  }
};
