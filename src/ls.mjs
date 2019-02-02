import _fs from 'fs';
const fs = _fs.promises;
import util from 'util';

(async() => {
  const files = await fs.readdir('.');
  for (let f of files) {
    console.log(f);
    console.logz("aaa");
  }
})().catch(err => {
  console.error(err);
});