import {readFile} from 'fs/promises';
import {join} from 'path';
export const jsonLoader = async <T>(fileName: string) => {
  try {
    const filePath = join(process.cwd(), 'data', fileName);
    const fileContent = await readFile(filePath, 'utf-8');
    const data: T[] = JSON.parse(fileContent);
    return data;
  } catch (e) {
    console.log('error', e);
    return [];
  }
};
