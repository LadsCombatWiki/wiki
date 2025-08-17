import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const links = [
  { text: "All Orbit Stellactrums by @nranola", url: "https://docs.google.com/spreadsheets/d/1O6swXgGb253oo0dLCC6Ae-evF3gDcCDY9Iw3hdKh_qY/edit?gid=984932283#gid=984932283" },
  { text: "Protocore Substat Values by @nranola", url: "https://docs.google.com/spreadsheets/d/1QxvwI9THT4Y10o9K5XvRmB0eK0xa9IIo6LcIN72gaSQ/edit?gid=1186961727#gid=1186961727" },
  { text: "Abyssal Chaos Guides (Tobias, Final Farewell, Kahli, etc.) by @k.monke", url: "https://linktr.ee/theresakuchi" },
  // Add more links as needed
]

const ExternalLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => (
  <div class={displayClass ?? ""}>
    <h3>External Links</h3>
    <ul>
      {links.map(link => (
        <li>
          <a href={link.url} target="_blank" rel="noopener">{link.text}</a>
        </li>
      ))}
    </ul>
  </div>
)

ExternalLinks.css = "" // Add custom styles if needed
export default (() => ExternalLinks) satisfies QuartzComponentConstructor