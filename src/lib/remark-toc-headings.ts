import slugger, {slug} from 'github-slugger'
import { toString } from 'mdast-util-to-string'
import { remark } from 'remark'
import { Toc } from 'types/Toc'
import { visit } from 'unist-util-visit'
import { VFile } from 'vfile'

export const remarkTocHeadings = () => (tree: any, file: VFile) => {
  const toc: Toc = []
  visit(tree, 'heading', (node: any) => {
    const textContent = toString(node)
    toc.push({
      value: textContent,
      url: '#' + slug(textContent),
      depth: node.depth,
    })
  })
  file.data.toc = toc
};

export const extractTocHeadings = async (markdown: string) => {
  const vfile = await remark().use(remarkTocHeadings).process(markdown)
  return vfile.data.toc
};
