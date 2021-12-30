import Route from '@ember/routing/route';
import { csv } from 'd3-fetch';

const GALLERIES_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRV476aaXFgAknoXAMO7nnbSbm0oIRdggzeRw7LUSv7QwMAQHrtM2rC3bRJmCOaOK_IGWA2wcfpj3eK/pub?gid=0&single=true&output=csv';

export default class ApplicationRoute extends Route {
  model() {
    return csv(GALLERIES_URL);
  }
}
