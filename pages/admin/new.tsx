import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="container lg">
      <div className="flex">
        <div className="w-1/4">
            <div>
                <ul>
                    <li>
                        <Link href="/admin/new">
                            <a>New Project</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/projects">
                            <a>Project List</a>
                        </Link>
                    </li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
        <div className="w-2/4">
            <div>
              <h1>Add New Project</h1>
              <div>
                  <form>
                    <div>
                        <label htmlFor="name">Project Name</label><br />
                        <input id="name" type="text" name="name"></input>
                    </div>
                    <div>
                        <label htmlFor="manager">Manager</label><br />
                        <select id="manager" name="manager" >
                            <option value="volvo">Atoll Council</option>
                            <option value="saab">Kudafari Council</option>
                            <option value="mercedes">Maafaru Council</option>
                            <option value="audi">Manadhoo Council</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="type">Type</label><br />
                        <select name="type" id="type">
                            <option value="volvo">Housing Development Project</option>
                            <option value="saab">Conservation Area</option>
                            <option value="mercedes">Tourism Development Project</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label><br />
                        <textarea id="description" rows={4} cols={50}></textarea>
                    </div>
                    <div>
                        <label>Images</label><br />
                        <button>Add Image</button>
                        <ul>
                            <li>image1.png</li>
                            <li>image2.png</li>
                        </ul>
                    </div>
                    <div>
                        <input type="submit" value="Submit"></input>
                    </div>
                  </form>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
