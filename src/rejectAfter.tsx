const rejectAfter = (promise: Promise<any>, timeout: number) : Promise<void> => { 
  return new Promise((resolve, reject) => {
    promise.then(resolve)
    setTimeout(() => {
      reject(new Error())
    }, timeout)
  })
}

export default rejectAfter