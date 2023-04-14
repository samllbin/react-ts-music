import hyRequest from '@/service'
export default function getRanking() {
  return hyRequest.get({
    url: '/toplist/detail'
  })
}
