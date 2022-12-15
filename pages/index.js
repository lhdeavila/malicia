// pages/index.js 
import App from '../src/containers/App'
import Link from 'next/link';

function Homepage(){
  return(
    <App>
      <h1> Home </h1>
      <div>
        <ul>
          
            <Link href="/about">
              About
            </Link>
          
        </ul>
        </div>
    </App>
  )
}

export default Homepage;