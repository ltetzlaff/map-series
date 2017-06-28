export async function mapSeries(values : Array<any>, iterator: (v : any, i? : number, len? : number) => Promise<any>) : Promise<any[]> {
  const ret : any[] = []
  const len = values.length

  await values.reduce((a, v, i) => {
    return a.then(() => {
      return iterator(v, i, len).then(result => {
        ret.push(result)
      })
    })
  }, Promise.resolve())
  return ret
}