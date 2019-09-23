import { Ng5Page } from './app.po';

describe('ng5 App', () => {
  let page: Ng5Page;

  beforeEach(() => {
    page = new Ng5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
