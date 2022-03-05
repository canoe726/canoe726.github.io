import { unified } from 'unified'
import remarkParse from 'remark-parse'
// import remark from 'remark'
import remarkHtml from 'remark-html'

export default async function markdownToHtml (markdown: any) {
  // const result = await remark().use(html).process(markdown)
  const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown)
  return file.toString()
}
