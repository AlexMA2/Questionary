export const removeItem = (array, index) => {
  const newArray = array.filter((item, i) => i !== index)
  return newArray
}

export const randomizedArray = (array) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = temp
  }
  return newArray
}
