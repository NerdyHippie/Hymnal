import { HymnalPage } from './app.po';

describe('hymnal App', function() {
  let page: HymnalPage;

  beforeEach(() => {
    page = new HymnalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
