// This file is created by egg-ts-helper@1.25.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportProduct from '../../../app/service/Product';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    product: ExportProduct;
    test: ExportTest;
  }
}
