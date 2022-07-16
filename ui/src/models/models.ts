export type group = {
  ID: number
  age: number
  name: string
  nameJp: string
  detail: string
  color: string
  posX: number
  posY: number
}

export type painter = {
  ID: number
  name: string
  nameJp: string
  detail: string
  group: string
  imgPath: string
}

export type art = {
  ID: number
  artist: string
  title: string
  detail: string
}

export type background = {
  ID: number
  age: number
  name: string
  detail: string
  posX: number
  posY: number
}