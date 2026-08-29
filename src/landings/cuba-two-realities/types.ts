export interface CommonsImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  author: string
  authorUrl: string
  sourceUrl: string
  license: string
  licenseUrl: string
  creditLine: string
}

export interface SourceReference {
  id: string
  label: string
  publisher: string
  date: string
  url: string
  note: string
}

export interface DocumentaryNote {
  kicker: string
  value: string
  body: string
  sourceId: string
}

export interface VoiceFragment {
  number: string
  title: string
  place: string
  text: string
  sourceId: string
  imageId: string
}
