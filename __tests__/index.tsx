import rejectAfter from '../src/rejectAfter'

describe('rejectAfter', () => {
  
  it('Resolves the promise if it resolves before the timeout', async () => {
    const myPromise = new Promise(resolve => setTimeout(resolve, 50));
    const resolvedPromise = await rejectAfter(myPromise, 100);
    expect(resolvedPromise).toBeUndefined()
  });

  it('Rejects the promise if it takes longer than the timeout specified', async () => {
    const myPromise = new Promise(resolve => setTimeout(resolve, 150));
    let rejectedPromise
    try{
      rejectedPromise = await rejectAfter(myPromise, 100);
    }catch(error){
      expect(error).toBeInstanceOf(Error)
    }
  })
});
