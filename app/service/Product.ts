import { Service } from 'egg';

/**
 * Test Service
 */
export default class Product extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */

    public async list(): Promise<ProductItem[]> {

        return [{id: 102030, title: "sdignaidfai"}];
      }
  
}

export interface ProductItem {
    id: number;
    title: string;
}