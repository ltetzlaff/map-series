const { mapSeries } = require("../dist/index")

const arr = new Array(10)
  .fill(0)
  .map((v, i) => i)

async function run() {
  console.time("run")

  await mapSeries(arr, (v, i, len) => {
    return new Promise((resolve, reject) => {
      console.log("issueing " + v)
      setTimeout(() => {
        console.log("resolving " + v)
        resolve(v)
      }, 20)
    })
  })

  console.timeEnd("run")
}

run()