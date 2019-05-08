# reject-after
> Rejects a promise if it didn't resolve before N milliseconds 


### Usage

```typescript
import rejectAfter from 'reject-after'

const myPromise = new Promise(resolve => setTimeout(resolve, 1000));

rejectAfter(myPromise, 500);
```