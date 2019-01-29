import { carDetails, confirmation, listingDetails, openAndLogin, startEdit } from '../support/utils';

describe('create a car listing', () => {
  it('create', () => {
    openAndLogin();

    listingDetails();

    carDetails();

    confirmation();

    startEdit();
  });
});
