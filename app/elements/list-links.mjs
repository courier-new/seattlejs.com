export default function ListLinks({ html, state = {} }) {
  const { attrs } = state
  const { links } = attrs
  const { linkedin, twitter, url, github } = { ...links }
  return html`
    <style>
      ul {
        list-style: none;
        margin: 8px 0 0 0;
        padding: 0;
      }
    </style>
    <ul>
      ${linkedin
        ? `<li class="links-list"><i class="fab fa-linkedin" style="width: 20px;"></i><a target="_blank" href="https://www.linkedin.com/in/${linkedin}">${linkedin}</a></li>`
        : ''}
      ${twitter
        ? `<li class="links-list"><i class="fab fa-x-twitter" style="width: 20px;"></i><a target="_blank" href="https://twitter.com/${twitter}">@${twitter}</a></li>`
        : ''}
      ${url
        ? `<li class="links-list"><i class="fa fa-globe" style="width: 20px;"></i><a target="_blank" href="${url}">${
            url.split('://')[1]
          }</a></li>`
        : ''}
      ${github
        ? `<li class="links-list"><i class="fab fa-github" style="width: 20px;"></i><a target="_blank" href="https://github.com/${github}">${github}</a></li>`
        : ''}
    </ul>
  `
}
