export type SearchResultItem = {
  topics?: string[]
  hasIcons?: boolean
  specifications?: string
  type: string
  isEvent?: boolean
  date?: string
  title: string
  content: string
  href?: string
  image?: {
    src?: string
    alt?: string
    source?: { srcset: string; media: string }
  }
}
