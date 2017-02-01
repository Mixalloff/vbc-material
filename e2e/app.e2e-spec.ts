import { VbcMaterialPage } from './app.po';

describe('vbc-material App', function() {
  let page: VbcMaterialPage;

  beforeEach(() => {
    page = new VbcMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
