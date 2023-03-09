import { describe, expect, it } from '@jest/globals';
import Categories from '../../models/Category.js';

describe('Testing Category model', () => {
  const objectCategory = {
    name: 'AUTOCUIDADO',
    status: true,
  };
  it('Must instantiate a new category', () => {
    const category = new Categories(objectCategory);

    expect(category.name).toEqual(objectCategory.name);
    expect(category.status).toEqual(objectCategory.status);
  });
});
