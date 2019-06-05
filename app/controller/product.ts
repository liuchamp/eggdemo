import { Controller } from 'egg';

export default class ProductController extends Controller {
  public async index() {
    const { ctx } = this;
    const result = await ctx.service.product.list();
     ctx.body = result;
     ctx.status = 200
  }
}
