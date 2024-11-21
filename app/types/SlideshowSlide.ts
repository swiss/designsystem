export type SlideshowSlide = {
  image: {
    src: string
    alt: string
    height: number | string
    width: number | string
  }
  source: {
    srcset: string
    height: number | string
    width: number | string
    media: string
  }
  caption: {
    title?: string
    description?: string
    copyright?: string
  }
  title?: string
  description?: string
  footerInfo?: string
}
