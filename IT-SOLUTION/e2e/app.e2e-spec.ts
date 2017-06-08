import { ITSOLUTIONPage } from './app.po';

describe('it-solution App', () => {
  let page: ITSOLUTIONPage;

  beforeEach(() => {
    page = new ITSOLUTIONPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
