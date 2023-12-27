type Iprops = {
  info: string
}
function Name(props: Iprops) {
  return <div>
    <h1>name</h1>
    <h2>{props.info}</h2>
  </div>
}

export default Name
export async function getServerSideProps() {//Server-side-rendering 固定的函数名getServerSideProps
  //可以await异步请求

  console.log('每次请求都会执行')//线上环境下，每次请求刷新不会执行

  return {
    props: {
      info: '每次请求都会执行10000'
    }
  }
}

// export async function getStaticProps() {//static Generation 固定的函数名getStaticProps
//   //可以await异步请求

//   console.log('只在项目build的构建的时候执行')//线上环境下，每次请求刷新不会执行

//   return {
//     props: {
//       info: '只在项目build的构建的时候执行的数据'
//     }
//   }
// }





// http://localhost:3000/name 可以访问页面