import { NewAppAng2Page } from './app.po';

describe('new-app-ang2 App', () => {
  let page: NewAppAng2Page;

  beforeEach(() => {
    page = new NewAppAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
