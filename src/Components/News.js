import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

   const update = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5e177a135b3a4bf4b9498a72a5647184&page=${page}&pageSize=6`;
    setloading(true)
    props.setProgress(30);

    let data = await fetch(url);
    props.setProgress(60);
    let parsedData = await data.json();

    props.setProgress(100)

    setarticles(parsedData.articles)
    setloading(false)
    settotalResults(parsedData.totalResults)
  

  }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5e177a135b3a4bf4b9498a72a5647184&page=${page+1}&pageSize=6`;
    setpage(page+1)
    setloading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
    

    setarticles(articles.concat(parsedData.articles))
    setloading(false)
    settotalResults(parsedData.totalResults)
  };
  
  // const handlePrevClick = async () => {
  //   setpage(page-1)
  //   update()
  // }

  //  const handleNextClick = async () => {

  //   setpage(page+1)
  //   update()
  // }

  useEffect(() => {
    document.title = props.category.toUpperCase();
    update();
    // eslint.disable-next-line
  }, [])
  

    return (
          <div className='container my-3'>
            <h2 className='text-center' style={{margin: '35px 0px', marginTop: '90px'}}> Tech Industry Top Headlines </h2> 

          {loading && <Spinner/>}
          
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner></Spinner>}
        >
          <div className='container'>
            <div className="row">
                {articles.map((element) => {
                  return <div className="col-md-4 my-4 " key={element.url}>
                      <NewsItem  title={element.title?element.title:" "} 
                      description={element.description?element.description:" "} 
                      imgUrl={element.urlToImage?element.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYN09MsHDipPCV4-D-ECTD1y-HLUOA9eSy_g&usqp=CAU"} 
                      newsUrl={element.url}
                      author = {element.author?element.author:"Unknown"}
                      date = {element.publishedAt}
                      />
                    </div>
                })}
            </div>
          </div>
            </InfiniteScroll>
            {/* <div className=' container d-flex justify-content-between'>
            <button disabled={page<=1} type="button" className="btn btn-dark mx-3" onClick={handlePrevClick}> &larr; Previous</button>
            <button disabled={page+1 > Math.ceil(6)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div> */}
      </div>
    )
  }
export default News;