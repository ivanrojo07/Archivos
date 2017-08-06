import { ManejoDeArchivosPage } from './app.po';

describe('manejo-de-archivos App', () => {
  let page: ManejoDeArchivosPage;

  beforeEach(() => {
    page = new ManejoDeArchivosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
