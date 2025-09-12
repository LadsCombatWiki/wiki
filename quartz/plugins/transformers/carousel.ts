import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

// @ts-ignore
import carouselScript from "../../components/scripts/carousel.inline"
import carouselStyle from "../../components/styles/carousel.inline.scss"

interface CarouselOptions {
  showDots: boolean
}

export const Carousel: QuartzTransformerPlugin<Partial<CarouselOptions>> = (opts) => {
  const showDots = opts?.showDots ?? true

  function escapeHtml(text: string): string {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;")
  }

  function carouselTransformer() {
    return (tree: any) => {
      visit(tree, "html", (node: any) => {
        // Check if the node contains a carousel tag
        const content = node.value as string
        if (content.startsWith("<Carousel>") && content.endsWith("</Carousel>")) {
          // Extract the content inside the carousel tag
          const innerContent = content.slice("<Carousel>".length, -"</Carousel>".length).trim()

          // Replace each <img ...> with a slide that includes optional caption
          const processedContent = innerContent.replace(/<img([^>]*?)>/gi, (match, attrs) => {
            const hasDataCaption = /\bdata-caption\s*=\s*(["']).*?\1/i.test(attrs)
            const titleMatch = attrs.match(/\btitle\s*=\s*(["'])(.*?)\1/i)
            const altMatch = attrs.match(/\balt\s*=\s*(["'])(.*?)\1/i)
            const dataCaptionMatch = attrs.match(/\bdata-caption\s*=\s*(["'])(.*?)\1/i)
            const rawCaption = (dataCaptionMatch?.[2] ?? titleMatch?.[2] ?? altMatch?.[2] ?? "").trim()
            const captionAttr = !hasDataCaption && rawCaption
              ? ` data-caption="${escapeHtml(rawCaption)}"`
              : ""

            const figcaption = rawCaption
              ? `<figcaption class="quartz-carousel-caption">${escapeHtml(rawCaption)}</figcaption>`
              : ""

            return `<div class="quartz-carousel-slide"><figure class="quartz-carousel-figure"><img${attrs}${captionAttr}>${figcaption}</figure></div>`
          })

          // Replace the node with a div that has a carousel class
          node.type = "html"
          node.value = `<div class="quartz-carousel" data-needs-init="true">
                <div class="quartz-carousel-slides">
                    ${processedContent}
                </div>
                ${showDots ? '<div class="quartz-carousel-dots"></div>' : ""}
                <button class="quartz-carousel-prev" aria-label="Previous slide">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                    </svg>
                </button>
                <button class="quartz-carousel-next" aria-label="Next slide">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </svg>
                </button>
                </div>`
        }
      })
    }
  }

  return {
    name: "Carousel",
    markdownPlugins() {
      return [carouselTransformer]
    },
    externalResources() {
      return {
        css: [
          {
            content: carouselStyle,
            inline: true,
          },
        ],
        js: [
          {
            script: carouselScript,
            loadTime: "afterDOMReady",
            contentType: "inline",
          },
        ],
      }
    },
  }
}