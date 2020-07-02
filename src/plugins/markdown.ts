import marked from 'marked'
import DOMPurify from 'dompurify'

// https://github.com/cure53/DOMPurify/blob/master/demos/hooks-target-blank-demo.html
DOMPurify.addHook('afterSanitizeAttributes', function (node) {
  if ('target' in node) {
    ;(node as HTMLElement).setAttribute('target', '_blank')
  }
})

export const markdown = (text: string) => {
  return DOMPurify.sanitize(marked(text))
}
