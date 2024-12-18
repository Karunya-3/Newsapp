import React, { Component } from 'react'
import Newitem from './Newitem'

export class News extends Component {
  articles=
     [
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Henry Zeffman: How a LinkedIn post sparked a transatlantic row",
              "description": "A call for Labour activists to campaign for Kamala Harris has put Keir Starmer in an awkward spot.",
              "url": "https://www.bbc.co.uk/news/articles/ce318l17dd3o",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/abaa/live/7775e110-912b-11ef-aebb-6d4ec884186b.png",
              "publishedAt": "2024-10-23T11:52:11.5666793Z",
              "content": "Theres another element to this, too. The British political world is utterly obsessed with American politics, even if it is an almost totally unrequited passion.\r\nEvery four years, British politicos s… [+971 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Starbucks boss shakes up menu to win back customers",
              "description": "The coffee shop chain has also promised to look at pricing and staffing to prevent bottlenecks",
              "url": "https://www.bbc.co.uk/news/articles/czxgxjrdy80o",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2301/live/f588cb80-910d-11ef-8b6e-65f017a0b0c5.jpg",
              "publishedAt": "2024-10-23T11:37:16.9269323Z",
              "content": "The company said global sales tumbled by 7% between July and September. The downturn was more dramatic in China, where sales fell 14% for the same period, as the economy there falters.\r\nDespite our h… [+774 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Health Secretary Wes Streeting will vote against legalising assisted dying",
              "description": "The health secretary has told Labour MPs he can not back a change in the law because of the state of palliative care.",
              "url": "https://www.bbc.co.uk/news/articles/cx2lyl8jrvlo",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e3a9/live/115d7420-9116-11ef-88b8-8b00cbc9d4aa.png",
              "publishedAt": "2024-10-23T11:22:24.1603095Z",
              "content": "Cabinet ministers have been instructed not to campaign in public on either side of the issue, ahead of a vote on the Terminally Ill Adults (End of Life) Bill on 29 November. \r\nDozens of Labour MPs ar… [+1716 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Gisele Pelicot takes stand in French mass rape trial",
              "description": "Gisele Pelicot takes stand in French mass rape trial",
              "url": "https://www.bbc.co.uk/news/articles/ckgr2yym0nko",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1a2d/live/537ff930-6139-11ee-b101-6f93d6dfbcc2.png",
              "publishedAt": "2024-10-23T10:37:19.3637395Z",
              "content": "Gisèle Pelicot, the French woman at the centre of a trial of 50 men who are accused of raping her after she was drugged by her then-husband, has said that she wants women who have been raped to know … [+639 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Manchester Arena bomb survivors win conspiracy harassment case",
              "description": "Survivors of the Manchester Arena bomb win a case against a man who claimed no-one was injured.",
              "url": "https://www.bbc.co.uk/news/articles/cj0j8r8558yo",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1619/live/b04496f0-9124-11ef-88b8-8b00cbc9d4aa.jpg",
              "publishedAt": "2024-10-23T10:07:13.6762719Z",
              "content": "Twenty-two people were killed and hundreds more injured when Salman Abedi detonated a homemade rucksack-bomb in the foyer of the venue as thousands of people left an Ariana Grande concert.\r\nThe court… [+575 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Donanemab: NHS will not fund new drug to slow Alzheimer’s",
              "description": "A new drug that slows the pace of Alzheimer's disease is too expensive for too little benefit to be used on the NHS, the watchdog says.",
              "url": "https://www.bbc.co.uk/news/articles/c1e7pllez0xo",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1408/live/a64822d0-9119-11ef-88b8-8b00cbc9d4aa.jpg",
              "publishedAt": "2024-10-23T09:52:15.3476217Z",
              "content": "People do not get better on donanemab. It is not a cure for Alzheimer's disease, but it slows the progression of the disease. \r\nIt works by clearing a sticky protein from the brain - called amyloid -… [+1475 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Smartphones: 'I feel guilty for not buying my daughter one for school'",
              "description": "A mum says her daughter came home in tears after she did not have a smartphone to use in a lesson.",
              "url": "https://www.bbc.co.uk/news/articles/cn030kjz04xo",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d9c9/live/fdbd6ed0-9092-11ef-8e6d-e3e64e16c628.jpg",
              "publishedAt": "2024-10-23T09:22:15.92692Z",
              "content": "Whitchurch High said every school had its own policies on phones and electrical devices, and it had developed \"an acceptable use\" policy.\r\n\"We regularly review our policy and educate students on acce… [+1112 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Is the system letting down people who were harmed by Covid vaccines?",
              "description": "People affected by rare blood clots say they feel they have been airbrushed out of the pandemic.",
              "url": "https://www.bbc.co.uk/news/articles/c1d5d6nng67o",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/cb6a/live/79561300-908c-11ef-89ae-5575c76d98e6.png",
              "publishedAt": "2024-10-23T08:52:19.2928612Z",
              "content": "But something dramatic has happened since the pandemic. There have been more than double the number of claims under the VDPS for Covid jabs than during the previous four decades for all other vaccine… [+2174 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Chris Kaba: Black Londoners traumatised, community leaders say",
              "description": "Community leaders say London's black communities are \"traumatised\" over the Chris Kaba court case.",
              "url": "https://www.bbc.co.uk/news/articles/c3dvdmzxz82o",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4c00/live/c7318790-909a-11ef-89ae-5575c76d98e6.png",
              "publishedAt": "2024-10-23T07:52:16.2234224Z",
              "content": "Despite his convictions, et cetera, you've got a family here who are grieving the loss; a child now has no father,\" he said.\r\nFor me, today is about processing the fact that there's a not guilty verd… [+908 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Idris Elba: Why I'm planning a move to Africa",
              "description": "The British star is backing film projects across the continent and wants to be closer to the action.",
              "url": "https://www.bbc.co.uk/news/articles/c98yz7pxrlko",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3bc9/live/3cc0afe0-8d6c-11ef-8e6d-e3e64e16c628.jpg",
              "publishedAt": "2024-10-23T01:37:14.3481731Z",
              "content": "\"This sector is a soft power, not just across Ghana but across Africa.\r\n\"If you watch any film or anything that has got to do with Africa, all youre going to see is trauma, how we were slaves, how we… [+1204 chars]"
          }
      ]
  
  
  constructor() {
    super();
    this.state = {
      articles: this.articles, 
      loading: false
    };
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/everything?q=bitcoin&apiKey=e9316d67cff940a0a300c200be44ca3f";
    let data= await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})

  }

  render() {
    return (
      <div className='container '>
        <h1>News Headlines</h1>
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url} >
                <Newitem
                  title={element.title?element.title:""}
                  description={element.description?element.description+"...":""}
                  urlToImage={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>

      </div>
    )
  }
}

export default News

