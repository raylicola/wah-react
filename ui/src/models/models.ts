export type group = {
  ID: number
  name: string
  color: string
  detail: string
}

export type painter = {
  ID: number
  name: string
  detail: string
  groupID: number
  imgPath: string
}

export type art = {
  ID: number
  name: string
  detail: string
  groupID: number
  imgPath: string
}