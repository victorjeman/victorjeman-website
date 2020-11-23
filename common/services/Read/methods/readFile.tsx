import fs from 'fs';
import path from 'path';

import { UtilService } from '@services/Util/Util';

interface IParams {
  dataPath: string;
}

export const readFile = ({ dataPath }: IParams): any => {
  console.log('dataPath: ', dataPath);

  const filePath = path.join(process.cwd(), dataPath);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  if (UtilService.isJsonString(fileContent)) {
    return JSON.parse(fileContent);
  } else {
    return fileContent.toString();
  }
};
