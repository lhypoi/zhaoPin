import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Dr.D Essay Mentor'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
