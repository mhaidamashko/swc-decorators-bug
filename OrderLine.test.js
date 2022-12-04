import { OrderLine } from './OrderLine';

it('check checky', () => {
    const instance = new OrderLine(5);
    expect(instance.price).toEqual(5);
    expect(instance.amount).toEqual(1);
    expect(instance.total).toEqual(5); // it returns NaN but should be 5
});