import { MultiAppsPage } from './app.po';

describe('multi-apps App', function() {
  let page: MultiAppsPage;

  beforeEach(() => {
    page = new MultiAppsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
