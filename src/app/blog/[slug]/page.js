export default function Page({ params }) {
    return <div>My Post: {params.slug}</div>
  }


  export const generateMetadata = ({params})=>{
    return{
      title:params.slug + ' blog',
      description:params.slug +" blog description"
    }
    
  }