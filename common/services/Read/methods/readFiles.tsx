import fs from 'fs';
import path from 'path';

import { UtilService } from '@services/Util/Util';

interface IParams {
  dataPath: string;
}

export const readFiles = ({ dataPath }: IParams): any[] => {
  const projectDirectory = path.join(process.cwd(), dataPath);
  const filenames = fs.readdirSync(projectDirectory);

  const data: any[] = filenames.map((filename: string) => {
    const filePath = path.join(projectDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    if (UtilService.isJsonString(fileContent)) {
      return JSON.parse(fileContent);
    } else {
      return fileContent;
    }
  });

  const dataSorted = data.sort((a, b) => a.order - b.order);

  return dataSorted;
};
