import { useState } from 'react'
import Content from './components/content'
import Form from './components/form'

const api = 'https://api.github.com'
const fetchData = async (query) => {
  try {
    const response = await fetch(`${api}/search/users?q=${query}`)
    const json = await response.json()
    return json.items || []
  } catch (err) {
    throw new Error(err)
  }
}

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  // get data from user
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  // on submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await fetchData(search)
    setUsers(result)
    setSearch('')
  }

  // console.log(users)
  return (
    <>
      <div className="text-white max-w-[600px] mx-auto p-16">
        <div className="border border-slate-600 rounded-lg p-5">
          <h1 className="text-3xl text-center tracking-wider font-bold">
            GitHub User Search
          </h1>
          <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            value={search}
          />
          <div className="mt-10">
            <div className="flex items-center space-x-20">
              <span>Thumbnail</span>
              <span>User Name</span>
            </div>
            {users.map((user) => (
              <Content
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
