/*const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should have the correct if condition and statements', async () => {
    const rentMenuFunction = scriptFile.match(/RENT_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0]

    assert(/if\s+\[\[\s+-z[ \t]*\$AVAILABLE_BIKES[ \t]+\]\](([ \t]*;\s*)|\s*(?=\n+)\s*)then\s+MAIN_MENU(([ \t]*;\s*)|\s*(?=\n+)\s*)fi/.test(rentMenuFunction));
  });
});*/
