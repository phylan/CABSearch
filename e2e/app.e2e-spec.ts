import { CABSearchPage } from './app.po';

describe('cabsearch App', () => {
  let page: CABSearchPage;

  beforeEach(() => {
    page = new CABSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
