import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="container lg">
      <div className="flex">
        <div className="w-1/4">
            <div>
              <div><h3>Filter by Project Type</h3></div>
              <div>
                <ul>
                  <li><input name="conservationAreas" type="checkbox"></input> Conservation Areas</li>
                  <li><input name="HousingDevelopment" type="checkbox"></input> Housing Development</li>
                  <li><input name="TourismDevelopment" type="checkbox"></input> Tourism Development</li>
                </ul>
              </div>
            </div>
        </div>
        <div className="w-2/4">
            <div>
              <h1>Noonu Hiyaa Project</h1>
              <h3>Housing Project</h3>
              <h4>Atoll Council</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
              <p>View on the Map</p>
              <div>
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
