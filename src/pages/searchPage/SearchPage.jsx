import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SearchPage.css';
// import Logo from '../../assets/logo.jpeg'
import { useStateValue } from '../../StateProvider';
import useGoogleSearch from '../../customHook/useGoogleSearch';
import Search from '../../components/search/Search';
// import News from '../../container/recentNews/RecentNews';
import NewsCard from '../../modals/newsCard/NewsCard';
import NewsAPI from "../../components/news/news";
import Logo from "../../components/logo/logo";
import SettingsIcon from "@material-ui/icons/Settings";
import Images from '../../components/images/images';


const SearchPage = () => {
    const [loading, setLoading ] = useState(false);
    const [ startIndex, setStartIndex ] = useState(0)
    const [cardItem, setCardItem ] = useState([]);
    const [openModal, setOpenModal ] = useState(false);
    const [{term}, dispatch ] = useStateValue();
    const { data } = useGoogleSearch(term, startIndex)

    const history = useHistory();

    useEffect(() => { 
        data?.items !== undefined ? setLoading(false) : setLoading(true)
    }, [data])

    const handleModal = cacheId => { 
        const card = data?.items.filter(item => item.cacheId === cacheId)
        const newcard = cardItem.push(card[0])
        setCardItem(newcard)
    }
    return (
        <div className="searchPage">

            <div className="searchPage__header">

                 {/* to settings page */}
                 <Link to="/settings" className="home_settings_btn" >
                    <SettingsIcon className="gear_setting" />
                    <i >Settings</i>
                </Link>

                <div className="searchPage__logoContainer">
                    <Logo />
                </div>

                <div className="searchPage__headerBody">
                    <Search hideButton term={term}/>
                </div>
            </div>




            <div className="searchPage__body">
                <div className="latest-news">
                    <NewsAPI query={ term } />
                    
                    {/* <Images query={ term }/> */}

                </div> 

                <div className="search-results">
                {
                    !loading ? (
                        <div className="searchPage__results">

                            <p className="images" >
                                <Link 
                                    // onClick={()=>history.push(`/search?images=${term}`)} 
                                    to= { "/images?dshbfsjdhfjd=" + term }
                                > Images </Link>
                            </p>
                            
                            <h3>Your search results</h3> 
                            <hr></hr>
                            <p className="searchPage__resultCount">
                                About { data?.searchInformation.formattedTotalResults} results in ({data?.searchInformation.formattedSearchTime}) for { term }.
                            </p>
                            {
                                data?.items.map((item, index) => (

                                    <div className="searchPage__result searchPageResultShadow" key={index}>
                                        <div className="image-container">
                                            <a href={item.link} className="result-site">
                                                {  
                                                    item.pagemap?.cse_image?.length > 0 && 
                                                    item.pagemap?.cse_image[0]?.src && 
                                                    (
                                                        <img className="searchPage__resultImage"src={
                                                            item.pagemap?.cse_image[0]?.src
                                                        } alt=""/>
                                                    )
                                                }
                                                <span>{ item.displayLink}</span>
                                            </a>
                                            <a href={item.link} className="searchPage__resultTitle">
                                                <h2>{item.title}</h2>
                                            </a>
                                        </div>

                                        <div className="text-container">
                                            <a href={item.link} className="searchPage__resultTitle">
                                                <h2>{item.title}</h2>
                                            </a>
                                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                                            {/* <button onClick={() => handleModal(item.cacheId)}>view more</button> */}
                                            {/* {
                                                openModal && <NewsCard newsItem={cardItem} />
                                            } */}
                                        </div>
                                    </div>
                                ))
                            }

                            <div className="pagination-section">
                                <div 
                                    onClick={() => setStartIndex(startIndex - 10)} 
                                    className="paginate-btn"
                                    > Previous
                                </div>
                                <div 
                                    onClick={() => setStartIndex(startIndex + 10)} 
                                    className="paginate-btn"
                                    >Next
                                </div>
                            </div>

                        </div>
                    ) 
                    : 
                    <div>
                      
                    </div>
                }
                </div> 
                
            </div>
        </div>
    )
}

export default SearchPage;




