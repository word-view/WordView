export function getImage(image: string) {
  return require(`../../assets/${image}.png`)
}

export function getImageJpeg(image: string) {
  return require(`../../assets/${image}.jpeg`)
}

export function getImageJpg(image: string) {
  return require(`../../assets/${image}.jpg`)
}
