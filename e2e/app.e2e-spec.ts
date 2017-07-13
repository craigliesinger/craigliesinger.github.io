import { CLGitPage } from './app.po';

describe('clgit App', () => {
  let page: CLGitPage;

  beforeEach(() => {
    page = new CLGitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
