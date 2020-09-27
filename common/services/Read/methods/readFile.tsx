import fs from 'fs';
import path from 'path';

interface IParams {
  dataPath: string;
}

export const readFile = ({ dataPath }: IParams): any => {
  console.log('process.cwd(): ', process.cwd());
  const filePath = path.join(process.cwd(), dataPath);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  console.log('data: ', data);

  return data;
};
