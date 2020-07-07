import Link from "next/link";
import fetch from 'isomorphic-unfetch';

const Robots=()=>{
  return <div>
      <h1>Robots</h1>
      <Link href={'/'}><button>Home</button></Link>
      <div>Some Data</div>
  </div>


};
export default Robots;