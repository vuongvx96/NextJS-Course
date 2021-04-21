import { route } from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'

function ClientProjectsPage() {
  const router = useRouter()

  function loadProjectHandler() {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {
        id: 'max',
        clientprojectid: 'projecta'
      }
    })
  }
  return (
    <div>
      <h1 onClick={loadProjectHandler}>The Projects of a Given Client</h1>
    </div>
  )
}

export default ClientProjectsPage
