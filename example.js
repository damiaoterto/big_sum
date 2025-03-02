const { sumArray: sumArrayNative } = require('./')
const largeArray = Float64Array.from({ length: 10_000_000 * 8 }, () => Math.random());

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function sumWithNativeModule() {
    console.time('native addon')
    const total = sumArrayNative(Buffer.from(largeArray.buffer))
    console.log('Total Sum Native', total)
    console.timeEnd('native addon')
}

function sumSimple() {
    console.time('simple sum')
    const total = sumArray(largeArray)
    console.log('Total Sum Simple', total)
    console.timeEnd('simple sum')
}

sumWithNativeModule()
sumSimple()